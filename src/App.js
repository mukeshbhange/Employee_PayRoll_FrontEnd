import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import EmployeeAddForm from './components/employeeaddd-form/EmployeeAddForm';
import EmployeeDashBoard from './components/employeeaddd-form/EmployeeDashBoard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {  useState,useEffect } from "react";



function App() {

  const [employeeList,setemployeeList] =useState([]);

  const employees = JSON.parse(localStorage.getItem("PayRoll_Employees"));

  useEffect(() => {
    if (employees != null) {
      if (employees.length < 0) {
        setemployeeList([])
      } else {
        setemployeeList(employees);
      }
    }
  }, []);

  return (
    <BrowserRouter>
    <div className="app">

      <Routes>
        <Route exact={true} path="/" element={<EmployeeDashBoard employeeList={employeeList} setemployeeList={setemployeeList}  />} />
        <Route exact={true} path="/add" element={<EmployeeAddForm />} />
        <Route path="emp/:id" element={<EmployeeAddForm />} />
      </Routes>
    </div>

  </BrowserRouter>
  );
}

export default App;