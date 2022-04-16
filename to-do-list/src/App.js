import { useState,useEffect } from 'react';
import axios from 'axios'
import {Route,Routes} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Nav from './components/Nav';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' main={<ToDoList />}/>

        
      </Routes>
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
