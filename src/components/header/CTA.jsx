import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="flex gap-4 justify-center items-center mb-8">
      <a href={CV} download className='btn-outline'>
        Download CV
      </a>
      <a href="#contact" className='btn-primary'>
        Let's Talk
      </a>
    </div>
  )
}

export default CTA
