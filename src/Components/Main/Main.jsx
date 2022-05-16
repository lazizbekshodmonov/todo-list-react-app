import React from 'react';
import TodoHeader from './TodoHeader/TodoHeader'
import CreateElement from './CreateElement/CreateElement'
import TodoContent from './TodoContent/TodoContent'
import './Main.css'

function Main({data, setTodolist}) {
      
      return (
            <div className='Main'>
                  <TodoHeader />
                  <CreateElement />
                  <TodoContent data={data} setTodolist={setTodolist}/>
                  <p className='footer__text'>Drag and drop to reorder list</p>
            </div>
      );
}

export default Main;