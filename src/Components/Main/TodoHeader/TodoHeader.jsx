import React from 'react';
import './TodoHeader.css'
function TodoHeader() {
      return (
            <div className='TodoHeader'>
                  <h2 className='Logo'>
                        TODO
                  </h2>
                  <div className="mode dark"></div>
            </div>
      );
}

export default TodoHeader;