import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './v3c.css';
window.gsap = gsap; window.ScrollTrigger = ScrollTrigger; window.Lenis = Lenis;

/* contact form: no backend yet — compose an email in the visitor's mail app */
const form = document.getElementById('contact-form');
if (form) form.addEventListener('submit', (e) => {
  e.preventDefault();
  const d = new FormData(form);
  const body = `Name: ${d.get('name')}\nEmail: ${d.get('email')}\nProject type: ${d.get('type')}\n\n${d.get('message')}`;
  location.href = `mailto:ialbertbislimi@gmail.com?subject=${encodeURIComponent('New project — ' + d.get('type'))}&body=${encodeURIComponent(body)}`;
});

(function(){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Lenis smooth scroll ---------- */
  var lenis = null;
  if (!reduceMotion && window.Lenis) {
    lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger && ScrollTrigger.update);
  }

  /* ---------- nav bg on scroll ---------- */
  var nav = document.getElementById('nav');
  function onScroll(){
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ---------- hero: kinetic headline + device scatter -> lock stage ----------
     Line 1 is already on screen at scroll 0 (first frame can't be empty). Line 2
     and the five device frames share one timeline: frames fly in from scattered,
     blurred, dim corners of the full viewport to a tight sharp cluster, and line 2
     reveals in step via a clip-mask slide — never an opacity/color fade, so no
     word is ever "grey" mid-transition, only progressively unmasked. */
  if (window.gsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  var h1 = document.getElementById('hero-h1');
  Array.prototype.slice.call(h1.querySelectorAll('.hline')).forEach(function(line){
    var words = line.textContent.trim().split(' ');
    line.innerHTML = words.map(function(w){
      return '<span class="word"><span>' + w + '&nbsp;</span></span>';
    }).join('');
  });
  var line1Spans = h1.querySelectorAll('.hline-1 .word > span');
  var line2Spans = h1.querySelectorAll('.hline-2 .word > span');

  var devicesWrap = document.getElementById('hero-devices');
  var devices = devicesWrap ? Array.prototype.slice.call(devicesWrap.querySelectorAll('.device')) : [];
  var lockFlash = document.getElementById('hero-lock-flash');
  var heroEl = document.getElementById('hero');

  /* scatter: fraction of the hero's own box (so 1280x800 and 1440x900 scatter the
     same way), blurred + dim + rotated — full-viewport corners/edges.
     lock: small fixed px offsets from hero-center — a constant-size cluster that
     can never clip at either target width, sharp (blur 0) and fully opaque.
     mobile keeps only the lead browser + one phone, smaller lock offsets. */
  var DESKTOP_CFG = {
    'dv-lead':      {fx:-.30, fy:-.24, srot:-13, sscale:.60, sblur:6,  sop:.58, lx:-34,  ly: 10, lrot:-3},
    'dv-browser-a': {fx: .36, fy:-.30, srot: 12, sscale:.52, sblur:5,  sop:.54, lx: 196, ly:-40, lrot: 5},
    'dv-browser-b': {fx:-.38, fy: .30, srot: 15, sscale:.50, sblur:7, sop:.54, lx:-214, ly: 55, lrot:-6},
    'dv-phone-a':   {fx: .33, fy: .33, srot:-12, sscale:.58, sblur:5,  sop:.58, lx: 206, ly: 85, lrot: 4},
    'dv-phone-b':   {fx:-.05, fy:-.40, srot:  8, sscale:.52, sblur:6,  sop:.54, lx:-150, ly:108, lrot:-4}
  };
  var MOBILE_CFG = {
    'dv-lead':    {fx:-.30, fy:-.22, srot:-10, sscale:.6, sblur:7, sop:.4, lx:0, ly:-74, lrot:-2},
    'dv-phone-a': {fx: .30, fy: .26, srot: 10, sscale:.6, sblur:7, sop:.4, lx:0, ly: 86, lrot: 2}
  };
  function deviceKey(el){
    for (var c in DESKTOP_CFG) { if (el.classList.contains(c)) return c; }
    return null;
  }
  function cfgFor(el, mobile){
    var key = deviceKey(el);
    return key ? (mobile ? MOBILE_CFG[key] : DESKTOP_CFG[key]) : null;
  }

  var wasLocked = false;
  function playLockFlash(){
    if (!window.gsap || !lockFlash) return;
    gsap.killTweensOf(lockFlash);
    gsap.fromTo(lockFlash, {opacity:0, scale:.7}, {
      opacity:1, scale:1.18, duration:.32, ease:'power2.out',
      onComplete: function(){ gsap.to(lockFlash, {opacity:0, duration:.6, ease:'power2.in'}); }
    });
  }
  function setLocked(on){
    if (on === wasLocked) return;
    wasLocked = on;
    if (devicesWrap) devicesWrap.classList.toggle('is-locked', on);
    h1.classList.toggle('is-locked', on);
    if (on && !reduceMotion) playLockFlash();
  }

  function runHero(){
    if (!window.gsap) return;
    var mobile = window.matchMedia('(max-width:640px)').matches;

    gsap.set(line1Spans, {yPercent:0});
    gsap.set('.eyebrow, .hero-sub, .hero-ctas', {opacity:0, y:12});

    if (reduceMotion) {
      gsap.set(line2Spans, {yPercent:0});
      gsap.set('.eyebrow, .hero-sub, .hero-ctas', {opacity:1, y:0});
      devices.forEach(function(el){
        var cfg = cfgFor(el, mobile);
        if (!cfg) return;
        gsap.set(el, {xPercent:-50, yPercent:-50, x:cfg.lx, y:cfg.ly, rotation:cfg.lrot, scale:1, filter:'blur(0px)', opacity:1});
      });
      setLocked(true);
      return;
    }

    gsap.set(line2Spans, {yPercent:115});
    gsap.to('.eyebrow, .hero-sub, .hero-ctas', {opacity:1, y:0, duration:.6, stagger:.08, ease:'power2.out', delay:.15});

    var heroRect = heroEl.getBoundingClientRect();
    devices.forEach(function(el){
      var cfg = cfgFor(el, mobile);
      if (!cfg) return;
      gsap.set(el, {
        xPercent:-50, yPercent:-50,
        x: cfg.fx * heroRect.width, y: cfg.fy * heroRect.height,
        rotation: cfg.srot, scale: cfg.sscale, filter: 'blur(' + cfg.sblur + 'px)', opacity: cfg.sop
      });
    });

    if (!mobile && window.ScrollTrigger) {
      /* the dramatic moment: ~2.3 viewports of pinned, scrubbed scroll carries the
         frames from their scattered rest pose into the sharp locked cluster, with
         line 2 unmasking in step and a one-shot glow pulse firing right at lock. */
      gsap.timeline({
        scrollTrigger: {
          trigger: '#hero', start: 'top top', end: '+=230%', scrub: .6, pin: true, anticipatePin: 1,
          onUpdate: function(self){ setLocked(self.progress > 0.93); }
        }
      }).add(devices.map(function(el){
          var cfg = cfgFor(el, false);
          return cfg ? gsap.to(el, {x:cfg.lx, y:cfg.ly, rotation:cfg.lrot, scale:1, filter:'blur(0px)', opacity:1, ease:'power2.inOut', duration:1}, 0) : null;
        }).filter(Boolean), 0)
        .to(line2Spans, {yPercent:0, duration:.7, stagger:.055, ease:'power3.out'}, .2);
    } else {
      /* mobile: the same scatter -> lock mechanic, scaled down and time-based on
         load instead of scroll-pinned — lighter, no scroll-jacking. */
      var mtl = gsap.timeline({paused:true});
      devices.forEach(function(el){
        var cfg = cfgFor(el, true);
        if (!cfg) return;
        mtl.to(el, {x:cfg.lx, y:cfg.ly, rotation:cfg.lrot, scale:1, filter:'blur(0px)', opacity:1, ease:'power2.inOut', duration:1.6}, 0);
      });
      mtl.to(line2Spans, {yPercent:0, duration:.6, stagger:.05, ease:'power3.out'}, .35)
         .call(function(){ setLocked(true); });
      var startM = function(){ setTimeout(function(){ mtl.play(); }, 1200); };
      if (document.readyState === 'complete') startM(); else window.addEventListener('load', startM, {once:true});
    }
  }
  runHero();

  /* ---------- scroll reveals (rest of the page) ---------- */
  if (window.gsap && window.ScrollTrigger) {
    if (reduceMotion) {
      document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-visible'); });
    } else {
      document.querySelectorAll('.reveal').forEach(function(el){
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: function(){ el.classList.add('is-visible'); }
        });
      });
    }
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-visible'); });
  }

  /* ---------- lazy video hydration (hero devices + work-grid loops) ----------
     videos never get a <source>/play() call under reduced motion — the poster
     <img> stays the only visual, satisfying the static/no-autoplay requirement. */
  function hydrateVideo(video){
    if (!video || video.dataset.hydrated) return;
    var mp4 = video.getAttribute('data-mp4');
    var webm = video.getAttribute('data-webm');
    if (!mp4 && !webm) return;
    video.dataset.hydrated = '1';
    if (webm) { var s1 = document.createElement('source'); s1.src = webm; s1.type = 'video/webm'; video.appendChild(s1); }
    if (mp4) { var s2 = document.createElement('source'); s2.src = mp4; s2.type = 'video/mp4'; video.appendChild(s2); }
    video.addEventListener('playing', function(){ video.classList.add('is-playing'); });
    video.load();
    var p = video.play();
    if (p && p.catch) p.catch(function(){ /* autoplay blocked — poster remains visible */ });
  }

  function lazyLoadVideosIn(root){
    var vids = root.querySelectorAll('video[data-mp4], video[data-webm]');
    if (!vids.length) return;
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) { hydrateVideo(entry.target); io.unobserve(entry.target); }
        });
      }, { rootMargin: '400px 0px' });
      vids.forEach(function(v){ io.observe(v); });
    } else {
      vids.forEach(hydrateVideo);
    }
  }

  if (!reduceMotion) {
    function startLazyVideos(){
      lazyLoadVideosIn(document); // hero devices qualify immediately (in viewport); work-grid tiles hydrate as they scroll in
    }
    if ('requestIdleCallback' in window) requestIdleCallback(startLazyVideos, {timeout: 1500});
    else window.addEventListener('load', function(){ setTimeout(startLazyVideos, 300); });
  }

  /* ---------- three.js particle field (lazy, desktop + motion-ok only) ---------- */
  function initParticles(){
    if (reduceMotion || window.innerWidth < 640) return;
    import('./three-lite.js').then(function(m){ window.THREE = m; buildParticles(); });
  }
  function buildParticles(){
    var canvas = document.getElementById('hero-canvas');
    var hero = document.querySelector('.hero');
    var renderer = new THREE.WebGLRenderer({canvas: canvas, alpha:true, antialias:false});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    var w = hero.clientWidth, h = hero.clientHeight;
    renderer.setSize(w, h);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, w/h, 1, 2000);
    camera.position.z = 480;

    var dense = window.innerWidth >= 1100;

    function makeLayer(count, spreadZ, zOffset, size, opacity, color){
      var geo = new THREE.BufferGeometry();
      var positions = new Float32Array(count * 3);
      for (var i=0; i<count; i++){
        positions[i*3]   = (Math.random()-0.5) * 1500;
        positions[i*3+1] = (Math.random()-0.5) * 950;
        positions[i*3+2] = zOffset + (Math.random()-0.5) * spreadZ;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      var mat = new THREE.PointsMaterial({
        color: color, size: size, transparent:true, opacity:opacity,
        sizeAttenuation:true, blending: THREE.AdditiveBlending, depthWrite:false
      });
      var pts = new THREE.Points(geo, mat);
      scene.add(pts);
      return pts;
    }

    /* two depth layers: a dim distant field + a brighter near field, for a sense of real depth */
    var far = makeLayer(dense ? 1100 : 550, 500, -260, 1.5, 0.32, 0x8C6A2E);
    var near = makeLayer(dense ? 650 : 320, 400, 180, 2.6, 0.62, 0xE8A33D);

    var mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', function(e){
      mouseX = (e.clientX / window.innerWidth - 0.5);
      mouseY = (e.clientY / window.innerHeight - 0.5);
    }, {passive:true});

    var clock = new THREE.Clock();
    var destroyed = false;

    function animate(){
      if (destroyed) return;
      var t = clock.getElapsedTime();
      far.rotation.y = t * 0.012;
      far.rotation.x = Math.sin(t*0.08) * 0.02;
      near.rotation.y = t * 0.026;
      near.rotation.x = Math.sin(t*0.1 + 1) * 0.035;
      var breathe = 1 + Math.sin(t*0.25) * 0.015;
      near.scale.setScalar(breathe);
      camera.position.x += (mouseX*70 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY*45 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
    canvas.classList.add('is-ready');

    var resizeTimer;
    window.addEventListener('resize', function(){
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function(){
        if (window.innerWidth < 640) { destroyed = true; return; }
        var w = hero.clientWidth, h = hero.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w/h;
        camera.updateProjectionMatrix();
      }, 200);
    });
  }

  if ('requestIdleCallback' in window) {
    requestIdleCallback(initParticles, {timeout: 1800});
  } else {
    setTimeout(initParticles, 700);
  }
})();
