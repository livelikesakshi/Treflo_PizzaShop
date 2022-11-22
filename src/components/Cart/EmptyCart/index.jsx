import React from 'react'
import './style.css'
import emptyCartImg from './emptycart.png'
import {useNavigate} from 'react-router-dom'

const EmptyCart = () => {
    const history = useNavigate();
  return (
    <div className='emptyCart'>
        <img src={emptyCartImg} alt='empty' />
        <button onClick={() => history('/')}>
            <i className="fas fa-long-arrow-alt-left"></i> Shop Now
            </button>
     </div>
  )
}

export default EmptyCart;
