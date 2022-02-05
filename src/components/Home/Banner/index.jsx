import React from 'react';
import './styles.css';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';


const Banner = ({ handleScrollMenu }) => {
 
  const history = useHistory();

  return (
    <header>
      <div className='header-content'>
       <div className='content-main'>
        
          <h1>Food waste app</h1>
          <p>Your waste is someone else's treasure</p>
        
          <button onClick={handleScrollMenu}>
            Shop the fridge <i className='fas fa-long-arrow-alt-right'></i>
          </button>
          
          <button onClick={() => history.push('/signin')}>Sign in</button> 
        
          <button onClick={() => history.push('/signup')}>Register</button>

          <button onClick={() => history.push('/appadd')}>Add Product</button>
          
        </div>
      </div>
    </header>
  );

};
  
export default Banner;