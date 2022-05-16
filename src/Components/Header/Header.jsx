import React from 'react';
import Bitmap from './Bitmap.png'
import './Header.css'

function Header() {
      return (
            <div className='Header'>
                <img 
                  src={Bitmap} 
                  alt="" 
                />
            </div>
      );
}

export default Header;