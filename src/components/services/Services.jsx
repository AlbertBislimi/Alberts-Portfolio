import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elite.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elite.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elite.</p>
            </li>
           
          </ul>
        </article>
       {/* END OF UI/UX */}
        <article className='service'>
            <div className="service__head">
              <h3>Front-end Development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>HTML+CSS+Javascript</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>ReactJS</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>ES5/ES6</p>
              </li>
            </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className='service'>
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elite.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elite.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elite.</p>
              </li>
             
            </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services