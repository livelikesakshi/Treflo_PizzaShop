import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import EmptyCart from '../../components/Cart/EmptyCart';
import Footer from '../../components/Common/Footer';
import Logo from '../../components/Common/Logo';
import Menu from '../../components/Common/Menu';
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/cart/cart.selector';
import './style.css'

const Cart = ({ cartCount, cartList, cartTotal }) => {
  // console.log(cartCount, cartList, cartTotal);
  return (
    <div>
      <div className="cart-header">
        <Logo />
      </div>

      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className='orders-heading'>Your Orders</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
          </div>
          <h3 className='orders-total'>Your Total {cartTotal}</h3>
        </div>
      )}



      <Footer />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
