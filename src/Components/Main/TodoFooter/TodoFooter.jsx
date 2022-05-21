import React from 'react';
import './TodoFooter.css'
function TodoFooter({todoSort}) {
      
      function sortData(e){
            todoSort(e.target.textContent)
      }
      return (
            <div className='TodoFooter'>
                  <div className="todo__number">5 items left</div>
                  <ul className='todo__sort'>
                        <li  onClick={sortData} className="all active-todo">All</li>
                        <li  onClick={sortData} className="active">Active</li>
                        <li  onClick={sortData} className="completed">Completed</li>
                  </ul>
                  <div className="clear__completed">Clear Completed</div>
            </div>
      );
}

export default TodoFooter;