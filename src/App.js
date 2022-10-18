import "./components/style.css"

import React from 'react';
import {BrowserRouter, json, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Students from './components/Students';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Add from "./components/AddStud"
import Edit from './components/Edit';
import { useState } from 'react';

const App = () => {

  let [students, editStudents] = useState([]);

  const updateStudents = (us) => {
      editStudents(students.append(us));
  }

  const editStudent = (s, t, u, d, end) => {
    let arr = students;

    if(s != "") {
      arr[end][0] = s;
    }
    if(t != "") {
      arr[end][1] =  t;
    }
    if(u != "") {
      arr[end][2] =  u;
    }
    if(d != "") {
      arr[end][3] =  d;
    }

    editStudents(arr);
  }

  
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students stud={students}/>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/students/add" element={<Add stud={students} method={updateStudents}/>}/>
            <Route path="students/edit" element={<Edit stud={students} edit={editStudent}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )

  
}

export default App;