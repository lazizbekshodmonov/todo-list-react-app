import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import {useEffect, useState} from 'react'
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection, setDoc, doc, deleteDoc} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCdfAbO-lLnl7jf0RYkDy_mJ9X2efAhNIc",
  authDomain: "todolist-72c88.firebaseapp.com",
  databaseURL: "https://todolist-72c88-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todolist-72c88",
  storageBucket: "todolist-72c88.appspot.com",
  messagingSenderId: "628953904303",
  appId: "1:628953904303:web:a790a5e4aaa4c16325505a",
  measurementId: "G-C8P3WDSHBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
function App() {
  async function getCities() {
    const citiesCol = collection(db, 'todocontent');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());

    return cityList;

  }

  const [todolist, setTodolist] = useState([]);
  useEffect(() => {

    getCities().then((data) => setTodolist(data));

  }, [todolist]);

  

  //add new todo function 
  async function addNewTodo(todo){
    const id = "id" + Math.random().toString(16).slice(2);
    const newTodo = {
       id: id,
       todotext: todo,
       check: false
    }
    const newData = doc(db, "todocontent", id);

    await setDoc(newData, newTodo);
    setTodolist([...todolist, newTodo])
  }
// setstate add checked function---------------------------------------------------------------------------

  const setData = (id) => {
    setTodolist(() => {
      
      return (
        todolist.map((item) => {
          if (item.id === id) {
            return (
              { ...item, check: !item.check });
          }
          return item;
        })
      );
    });
  };

  //delete data function
  async function deleteData(id){
    const todoList = todolist.filter((item) => item.id !== id);
    console.log(todoList);
    await deleteDoc(doc(db, "todocontent", id));
    setTodolist(todoList)
  }
  //set checked todo item function

  async function setFirebase(id) {
    const object = todolist.filter((item) => item.id === id)[0];
    object.check = !object.check
    const newData = doc(db, "todocontent", id);
    await setDoc(newData, object);
    
  }

//--------------------------------------------------------------------------------------------------------------------

  // if (todolist.length !== 0) {
    return (
      <div className="App">
        <Header />
        <Main data={todolist} setTodolist={setData} setfirebase={setFirebase} addNewTodo={addNewTodo} deleteData={deleteData}/>
      </div>
    );

  // }


}

export default App;
