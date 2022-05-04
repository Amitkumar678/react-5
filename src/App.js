import React from 'react'
import { BrowserRouter as Routar, Routes,Route } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home';
import Student from './Component/Student';
import Contect from './Component/Contect';
import './Component/style.css'
import Edit from './Component/Edit';
import AddStudent from './Component/AddStudent';
import {StudentContext} from './Component/StudentContext'

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
        <Route path='/student/:id' element={<Edit />}/>
        <Route path='/addstudent' element={<AddStudent />}/>
      </Routes>

      </StudentContext>
      

    </Routar>
   
    </div>
  );
}

export default App;

