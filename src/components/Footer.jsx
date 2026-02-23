import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-display font-bold gradient-text">Albert Bislimi</span>
          <span className="text-gray-600 text-sm ml-3">Full-Stack Developer · Kosovo 🇽🇰</span>
        </div>

        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Albert Bislimi. Built with React + Framer Motion.
        </p>

        <div className="flex gap-4 text-sm text-gray-500">
          <a href="https://github.com/AlbertBislimi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
