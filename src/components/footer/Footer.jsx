import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="section-container">
        <div className="text-center">
          <p className="text-text-gray text-sm">
            ©{currentYear} Albert Bislimi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
