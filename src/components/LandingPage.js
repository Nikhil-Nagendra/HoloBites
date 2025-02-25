import React from 'react';

function LandingPage({ onEnterMenu }) {
  // const handleARToggle = () => {
  //   // Navigate to another site when AR toggle is clicked
  //   window.location.href = "/ar-experience";
  // };

  return (
    <div className="landing-page">
      <div className="header">
        <div className="logo-container">
          <img src="/final-logo.png" alt="HoloBites Logo" className="logo-image" style={{ width: '60px', height: '60px' }} /> 
          
        </div>
        <h1 className="logo" style={{fontSize: '30px', fontFamily: 'Armagedo Wide', textAlign: 'center', flex: 1}}>HoloBites
          <div style={{fontSize: '12px', marginTop: '5px', fontFamily: 'Armagedo Wide'}}>"where tech meets food"</div>
        </h1>
        <button 
            className="ar-toggle-button"
            onClick={() => window.location.href = "https://player.onirix.com/exp/ldEDNz"}
            style={{backgroundColor: 'white', color: 'black', borderRadius: '5px', padding: '5px', marginRight: '12px'}}
          >
            AR Mode
          </button>
        <div className="header-controls" style={{display: 'flex', alignItems: 'center'}}>
          <div className="cart-icon" style={{marginRight: '10px'}}>
            <span className="cart-badge">0</span>
          </div>
          
        </div>
      </div>
      
      <div className="landing-content">
        <div className="landing-text" style={{textAlign: 'center'}}>
          <h2>Are you hungry?</h2>
          <h1>Don't Wait!</h1>
          <button className="order-button" onClick={onEnterMenu}>Order Now</button>
          {/* <button className="view-more-button">View More</button> */}
        </div>
      </div>
      
      <div className="landing-image">
        <img src="/eating_together.svg" alt="People enjoying food" />
      </div>
    </div>
  );
}

export default LandingPage;