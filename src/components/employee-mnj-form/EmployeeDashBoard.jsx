import React, { useState,useEffect} from "react";
import {Link}  from "react-router-dom";
import { toast } from 'react-toastify';


const add_emp_button ={
    margin:"25px 200px 0px 0px",
    backgroundColor:"green"
}

const table_class={width:"75%", margin:"0 auto"}

const heading={
    margin:"auto"
}
const EmployeeDashBoard=()=>{

    const employeePayRollList = JSON.parse(localStorage.getItem("EmployeeList"));

    const [employees,setEmployeeList] =useState([]);

    useEffect(() => {
        if (employees != null) {
          if (employees.length > 0) {
            setEmployeeList([])
          } else {
            setEmployeeList(employeePayRollList);
          }
        }
      }, [])

      const deleteEmployee =(id)=>{
        const newEmployeeList = employees.filter(item => item.id !== id)

        setEmployeeList([...newEmployeeList]);

        localStorage.setItem("EmployeeList", JSON.stringify([...newEmployeeList]));
      }

    return(
        <>
        <div className="d-flex justify-content-between ">
                <h3 style={heading}>Employee PayRoll DashBoard</h3>
                <Link to="/add" className="btn btn-primary" style={add_emp_button}> Add Employee </Link>
            </div>
            <hr />
            <table className="table table-bordered table-hover table-striped text-center" style={table_class}>
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Start Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            employees.length > 0 ?
                                employees.map((employee, index) => {
                                    return <tr key={employee.id}>
                                        <td className="text-left"> <img src={employee.profileUrl} className="profile_img mr-2" /></td>
                                        <td>{employee.name}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.department.map((emp, i) => <span key={i}>{emp}</span>)}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.day} {employee.month} {employee.year} </td>
                                    <td>
                                        <Link to={`emp/{employee.id`}><button type="button" className="btn btn-warning">Edit</button></Link>
                                        <button type="button" onClick={() => deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                    </tr>
                                })
                                : <tr>
                                    <td colSpan="8"> <strong>No Data Found!</strong></td>
                                </tr>
                        }
                    </tbody>
            </table>
        </>
    );

}

export default EmployeeDashBoard;