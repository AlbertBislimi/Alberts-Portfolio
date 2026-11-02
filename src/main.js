import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './v3c.css';
window.gsap = gsap; window.ScrollTrigger = ScrollTrigger; window.Lenis = Lenis;

/* contact form: POST to /api/contact (serverless) with mailto fallback on error */
const form = document.getElementById('contact-form');
if (form) {
  const btn = form.querySelector('button[type=submit]');
  const status = form.querySelector('.form-status');
  const label = btn.textContent;
  const setState = (st, msg) => { form.dataset.state = st; status.textContent = msg || ''; status.className = 'form-status is-' + st; };
  const mailto = (d) => `mailto:ialbertbislimi@gmail.com?subject=${encodeURIComponent('New project — ' + d.get('type'))}&body=${encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nProject type: ${d.get('type')}\n\n${d.get('message')}`)}`;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.dataset.state === 'loading') return;
    const d = new FormData(form);
    const email = String(d.get('email') || '').trim(), msg = String(d.get('message') || '').trim();
    if (!String(d.get('name') || '').trim()) return setState('error', 'Please add your name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setState('error', 'That email doesn’t look right.');
    if (msg.length < 10) return setState('error', 'A few more words about the project, please.');
    setState('loading', 'Sending…'); btn.disabled = true; btn.textContent = 'Sending…';
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(d)) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) throw new Error('send');
      form.reset(); setState('success', 'Sent. I’ll reply within one working day.'); btn.textContent = 'Sent ✓';
    } catch {
      status.innerHTML = '';
      setState('error', 'Couldn’t send just now. ');
      const a = document.createElement('a'); a.href = mailto(d); a.textContent = 'Email me directly instead →'; status.appendChild(a);
      btn.disabled = false; btn.textContent = label;
    }
  });
}

(function(){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Lenis smooth scroll ---------- */
  var lenis = null;
  if (!reduceMotion && window.Lenis) {
    lenis = new Lenis({ lerp: 0.13, wheelMultiplier: 1.1, smoothWheel: true, syncTouch: false });
    function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger && ScrollTrigger.update);
  }

  /* ---------- smooth in-page anchors ---------- */
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    var target = id === '#' || id === '#top' ? document.body : document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    var navEl = document.getElementById('nav');
    var offset = -((navEl && navEl.offsetHeight) || 0) - 8;
    if (target === document.body) offset = 0;
    if (lenis) lenis.scrollTo(target === document.body ? 0 : target, { offset: offset, duration: 1.1 });
    else window.scrollTo({ top: target === document.body ? 0 : target.getBoundingClientRect().top + window.scrollY + offset, behavior: reduceMotion ? 'auto' : 'smooth' });
    if (history.pushState) history.pushState(null, '', id);
  });

  /* ---------- nav bg on scroll ---------- */
  var nav = document.getElementById('nav');
  function onScroll(){
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* Singularity: each wrapper owns one transform (entrance, idle, cursor, scroll).
     CSS is the final frame, including before JS and under reduced motion. */
  gsap.registerPlugin(ScrollTrigger);
  const hero = document.getElementById('hero');
  const heroMedia = gsap.matchMedia();
  heroMedia.add({
    reduced: '(prefers-reduced-motion: reduce)',
    compact: '(max-width: 768px), (any-pointer: coarse)',
    desktop: '(min-width: 769px) and (hover: hover) and (pointer: fine)'
  }, (context) => {
    if (context.conditions.reduced) return;
    const compact = context.conditions.compact;
    const windows = [...hero.querySelectorAll('.singularity-window')]
      .filter(el => getComputedStyle(el).display !== 'none');
    const core = hero.querySelector('.singularity-core');
    const ring = hero.querySelector('.singularity-convergence');
    const tilt = hero.querySelector('.singularity-tilt');
    const idle = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
    windows.forEach((el, i) => {
      idle.to(el.firstElementChild, {
        y: 7 + (i % 3) * 4, rotation: compact ? 0 : (i % 2 ? 2 : -2),
        duration: 2.4 + i * .3, ease: 'sine.inOut'
      }, 0);
    });
    idle.to(core, { scale: 1.08, opacity: .8, duration: 2.4, ease: 'sine.inOut' }, 0);
    if (!compact) idle.to('.singularity-field', { y: 10, opacity: .65, duration: 4, ease: 'sine.inOut' }, 0);

    let visible = true;
    let entered = false;
    const syncIdle = () => {
      if (entered && visible && !document.hidden) idle.play();
      else idle.pause();
    };
    const intro = gsap.timeline({ onComplete: () => { entered = true; syncIdle(); } });
    windows.forEach((el, i) => {
      const style = getComputedStyle(el);
      const x = parseFloat(style.getPropertyValue('--x'));
      const y = parseFloat(style.getPropertyValue('--y'));
      const rotation = parseFloat(style.getPropertyValue('--r'));
      const scale = parseFloat(style.getPropertyValue('--s'));
      const angle = Math.atan2(y, x);
      const distance = compact ? 280 : Math.max(innerWidth, innerHeight) * .7;
      intro.fromTo(el, {
        xPercent: -50, yPercent: -50, x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance, rotation: compact ? rotation : (i % 2 ? 110 : -110),
        scale: .35, opacity: 0
      }, { x, y, rotation, scale, opacity: 1, duration: compact ? 1 : 1.5,
        ease: 'back.out(1.12)' }, .15 + i * .09);
    });
    intro.fromTo(core, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: .9, ease: 'power2.out' }, .25);
    intro.from('.hero .hline', { y: 35, opacity: 0, duration: .7, stagger: .15, ease: 'power3.out' }, .35);
    intro.from('.hero .eyebrow, .hero-copy-bottom', { y: 16, opacity: 0, duration: .6, stagger: .12 }, .6);

    gsap.to(ring, {
      scale: compact ? 1.12 : 1.55, y: -30, opacity: .2, ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
    });
    // Animate parents separate from the intro's targets to avoid competing tweens.
    gsap.to('.singularity-stage', {
      y: -30, ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
    });

    let move, reset;
    if (!compact && context.conditions.desktop) {
      const setters = Object.fromEntries(['x', 'y', 'rotationX', 'rotationY'].map(key =>
        [key, gsap.quickTo(tilt, key, { duration: .6, ease: 'power2.out' })]));
      move = (event) => {
        const rect = hero.getBoundingClientRect();
        const x = gsap.utils.clamp(-1, 1, (event.clientX - rect.left) / rect.width * 2 - 1);
        const y = gsap.utils.clamp(-1, 1, (event.clientY - rect.top) / rect.height * 2 - 1);
        setters.x(x * 8); setters.y(y * 8);
        setters.rotationY(x * 8); setters.rotationX(-y * 8);
      };
      reset = () => Object.values(setters).forEach(set => set(0));
      hero.addEventListener('pointermove', move, { passive: true });
      hero.addEventListener('pointerleave', reset);
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncIdle();
    });
    observer.observe(hero);
    document.addEventListener('visibilitychange', syncIdle);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncIdle);
      if (move) hero.removeEventListener('pointermove', move);
      if (reset) hero.removeEventListener('pointerleave', reset);
    };
  });

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

  /* ---------- lazy video hydration (work-grid loops) ----------
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
          var v = entry.target;
          if (entry.isIntersecting) { if (!v.dataset.hydrated) hydrateVideo(v); else if (v.paused) { var pp = v.play(); if (pp && pp.catch) pp.catch(function(){}); } }
          else if (v.dataset.hydrated && !v.paused) v.pause();
        });
      }, { rootMargin: '200px 0px' });
      vids.forEach(function(v){ io.observe(v); });
    } else {
      vids.forEach(hydrateVideo);
    }
  }

  if (!reduceMotion) {
    function startLazyVideos(){
      lazyLoadVideosIn(document); // work-grid tiles hydrate as they scroll in
    }
    if ('requestIdleCallback' in window) requestIdleCallback(startLazyVideos, {timeout: 1500});
    else window.addEventListener('load', function(){ setTimeout(startLazyVideos, 300); });
  }

})();
