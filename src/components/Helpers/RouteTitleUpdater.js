import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      '/': 'Bhau777 | Online Betting Game',
      '/charts': 'Bhau777 | Charts',
      '/terms-conditions': 'Bhau777 | Terms and Conditions',
      '/how-to-play': 'Bhau777 | How to Play',
      '/about-us': 'Bhau777 | About Us',
      '/starline': 'Bhau777 | Starline Games',
      '/andarbahar': 'Bhau777 | Andar Bahar Chart',
      '/pana-chart': 'Bhau777 | Pana Chart',
      '/jodi-chart': 'Bhau777 | Jodi Chart',
    };

    
    const dynamicTitle = () => {
      if (location.pathname.includes('/starline/')) return `Bhau777 | Starline - ${location.pathname.split('/').pop()}`;
      if (location.pathname.includes('/andarbahar/')) return `Bhau777 | Andar Bahar - ${location.pathname.split('/').pop()}`;
      if (location.pathname.includes('/pana-chart/')) return `Bhau777 | Pana Chart - ${location.pathname.split('/').pop()}`;
      if (location.pathname.includes('/jodi-chart/')) return `Bhau777 | Jodi Chart - ${location.pathname.split('/').pop()}`;
      return 'Bhau777 | Online Betting Game'; 
    };

    const title = routeTitles[location.pathname] || dynamicTitle();
    document.title = title;
  }, [location]);

  return null;
};

export default RouteTitleUpdater;
