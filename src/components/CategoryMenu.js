import React from 'react';

function CategoryMenu({ 
  categories,
  menuItems,
  selectedCategory, 
  setSelectedCategory, 
  onSelectItem,
  cartItemCount,
  navigateToCart
}) {
  return (
    <div className="category-menu">
      <div className="header">
        <div className="logo-container">
          <img src="/final-logo.png" alt="HoloBites Logo" className="logo-image" style={{ width: '70px', height: '70px' }} /> 
          
        </div>
        <h1 className="logo" style={{fontSize: '30px', fontFamily: 'Armagedo Wide'}}>HoloBites
          <div style={{fontSize: '12px', marginTop: '5px', fontFamily: 'Armagedo Wide'}}>"where tech meets food"</div>
        </h1>
        <div className="cart-icon" onClick={navigateToCart}>
          <span className="cart-badge">{cartItemCount}</span>
        </div>
      </div>
      
      <div className="categories-section">
        <h2>Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className={`category-card ${selectedCategory === category.name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      {selectedCategory && (
        <div className="menu-items-section">
          <h2>{selectedCategory}</h2>
          <div className="menu-items-grid">
            {menuItems[selectedCategory].map((item) => (
              <div 
                key={item.id} 
                className="menu-item-card"
                onClick={() => onSelectItem(item)}
              >
                <img src={item.image} alt={item.name} />
                <div className="menu-item-info">
                  <h3>{item.name}</h3>
                  <div className="meal-type-badge">{item.mealType}</div>
                  <p className="price">₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryMenu;