import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BackBtn = ( props ) => {
          const {url} = props;
         return (
           <div>
               <Link to={url} >Back Button</Link>
           </div>
        )
}

BackBtn.propTypes = {     
  url: PropTypes.string     
}

BackBtn.defaultProps = {
  url: '', 
};
export default BackBtn;

// Onclick unmount current mounted components 
// route to MainPage