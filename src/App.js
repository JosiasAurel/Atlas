import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Lander, Spinner, Sidebar, StudentNav } from "./Components";
import { ToastContainer } from "react-toastify";
import {
  Login,
  Register,
  TakeQuestionTest,
  Dashboard,
  StudentProfile,
} from "./Pages/";
import { useSelector } from "react-redux";
// const
const App = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  const [isOpen, setIsOpen] = useState(false);
  const student = useSelector((state) => state.auth?.student);
  const theme = useSelector((state) => state.theme);

  return (
    <div data-theme={theme}>
      {pathname === "login" ||
      pathname === "register" ||
      pathname === "Dashboard" ||
      student ? null : (
        <Navbar />
      )}
      {student ? <StudentNav isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
      {student ? <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
      <Routes>
        <Route path="/" element={student ? <Dashboard /> : <Lander />} />
        <Route element={<Login />} path="/Login" />
        <Route element={<Register />} path="/register" />
        <Route element={<TakeQuestionTest />} path="/questionTest" />
        <Route element={<StudentProfile />} path="/profile" />
        <Route element={<Spinner />} path="/spinner" />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
