import React from 'react';
import TodoList from '../TodoList/TodoList'
import TodoFooter from '../TodoFooter/TodoFooter'
import './TodoContent.css'
function TodoContent(props) {
      return (
            <div className='TodoContent'>
                <TodoList props={props}/> 
                <TodoFooter />
            </div>
      );
}

export default TodoContent;