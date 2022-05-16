import React from 'react';
import './TodoItem.css'
function TodoItem({data, setTodolist}) {
      console.log(data);
      let checked;
      if(data.check){
            checked = ' checked_item'
      }else{
            checked = ' checked_item-hover'
      }
      // const setData = () =>{
      //       setTodolist(id);
      // }
      return (
            <div className='TodoItem'>
                  <div className="checked">
                        <input type="checkbox" 
                        // onChange={setData}
                               id={data.id}/>
                        <label htmlFor={data.id}
                               className= {'checkbox' + checked}>
                              
                        </label>
                  </div>
                  <p className="todo__text">{data.todotext}</p>
                  <div className="delete"></div>
            </div>
      );
}

export default TodoItem;