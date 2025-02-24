import React from 'react';

function Checkout({ orderTotal, goToMenu }) {
  return (
    <div className="checkout-page">
      <div className="header">
      <div className="logo-container">
          <img src="/final-logo.png" alt="HoloBites Logo" className="logo-image" style={{ width: '70px', height: '70px' }} /> 
          
        </div>
      <h1 className="logo" style={{fontSize: '30px', fontFamily: 'Armagedo Wide',textAlign: 'center'}}>HoloBites
          <div style={{fontSize: '12px', marginTop: '5px', fontFamily: 'Armagedo Wide'}}>"where tech meets food"</div>
        </h1>
      </div>
      
      <div className="thank-you-message">
        <div className="checkmark-icon">✓</div>
        <h2>Thank You for Your Order!</h2>
        <p>Your delicious food is being prepared.</p>
        <p>Order Total: ₹{orderTotal}</p>
        <button onClick={goToMenu}>Return to Menu</button>
      </div>
    </div>
  );
}

export default Checkout;