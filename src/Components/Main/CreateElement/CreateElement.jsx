import React from 'react';
import './CreateElement.css'
function CreateElement() {
      return (
            
            <div className='CreateElement'>
                  <button 
                         className='create__element__btn'>
                  </button>
                  
                  <input type="text" 
                         className='input' 
                         placeholder='Create a new todo…'/>
            </div>
            
      );}

export default CreateElement;