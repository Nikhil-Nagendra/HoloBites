import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import CategoryMenu from './components/CategoryMenu';
import ItemDetails from './components/ItemDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import BotpressChat from './components/BotpressChat';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  
  // Categories and menu items from the PDF
  const categories = [
    { id: 1, name: 'Starters', image: '/starters.png', size: 'small' },
    { id: 2, name: 'Breakfast Delights', image: '/breakfast.png', size: 'small' },
    { id: 3, name: 'Main Course', image: '/main.png', size: 'large' },
    { id: 4, name: 'Dessert', image: '/dessert.png', size: 'small' },
    { id: 5, name: 'Beverages', image: '/beverages.png', size: 'medium' },
  ];
  
  const menuItems = {
    'Starters': [
      { 
        id: 1, 
        name: 'Fiesta crunch nachos', 
        price: 350,
        description: 'Tortilla chips, jalapeños, guacamole', 
        calories: '~500-700 kcal per serving',
        allergens: 'Dairy (cheese sauce)',
        spiceLevel: 'Medium',
        servings: 3,
        mealType: 'Veg',
        image: '/nachos.jpg' 
      },
      { 
        id: 2, 
        name: 'Sizzling Ember Skewers', 
        price: 450,
        description: 'Beef/Lamb/Chicken, bell peppers, onions', 
        calories: '~250-400 kcal per skewer',
        allergens: 'None',
        spiceLevel: 'High',
        servings: 2,
        mealType: 'Non-Veg',
        image: '/sizzling.jpg' 
      },
    ],
    'Breakfast Delights': [
      { 
        id: 3, 
        name: 'Mezze Platter', 
        price: 600,
        description: 'Olive oil, salami, feta cheese', 
        calories: '~500-800 kcal per serving',
        allergens: 'Dairy (feta, yogurt-based dips)',
        spiceLevel: 'Mild',
        servings: 1,
        mealType: 'Non-Veg',
        image: '/meezi.jpg' 
      },
      { 
        id: 4, 
        name: 'Tokyo Tide Platter', 
        price: 800,
        description: 'Sushi rice, avocado, sesame seeds', 
        calories: '~400-700 kcal per serving',
        allergens: 'Sesame',
        spiceLevel: 'Mild',
        servings: 1,
        mealType: 'Veg',
        image: '/sushi.jpg' 
      },
    ],
    'Main Course': [
      { 
        id: 5, 
        name: 'Bean Burrito', 
        price: 400,
        description: 'Flour tortilla, black beans, lettuce', 
        calories: '~500-800 kcal per serving',
        allergens: 'Gluten (flour tortilla)',
        spiceLevel: 'Medium',
        servings: 1,
        mealType: 'Veg',
        image: '/burrito.jpg' 
      },
      { 
        id: 6, 
        name: 'Crispy Italiano Parm', 
        price: 500,
        description: 'Breaded chicken breast, basil, pasta', 
        calories: '~600-800 kcal per serving',
        allergens: 'Gluten (breaded chicken, pasta)',
        spiceLevel: 'Mild',
        servings: 1,
        mealType: 'Non-Veg',
        image: '/parm.jpg' 
      },
    ],
    'Dessert': [
      { 
        id: 7, 
        name: 'Choco Bliss Bagel', 
        price: 150,
        description: 'Wheat flour, yeast, chocolate chips', 
        calories: 'Not disclosed',
        allergens: 'Gluten (flour), dairy',
        spiceLevel: 'Sweet',
        servings: 2,
        mealType: 'Veg',
        image: '/bagels.jpg'
      },
      { 
        id: 8, 
        name: 'Golden Nut Caramel Tart', 
        price: 250,
        description: 'Hazelnuts, caramel sauce, tart crust', 
        calories: 'Not disclosed',
        allergens: 'Nuts (hazelnuts), dairy, gluten',
        spiceLevel: 'Sweet',
        servings: 2,
        mealType: 'Veg',
        image: '/hazelnut.jpg' 
      },
      { 
        id: 9, 
        name: 'Leche Flan', 
        price: 300,
        description: 'Egg yolks, condensed milk, caramel syrup', 
        calories: 'Not disclosed',
        allergens: 'Dairy, eggs',
        spiceLevel: 'Sweet',
        servings: 2,
        mealType: 'Contains Egg',
        image: '/leech.jpg' 
      },
    ],
    'Beverages': [
      { 
        id: 10, 
        name: 'Blush Elixir', 
        price: 180,
        description: 'Strawberries, coconut milk, hibiscus tea', 
        calories: '~100-200 kcal per serving',
        allergens: 'Coconut',
        spiceLevel: 'Sweet',
        servings: 1,
        mealType: 'Veg',
        image: '/pink.jpg' 
      },
      { 
        id: 11, 
        name: 'Ocean Breeze', 
        price: 200,
        description: 'Blue syrup, lemonade, pineapple juice', 
        calories: '~120-250 kcal per serving',
        allergens: 'None',
        spiceLevel: 'Sweet and tangy',
        servings: 1,
        mealType: 'Veg',
        image: '/blue.jpg' 
      },
    ],
  };
  
  // Function to add items to cart
  const addToCart = (item, quantity = 1) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + quantity } 
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    
    setCurrentPage('categoryMenu');
  };
  
  // Function to remove items from cart
  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };
  
  // Function to update item quantity in cart
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Navigation functions
  const navigateToCategories = () => {
    setCurrentPage('categoryMenu');
    setSelectedCategory(null);
  };
  
  const navigateToItemDetails = (item) => {
    setSelectedItem(item);
    setCurrentPage('itemDetails');
  };
  
  const navigateToCart = () => {
    setCurrentPage('cart');
  };
  
  const navigateToCheckout = () => {
    setCurrentPage('checkout');
  };
  
  // Render the appropriate component based on current page
  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onEnterMenu={navigateToCategories} />;
      case 'categoryMenu':
        return (
          <CategoryMenu 
            categories={categories} 
            menuItems={menuItems}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onSelectItem={navigateToItemDetails}
            cartItemCount={cart.reduce((count, item) => count + item.quantity, 0)}
            navigateToCart={navigateToCart}
          />
        );
      case 'itemDetails':
        return (
          <ItemDetails 
            item={selectedItem} 
            addToCart={addToCart} 
            goBack={() => setCurrentPage('categoryMenu')}
            cartItemCount={cart.reduce((count, item) => count + item.quantity, 0)}
            navigateToCart={navigateToCart}
          />
        );
      case 'cart':
        return (
          <Cart 
            cart={cart} 
            updateQuantity={updateQuantity} 
            removeFromCart={removeFromCart}
            cartTotal={cartTotal}
            goBack={navigateToCategories}
            checkout={navigateToCheckout}
          />
        );
      case 'checkout':
        return (
          <Checkout 
            orderTotal={cartTotal} 
            goToMenu={() => {
              setCart([]);
              setCurrentPage('landing');
            }}
          />
        );
      default:
        return <LandingPage onEnterMenu={navigateToCategories} />;
    }
  };
  
  return (
    <div className="app">
      {renderPage()}
      <BotpressChat />
    </div>
  );
}


export default App;