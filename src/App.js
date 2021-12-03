import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import EmployeeAddForm from './components/employeeaddd-form/EmployeeAddForm';
import EmployeeDashBoard from './components/EmployeeDashBoard';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="app">

      <Routes>
        <Route path="/" element={<EmployeeDashBoard />} />
        <Route path="/add" element={<EmployeeAddForm />} />
      </Routes>
    </div>

  </BrowserRouter>
  );
}

export default App;