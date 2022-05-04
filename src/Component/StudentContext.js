import React, { createContext, useState } from "react"

export const ContextData = createContext()

export const StudentContext = (props) => {
  const [rows, setRows] = useState([
    { name: "John", Age: 24, Course: "MERN", Batch: "October", id: "1" },
    { name: "Doe", Age: 25, Course: "MERN", Batch: "November", id: "2" },
    { name: "Biden", Age: 26, Course: "MERN", Batch: "September", id: "3" },
    { name: "Barar", Age: 22, Course: "MERN", Batch: "September", id: "4" },
    { name: "Christ", Age: 23, Course: "MERN", Batch: "October", id: "5" },
    { name: "Elent", Age: 24, Course: "MERN", Batch: "November", id: "6" },
  ])
  return (
    <ContextData.Provider value={[rows, setRows]}>
      {props.children}
    </ContextData.Provider>
  )
}
