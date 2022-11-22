import React from 'react'
import  {useNavigate} from 'react-router-dom'
import './style.css'

const CartCountButton = ({cartCount}) => {
  const history = useNavigate();
  return (
    <div className='btnCartCount' onClick={() => history('/cart')}>
      <div className="count">{cartCount>=100? '99+' : cartCount}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  )
}

export default CartCountButton;