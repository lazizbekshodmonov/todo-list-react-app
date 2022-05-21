import React, {useEffect, useState} from 'react';
import TodoHeader from './TodoHeader/TodoHeader'
import CreateElement from './CreateElement/CreateElement'
import TodoContent from './TodoContent/TodoContent'
import './Main.css'

function Main({data, setTodolist, setfirebase, addNewTodo, deleteData}) {
      //todo sort function--------------------------------------------------------------------------
  const [sortData, setSort] = useState(data);
      
            useEffect(() =>{
              todoSort("All")
            }, [data])
      
      const todoSort = (btn) =>{
            
              if(btn === 'All'){
                setSort(data)
              }if(btn === 'Active'){
               setSort(data.filter(({check}) => check === false)) 
              }if(btn === 'Completed'){
                setSort(data.filter(({check}) => check === true))
              }
              
          }

      return (
            <div className='Main'>
                  <TodoHeader />
                  <CreateElement addNewTodo={addNewTodo}/>
                  <TodoContent data={sortData} 
                              setTodolist={setTodolist}     
                              setfirebase = {setfirebase} 
                              deleteData={deleteData}
                              todoSort={todoSort}
                              />
                  <p className='footer__text'>Drag and drop to reorder list</p>
            </div>
      );
}

export default Main;