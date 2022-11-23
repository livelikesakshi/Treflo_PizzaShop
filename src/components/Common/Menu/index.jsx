import React, { useState, useEffect } from 'react'
// import {connect} from 'react-redux'
// import { createStructuredSelector } from 'reselect';
// import { cartAddItem, cartRemoveItem } from '../../../redux/cart/cart.action';
// import { selectCartItems, selectCartItemsCount } from '../../../redux/cart/cart.selector';
import ButtonAddRemoveItem from '../ButtonAddRemoveItem';
import './style.css'



const Menu = () => {

  

  const [menuData, setMenuData] = useState([]);

  const getMenuData = async () => {
    const response = await fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68');

    // const data = await response.json();
    // console.log(data);

    setMenuData(await response.json());
  }
  useEffect(() => {
    getMenuData();
  }, []);

  // const handleItemQuantity = () => {
  //   let quantity = 0;
  //   if (cartCount !== 0){
  //     const foundUtemInCart = cartList.find(item=>item.id===id);
  
  //     if (foundUtemInCart) {
  //       quantity = foundUtemInCart.quantity;
  //     }
  //   }
  
  //   return quantity;
  // }

  
  return (
    <div className='item-main'>
      {menuData.map(item => (

        <div key={item.id} className="menu-items">
          <img src={item.img_url} alt=" img " />
          <div className="item-head-detail">
            <p className="head-desc-name">{item.name}</p>
            <p className="head-desc">
              <small>{item.description}</small>
            </p>
          </div>

          <div className="item-foot-detail">
            <span className='foot-detail-price'>₹{item.price}</span>
            {/* <ButtonAddRemoveItem  
              quantity={handleItemQuantity()}
              handleCartAddItem={() => cartAddItem(item)}
              handleRemoveItem={() => cartRemoveItem(item)}
              /> */}
              <ButtonAddRemoveItem quantity={10} />
            {/* <button>Add +</button> */}
          </div>

        </div>
      ))}

    </div>

  )
}


// const mapStateToProps = createStructuredSelector({
//   cartCount: selectCartItemsCount,
//   cartList: selectCartItems,
// });

// const mapDispatchToProps = (dispatch) => ({
//   cartAddItem: (item) => dispatch(cartAddItem(item)),
//   cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
// });

// export default connect(mapStateToProps,mapDispatchToProps) (Menu);

export default Menu;