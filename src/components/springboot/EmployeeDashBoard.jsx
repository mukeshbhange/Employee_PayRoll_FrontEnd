import React, { useState,useEffect} from "react";
import {Link}  from "react-router-dom";
import { toast } from 'react-toastify';
import employeeServieces from "../../services/EmloyeeServies";
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";

const add_emp_button ={
    margin:"25px 200px 0px 0px",
    backgroundColor:"green"
}

const table_class={width:"75%", margin:"0 auto"}

const heading={
    margin:"auto"
}
const EmployeeDashBoard=()=>{

    const [employees,setEmployeeList] =useState([]);

    const getAllEmployees =()=>{
        employeeServieces.getEmployees().then(
            (response)=>{
                setEmployeeList(response.data.data);
                console.log(response.data.data);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong, while getting records ", { position: "top-center" });
            }
        );
    };

    useEffect(()=>{
        document.title = "DashBoard";
        getAllEmployees();
    },[]);

    const deleteEmployee =(id)=>{
        console.log(id);
        employeeServieces.deleteEmployee(id).then(
            (response)=>{
                toast.dark("Record Deleted Successfully", { position: "top-center" });
                console.log(response);
                const newList = employees.filter((emp) => emp.employeeId !== id);
                setEmployeeList([...newList]);

            },
            (error)=>{
                console.log(error)
                toast.error("Something went wrong, while deleting record ", { position: "top-center" });
            }
        )
            
    };

    const [order ,setorder] = useState("ASC");
    const sorting =(column_name)=>{
        if(order === "ASC"){
            const sorted =[...employees].sort((a,b) =>
                a[column_name] > b[column_name] ? 1 : -1 );
                setEmployeeList(sorted);
            setorder("DSC");
        }
        if(order === "DSC"){
            const sorted =[...employees].sort((a,b) =>
                a[column_name] < b[column_name] ? 1 : -1 );
                setEmployeeList(sorted);
            setorder("ASC");
        }
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
                        <th onClick={()=>sorting("name")}>Name</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th onClick={()=>sorting("salary")}>Salary</th>
                        <th>Start Date</th>
                        <th>Notes</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            employees.length > 0 &&
                                employees.map((employee, index) => {
                                    return <tr key={`${index}`}>
                                        <td className="text-left"> <img src={employee.profilePic} alt="" className="profile_img mr-2" /></td>
                                        <td>{employee.name}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.departments.map((emp, i) => <span key={i}>{emp} </span>)}</td>
                                        <td >{employee.salary}</td>
                                        <td>{employee.startDate} </td>
                                        <td>{employee.note}</td>
                                    <td>
                                        <Link to={`edit/${employee.employeeId}`}><MdOutlineEdit /></Link>
                                        <MdOutlineDeleteOutline  onClick={() => deleteEmployee(employee.employeeId)} />
                                    </td>
                                    </tr>
                                })
                        }
                    </tbody>
            </table>
        </>
    );

}

export default EmployeeDashBoard;