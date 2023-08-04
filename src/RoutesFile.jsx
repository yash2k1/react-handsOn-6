import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorHandler from "./Components/ErrorHandler";
import Home from "./Pages/Home";
import Students from "./Pages/Students";
import Contact from "./Pages/Contact";
import Form from "./Components/Form";
// import Store from "./Components/Store";
const RoutesFile = () => {
  // const [studentData,setStudentData]= useState([
  //     {Name:'john',
  //     Age:26,
  //     Course:'MERN',
  //     Batch:'October',
  //     Change:'Edit',
  //     Id:1,
  //     },
  //     {Name:'Doe',
  //     Age:25,
  //     Course:'MERN',
  //     Batch:'November',
  //     Change:'Edit',
  //     Id:2,
  //     },
  //     {Name:'Biden',
  //     Age:26,
  //     Course:'MERN',
  //     Batch:'September',
  //     Change:'Edit',
  //     Id:3,
  //     },
  //     {Name:'Barar',
  //     Age:22,
  //     Course:'MERN',
  //     Batch:'September',
  //     Change:'Edit',
  //     Id:4,
  //     },
  //     {Name:'Christ',
  //     Age:23,
  //     Course:'MERN',
  //     Batch:'October',
  //     Change:'Edit',
  //     Id:5,
  //     },
  //     {Name:'Elent',
  //     Age:23,
  //     Course:'MERN',
  //     Batch:'November',
  //     Change:'Edit',
  //     Id:6,

  //     },
  //       ]
  //       )
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/students" element={<Students />} />
        <Route path="/form" element={<Form/>} />
        <Route path="/form/:studentId" element={<Form/>} />
        {/* <Route path="/Students/:studentId" element={<Students />} /> */}
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<ErrorHandler />}/>
      </Routes>
    </>
  );
};
export default RoutesFile;
