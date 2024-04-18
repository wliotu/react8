import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='container'>
          <Link to="/" className='header_link-item'> &#8501;</Link>
          <div className='header_link'>
          <Link to="about" className='header_link'>About</Link>
          <Link to="mans" className='header_link'>Mans</Link>
          <Link to="womans" className='header_link'>Womans</Link>
          <Link to="contact" className='header_link'>Contact</Link>
          </div>
      </div>
    </div>
  )
}

export default Header;
