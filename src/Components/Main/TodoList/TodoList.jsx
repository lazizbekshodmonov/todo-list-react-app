import React from 'react';
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'
function TodoList({data, setTodolist, setfirebase, deleteData}) {
      
      
      
      let todoItem = data.map((item) => {
            
            const {id, ...itemProps} = item;
            return(
                  <TodoItem key={id}
                              {...itemProps} 
                              setTodolist={() => {
                                    setTodolist(id) 
                                    setfirebase(id)
                                    }
                              }
                              deleteData={() =>{
                                    deleteData(id)
                              }}
                              
                  /> 
            )
      })
      return (
            <div className='TodoList'>
                  {todoItem}
            </div>
      );
      
}

export default TodoList;