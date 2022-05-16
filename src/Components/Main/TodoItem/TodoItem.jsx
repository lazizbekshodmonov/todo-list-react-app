import React from 'react';
import './TodoItem.css'
function TodoItem() {
      return (
            <div className='TodoItem'>
                  <div className="checked">
                        <input type="checkbox" 
                               id={12123}/>
                        <label htmlFor={12123}
                               className= 'checkbox'>
                        </label>
                  </div>
                  <p className="todo__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  <div className="delete"></div>
            </div>
      );
}

export default TodoItem;