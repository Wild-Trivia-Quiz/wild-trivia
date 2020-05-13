import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

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

HomepageContextProvider.propTypes = {
  children: PropTypes.func,
};

HomepageContextProvider.defaultProps = {
  children: '',
};

export default HomepageContextProvider;
