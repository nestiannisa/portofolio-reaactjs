import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {

  const data = [
    {
      id:1,
      link: '#',
      name: 'Home'
    },
    {
      id:2,
      link: '#about',
      name: 'About'
    },
    {
      id:3,
      link: '#experience',
      name: 'Experience'
    },
    {
      id:4,
      link: '#services',
      name: 'Services'
    },
    {
      id:5,
      link: '#portfolio',
      name: 'Portfolio'
    },
    {
      id:6,
      link: '#tesrimonials',
      name: 'Testimonials'
    },
    {
      id:7,
      link: '#contact',
      name: 'Contact'
    },
  ]
  return (
    <footer>
     {/**
     <a href="#" className='footer__logo'>Nesti Annisa Suprianti</a>
      * 
      */}

      <ul className='permalinks'>
        {
          data.map(({id,link,name}) =>{
            return(
              <li key={id}><a href={link}> {name}</a></li>

            )
          })
        }
      </ul>

      <div className="footer__socials">
       
        <a href="https://www.instagram.com/nestiannisa/"><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nesti Annisa Suprianti. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer