import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "./StudentContext"
import './style.css'


const AddStudent = () => {
  const navigate = useNavigate();

  let [students, setStudents] = useContext(ContextData);
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [course, setCourse] = useState("")
    let [batch, setBatch] = useState("")    
    let [tempObj] = useState({})

    const onNameChange = (event) => {
      setName(event.target.value)
      // console.log(event.target.value)
  }

  const onAgeChange = (event) => {
    setAge(event.target.value)
}

const onBatchChange = (event) => {
  setBatch(event.target.value)
}
const onCourseChange = (event) => {
  setCourse(event.target.value)
}

const submitHandler = (event) => {
  event.preventdefault();

  // console.log(tempObj)
  tempObj= {
      name,
      age,
      course,
      batch,
      id:String(students.length+1)
  }
  
  setStudents(tempObj)
  console.log(tempObj)
  navigate("/students")
}

const goBackHandler = () => {
  navigate("/student")
}
  return (
    <div className="main_container">
          
          <input className="input_box_name" placeholder="name" type="text" value={name} name="name" onChange={onNameChange}/>
                <input className="input_box_age" placeholder="age" type="number" name="age" value={age} onChange={onAgeChange}/>
                <input className="input_box_course" placeholder="course" type="text" name="course" value={course} onChange={onCourseChange}/>
                <input className="input_box_batch" placeholder="batch" type="text" name="batch" value={batch} onChange={onBatchChange}/>
                <button className="button_back_button" onClick={goBackHandler}>go back</button>
                <button className="button_submit_button" onClick={submitHandler} type="submit">submit</button>

    </div>
  )
}

export default AddStudent