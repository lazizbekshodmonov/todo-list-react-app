import React, {useState} from 'react';
import './CreateElement.css'
function CreateElement({addNewTodo}) {
       const [todoText, setTodotext] = useState('');
      function addTodo(){
            if(todoText !== ''){
                  addNewTodo(todoText)
                  setTodotext('')
            }
            
      }
      
      return (
            
            
            <form className='CreateElement' onSubmitCapture={(e) => {e.preventDefault();}}>
                  <button type='submit'
                         className='create__element__btn'
                         onClick={addTodo}
                         >    
                  </button>
                  
                  <input type="text" 
                         className='input' 
                         value={todoText}
                         onChange={(e) => setTodotext(e.target.value)}
                         placeholder='Create a new todo…'/>
            </form>
           
            
      );}

export default CreateElement;