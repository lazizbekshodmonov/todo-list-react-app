import React from 'react';
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'
function TodoList(props) {
      
      const {data, setTodolist, setfirebase, deleteData} = props.props;

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