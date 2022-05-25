import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const data = [
  {
    id: 1,
    image: IMG1, 
    title: 'Mokabar Caffe Kosova',
    github: 'https://github.com', 
    demo: 'https://mokabar-kosova.com'
  },
  {
    id: 2,
    image: IMG2, 
    title: 'AME Company',
    github: 'https://github.com', 
    demo: 'https://ame-company.com'
  },
  {
    id: 3,
    image: IMG3, 
    title: 'Lorem Ipsum',
    github: 'https://github.com', 
    demo: 'https://github.com/AlbertBislimi'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article  className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio