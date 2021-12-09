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
            setEmployeeList(employees);
          }
        }
      }, [])

      const deleteEmployee =(id)=>{

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
                                        <td className="text-left"> <img src={employee.profilePic} className="profile_img mr-2" /> {employee.name} </td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.department.map((emp, i) => <span className="department_badde badge  badge-info mr-1" key={i}>{emp}</span>)}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.day} {employee.month} {employee.year}</td>
                                        <td>
                                            <Link to={`/edit/${employee.id}`} className="action_btn fa fa-edit  text-success px-1" title="Edit"></Link>
                                            <i onClick={() => deleteEmployee(employee.id)} className="action_btn fa fa-trash text-danger px-1" title="Delete"></i>
                                        </td>
                                    </tr>
                                })
                                : <tr>
                                    <td colSpan="6"> <strong>No Data Found!</strong></td>
                                </tr>
                        }
                    </tbody>
            </table>
        </>
    );

}

export default EmployeeDashBoard;