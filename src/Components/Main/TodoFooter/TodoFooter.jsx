import React from 'react';
import './TodoFooter.css'
function TodoFooter() {
      return (
            <div className='TodoFooter'>
                  <div className="todo__number">5 items left</div>
                  <ul className='todo__sort'>
                        <li className="all active-todo">All</li>
                        <li className="active">Active</li>
                        <li className="completed">Completed</li>
                  </ul>
                  <div className="clear__completed">Clear Completed</div>
            </div>
      );
}

export default TodoFooter;