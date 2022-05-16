import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import {useEffect, useState} from 'react'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDocs, getFirestore, collection } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
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
const App = () => {
  async function getCities() {
    const citiesCol = collection(db, 'todocontent');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
   
   return cityList; 
  
  }
  
  const [todolist, setTodolist] = useState([])
  useEffect(()=>{
    getCities().then((data) => setTodolist(data))
  }, []);

   const setData = (id) =>{
     setTodolist(({data}) =>{
        
       
     })
   }

   
  
  if(todolist.length !== 0){
    return (
      <div className="App">
              < Header />
              <Main data={todolist} setTodolist={setData}/>
          </div>
  );
    
  }
  
  
};

export default App;
