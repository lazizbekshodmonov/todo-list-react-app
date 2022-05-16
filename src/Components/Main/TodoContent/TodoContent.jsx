import React from 'react';
import TodoList from '../TodoList/TodoList'
import TodoFooter from '../TodoFooter/TodoFooter'
import './TodoContent.css'
function TodoContent({data, setTodolist}) {
      return (
            <div className='TodoContent'>
                <TodoList data={data} setTodolist={setTodolist}/> 
                <TodoFooter />
            </div>
      );
}

export default TodoContent;