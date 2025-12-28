import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const {  getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        const quantity = cartItems[e.id];

        if (quantity > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img
                  src={e.image}
                  alt=""
                  className="carticon-product-icon"
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {quantity}
                </button>
                <p>${e.new_price * quantity}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
         <div className="cartiems-total">
            <h1>cart Torals</h1>
            <div>
            <div className="cartotems-total-item">
                <p>Subtatal</p>
                <p>${ getTotalCartAmount()}</p>
            </div>
            <hr />
             <div className="cartotems-total-item">
                <p>Shipping Fee</p>
                 <p>Free</p>
             </div>
             <hr />
              <div className="cartotems-total-item">
                   <h3>Total</h3>
                   <h3>${ getTotalCartAmount()}</h3>
              </div>
            </div>
             <button>PROCEED TO CHECKOUT</button>
         </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code.Enter it here</p>
                <div className="cartitems-promobox">
                     <input type="text" placeholder='promo code' />
                     <button>Submit</button>
                </div>
            </div>
      </div>
    </div>
  );
};

export default CartItems;
  