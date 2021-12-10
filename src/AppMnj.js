import './App_mnj.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import EmployeeAddForm from './components/springboot/EmployeeAddForm';
import EmployeeDashBoard from './components/springboot/EmployeeDashBoard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AppMnj() {
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route exact={true} path="/" element={<EmployeeDashBoard  />} />
        <Route exact={true} path="/add" element={<EmployeeAddForm />} />
        <Route path="edit/:id" element={<EmployeeAddForm />} />
      </Routes>
    </div>
    <ToastContainer />
  </BrowserRouter>
  );
}

export default AppMnj;