import React from 'react';
import TodoHeader from './TodoHeader/TodoHeader'
import CreateElement from './CreateElement/CreateElement'
import TodoContent from './TodoContent/TodoContent'
import './Main.css'

function Main({data, setTodolist, setfirebase, addNewTodo, deleteData}) {

      return (
            <div className='Main'>
                  <TodoHeader />
                  <CreateElement addNewTodo={addNewTodo}/>
                  <TodoContent data={data} setTodolist={setTodolist} setfirebase = {setfirebase} deleteData={deleteData}/>
                  <p className='footer__text'>Drag and drop to reorder list</p>
            </div>
      );
}

export default Main;