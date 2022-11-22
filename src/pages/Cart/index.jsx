import React from 'react'
import EmptyCart from '../../components/Cart/EmptyCart';
import Footer from '../../components/Common/Footer';
import Logo from '../../components/Common/Logo';
import Menu from '../../components/Common/Menu';
import './style.css'

const Cart = () => {
  return ( 
    <div>
      <EmptyCart />
      <div className="cart-header">
      <Logo />
      </div>
      <div className="orders">
        <h1 className='orders-heading'>Your Orders</h1>
        <div className="orders-menu">
          <Menu list={Menu} />
        </div>
        <h3 className='orders-total'>Your Total $23</h3>
      </div>
      <Footer />
    </div>
  )
}

export default Cart;
