import React from 'react';
import TodoList from '../TodoList/TodoList'
import TodoFooter from '../TodoFooter/TodoFooter'
import './TodoContent.css'
function TodoContent({data, setTodolist, setfirebase, deleteData, todoSort}) {
      
          
      return (
            <div className='TodoContent'>
                  <TodoList data={data} 
                              setTodolist={setTodolist} 
                              setfirebase={setfirebase} 
                              deleteData={deleteData}
                              />
                  <TodoFooter todoSort={todoSort}/>
            </div>
      );
}

export default TodoContent;