import React from 'react';
import TodoList from '../TodoList/TodoList'
import TodoFooter from '../TodoFooter/TodoFooter'
import './TodoContent.css'
function TodoContent() {
      return (
            <div className='TodoContent'>
                <TodoList /> 
                <TodoFooter />
            </div>
      );
}

export default TodoContent;