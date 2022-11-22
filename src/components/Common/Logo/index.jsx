import React from 'react'
import './style.css'
import logoImg from './logo.png'

const Logo = () => {
  return (
    <div className='logo'>
      <div>
      <img src={logoImg}  alt= "Logo Image" />
      </div>
    </div>
  )
}

export default Logo;
