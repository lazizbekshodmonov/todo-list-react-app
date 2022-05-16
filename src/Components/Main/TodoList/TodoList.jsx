import React from 'react';
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'
function TodoList() {
      // let todoItem = data.map((item) => {
            
      //       const {...itemProps} = item;

      //       return(
      //             <TodoItem key={item.id} {...itemProps}/> 
      //       )
      // })
      return (
            <div className='TodoList'>
                  <TodoItem />
            </div>
      );
      
}

export default TodoList;