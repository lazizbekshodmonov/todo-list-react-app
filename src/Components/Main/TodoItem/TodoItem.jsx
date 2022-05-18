import React from 'react';
import './TodoItem.css'
function TodoItem({id, todotext, check, setTodolist, deleteData}) {
     //{id, todotext, check, setTodolist}
      // console.log(props);
      
      let checked, checkedText;
      if(check){
            checked = ' checked_item'
            checkedText = ' checked__text'
      }else{
            checked = ' checked_item-hover'
            checkedText = ' '
      }
      
      return (
            <div className='TodoItem'>
                  <div className="checked">
                        <input type="checkbox" 
                              
                               id={id}/>
                        <label htmlFor={id}
                              onClick={() => {
                                    setTodolist()
                              }}
                              
                               className= {'checkbox' + checked}>
                               
                        </label>
                  </div>
                  <p className={"todo__text" + checkedText}>{todotext}</p>
                  <div className="delete"
                        onClick={deleteData}
                  ></div>
            </div>
      );
}

export default TodoItem;