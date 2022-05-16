import React from 'react';
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'
function TodoList({data, setTodolist}) {
      let todoItem = data.map((item) => {
            
            const {...itemProps} = item;
            return(
                  <TodoItem key={item.id} data={itemProps} setTodolist={setTodolist}/> 
            )
      })
      return (
            <div className='TodoList'>
                  {todoItem}
            </div>
      );
      
}

export default TodoList;