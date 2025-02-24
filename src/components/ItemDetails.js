import React, { useState } from 'react';

function ItemDetails({ item, addToCart, goBack, cartItemCount, navigateToCart }) {
  const [quantity, setQuantity] = useState(1);
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(item, quantity);
  };
  
  return (
    <div className="item-details">
      <div className="header">
        <div className="back-button" onClick={goBack}>
          <span>&larr;</span>
        </div>
        <h1 className="logo" style={{fontSize: '30px', fontFamily: 'Armagedo Wide'}}>HoloBites
          <div style={{fontSize: '12px', marginTop: '5px', fontFamily: 'Armagedo Wide'}}>"where tech meets food"</div>
        </h1>
        <div className="cart-icon" onClick={navigateToCart}>
          <span className="cart-badge">{cartItemCount}</span>
        </div>
      </div>
      
      <div className="item-content">
        <img src={item.image} alt={item.name} className="item-image" />
        
        <div className="item-info">
          <div className="item-header">
            <h2>{item.name}</h2>
            <div className="meal-type-badge">{item.mealType}</div>
          </div>
          
          <p className="item-price">₹{item.price}</p>
          <p className="item-description">{item.description}</p>
          
          <div className="item-details-grid">
            <div className="item-detail">
              <span className="detail-label">Calories:</span>
              <span className="detail-value">{item.calories}</span>
            </div>
            <div className="item-detail">
              <span className="detail-label">Allergens:</span>
              <span className="detail-value">{item.allergens}</span>
            </div>
            <div className="item-detail">
              <span className="detail-label">Spice Level:</span>
              <span className="detail-value">{item.spiceLevel}</span>
            </div>
            <div className="item-detail">
              <span className="detail-label">Servings:</span>
              <span className="detail-value">{item.servings}</span>
            </div>
          </div>
          
          <div className="quantity-control">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart - ₹{(item.price * quantity)}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;