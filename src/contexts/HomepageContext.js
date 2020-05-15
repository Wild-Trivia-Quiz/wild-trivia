import React, { createContext, useState } from 'react';

export const HomepageContext = createContext();

const HomepageContextProvider = ({ children }) => {
  const [isMainPageLoaded, setIsMainPageLoaded] = useState(false);

  const handleClick = () => {
    setIsMainPageLoaded(true);
  };

  return (
    <HomepageContext.Provider value={{ isMainPageLoaded, handleClick }}>
      {children}
    </HomepageContext.Provider>
  );
};


export default HomepageContextProvider;
