import React from "react";
import  {Link} from 'react-router-dom';


const add_emp_button ={
    margin:"25px 200px 0px 0px",
    backgroundColor:"green"
}

const table_class={width:"75%", margin:"0 auto"}

const heading={
    margin:"auto"
}
const EmployeeDashBoard=()=>{
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
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Start Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </table>
        </>
    );

}

export default EmployeeDashBoard;