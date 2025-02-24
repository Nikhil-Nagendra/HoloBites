import React from 'react';

function Cart({ cart, updateQuantity, removeFromCart, cartTotal, goBack, checkout }) {
  return (
    <div className="cart-page">
      <div className="header">
        <div className="back-button" onClick={goBack}>
          <span>&larr;</span>
        </div>
        <h1 className="logo" style={{fontSize: '30px', fontFamily: 'Armagedo Wide',textAlign: 'center'}}>HoloBites
         
        </h1>
      </div>
      
      <h2>Your Cart</h2>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button onClick={goBack}>Start ordering</button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                
                <div className="cart-item-details">
                  <div className="cart-item-header">
                    <h3>{item.name}</h3>
                    <div className="meal-type-badge small">{item.mealType}</div>
                  </div>
                  <p>₹{item.price}</p>
                  
                  <div className="cart-quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                
                <div className="cart-item-price">
                  <p>₹{(item.price * item.quantity)}</p>
                  <button 
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="cart-total">
              <p>Total:</p>
              <p>₹{cartTotal}</p>
            </div>
            
            <button className="checkout-button" onClick={checkout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;