import { Github, Linkedin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm flex items-center gap-1.5">
          © {new Date().getFullYear()} Albert Bislimi. Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in Kosovo.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/AlbertBislimi" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/albertbislimi/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  )
}
