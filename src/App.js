import React from 'react'
import { BrowserRouter as Routar, Routes,Route } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home';
import Student from './Component/Student';
import Contect from './Component/Contect';
import './style.css'
import {StudentContext} from './Component/StudentContext'
import Studentsdesc from './Component/Studentsdesc';

function App() {
  return (
    <div className="App">
    <Routar>
      <Header />
      <StudentContext>

      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/student' element={<Student />}/>
        <Route path='/contect' element={<Contect />}/>
        <Route path='/studentsdesc' element={<Studentsdesc />}/>
        <Route path='/studentsdesc/:id' element={<Studentsdesc />}/>
      </Routes>

      </StudentContext>
      

    </Routar>
   
    </div>
  );
}

export default App;

