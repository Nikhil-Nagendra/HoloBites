// src/components/BotpressChat.js
import React, { useEffect } from 'react';

const BotpressChat = () => {
  useEffect(() => {
    // Load the Botpress script
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v2/inject.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Initialize Botpress after script loads
    script.onload = () => {
      window.botpress.init({
        "botId": "YOUR_BOT_ID", // Replace with your actual bot ID
        "configuration": {
          "botName": "RamsAI",
          "botAvatar": "/ramsAI.png", // You can use your logo
          "tagline": "where tech meets foods", // Added tagline
          "website": {},
          "email": {},
          "phone": {},
          "termsOfService": {},
          "privacyPolicy": {},
          "color": "#3B82F6", // You can customize this color to match your theme
          "variant": "solid", 
          "themeMode": "light",
          "fontFamily": "inter",
          "radius": 1
        },
        "clientId": "7cad5e2e-71e6-4149-803e-f692f6a5b581" // Replace with your actual client ID
      });
    };
    
    // Clean up on component unmount
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default BotpressChat;