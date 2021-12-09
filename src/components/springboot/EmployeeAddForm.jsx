import { useState,useEffect } from "react";
import {Link,useParams}  from "react-router-dom";
import './employeeAddForm.css';
import profile1 from "../../assets/profile_images/logo1.png";
import profile2 from "../../assets/profile_images/logo2.png";
import profile3 from "../../assets/profile_images/logo3.png";
import profile4 from "../../assets/profile_images/logo4.png";

import employeeServices from "../../services/EmloyeeServies";
import {toast} from "react-toastify";
import axios from "axios";


function EmployeeAddForm() {

    const [departmentArr,setDepartmentArr] = useState([]);

    const [employee,setEmployee] = useState(
        {
            name:"",
            profilePic:"",
            gender:"",
            department:[],
            salary:"",
            day:"",
            month:"",
            year:"",
            note:""
        }
    );


    const addEmployeeToList=(employee_data)=>{
        employeeServices.createEmployee(employee_data).then(
            (response) =>{
                console.log(response);
                toast.dark("New Employee Added",{position:"top-center"});
            },
            (error) =>{
                console.log(error);
                toast.error("Error while adding the Employee..",{position:"top-center"});

            }
        )
    }
    const {id} = useParams();

    const updateEmployee = (data)=>{
        axios.put(`http://localhost:8885/empservices/update/${id}`, data)
        .then((res) => {
            toast.dark("Record Updated Successfully", { position: "top-center" });
            setEmployee({
                name: "",
                profilePic: "",
                gender: "",
                department: [],
                salary: "",
                day: "",
                month:"",
                year:"",
                note: ""
            })
        })
        .catch(err => {
            console.log(err);
        })
        };

    useEffect(()=>{
        document.title ="Employee Form";
        if (id) {
            axios.get(`http://localhost:8885/empservices/get/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setEmployee({
                        name: res.data.data.name,
                        profilePic:  res.data.data.profilePic,
                        gender:  res.data.data.gender,
                        department: [res.data.data.department],
                        salary:  res.data.data.salary,
                        day:res.data.data.startDate.substring(8,9),
                        month:res.data.data.startDate.substring(5,7),
                        year:res.data.data.startDate.substring(0,4),
                        note:  res.data.data.note
                    })
                    console.log(employee);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    },[]);


    const handleDepartment = (e) =>{
       if (e.target.checked) {
        departmentArr.push(e.target.value)
        setDepartmentArr(departmentArr)
    }

    if (!e.target.checked) {
        for (var i = 0; i < departmentArr.length; i++) {
            if (departmentArr[i] === e.target.value) {
                departmentArr.splice(i, 1);
                i--;
            }
        }
    }
    setEmployee({ ...employee, department: [...departmentArr] })
    }

    const resetForm =()=>{
        setEmployee({
            name:"",
            profilePic:"",
            gender:"",
            department:[],
            salary:"",
            day:"",
            month:"",
            year:"",
            notes:""
        })
        document.getElementById("emp_add_form").reset();
    }


    const handleSubmit =(event)=>{
        event.preventDefault();
        if (id) {
            updateEmployee(employee);
            resetForm();
        } else {
            let emp_obj ={
                name:employee.name,
                profilePic:employee.profilePic,
                gender:employee.gender,
                departments:employee.department,
                salary:employee.salary,
                startDate:`${employee.day} ${employee.month} ${employee.year}`,
                note:employee.note
            }
            console.log("Employee : "+JSON.stringify(emp_obj));
            addEmployeeToList(emp_obj);
            resetForm();
        }
    }


    return (
        <>
            <div className="form-content">
                <form className="form" action="#" onSubmit={(e)=>handleSubmit(e)} id="emp_add_form">
                    <div className="form-head">Employee Payroll form</div>
                    <Link to="/"><button type="button" className="btn btn-success">Go Dashboard</button></Link>
                    <input type="hidden" id="emp_id" name="emp_id" />
                    <div className="row_content">
                        <label className="label text" htmlFor="name">name</label>
                        <input className="input" type="text" id="name" name="name" value={employee.name} onChange={(e) => { setEmployee({ ...employee, name: e.target.value }) }} placeholder="your Name.." />
                    </div>
                    <div className="row_content">
                        <label className="label text" htmlFor="profilePic">Profile Image</label>
                        <div className="profile-radio-content">
                            <label>
                                <input type="radio" id="profile1" name="profilePic" value={profile1} checked={employee.profilePic === profile1} onChange={(e) => { setEmployee({ ...employee, profilePic: e.target.value }) }} />
                                <img className="profile" src={profile1} alt="" />
                            </label>
                            <label>
                                <input type="radio" id="profile2" name="profilePic" value={profile2}  checked={employee.profilePic === profile2} onChange={(e) => { setEmployee({ ...employee, profilePic: e.target.value }) }}/>
                                <img className="profile" src={profile2} alt="" />
                            </label>
                            <label>
                                <input type="radio" id="profile3" name="profilePic" value={profile3} checked={employee.profilePic === profile3} onChange={(e) => { setEmployee({ ...employee, profilePic: e.target.value }) }} />
                                <img className="profile" src={profile3} alt="" />
                            </label>
                            <label>
                                <input type="radio" id="profile4" name="profilePic" value={profile4} checked={employee.profilePic === profile4} onChange={(e) => { setEmployee({ ...employee, profilePic: e.target.value }) }} />
                                <img className="profile" src={profile4} alt="" />
                            </label>
                        </div>
                    </div>
                    <div className="error"></div>
                    <div className="row_content">
                        <label className="text label" htmlFor="gender">Gender</label>
                        <div>
                            <input type="radio" id="male" name="gender" value="male" checked={employee.gender === "male"} onChange={(e) => { setEmployee({ ...employee, gender: e.target.value }) }}/>
                            <label className="taxt" htmlFor="male">Male</label>
                            <input type="radio" id="female" name="gender" checked={employee.gender === "female"} value="female" onChange={(e) => { setEmployee({ ...employee, gender: e.target.value }) }} />
                            <label className="taxt" htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="row_content">
                        <label className="label text" htmlFor="department">Department</label>
                        <div>
                            <input className="checkbox" type="checkbox" id="hr" name="hr" value="Hr" checked={employee.department.includes("Hr")} onChange={(e)=>handleDepartment(e)} />
                            <label className="text" htmlFor="hr">HR</label>
                            <input className="checkbox" type="checkbox" id="sales" name="sales" value="Sales" checked={employee.department.includes("Sales")} onChange={(e)=>handleDepartment(e)}/>
                            <label className="text" htmlFor="sales">Sales</label>
                            <input className="checkbox" type="checkbox" id="fianance" name="fianance" value="Fianance" checked={employee.department.includes("Fianance")} onChangek={(e)=>handleDepartment(e)} />
                            <label className="text" htmlFor="fianance">Fianance</label>
                            <input className="checkbox" type="checkbox" id="engineer" name="engineer" value="Engineer" checked={employee.department.includes("Engineer")} onChange={(e)=>handleDepartment(e)}/>
                            <label className="text" htmlFor="engineer">Engineer</label>
                            <input className="checkbox" type="checkbox" id="others" name="others" value="Others" checked={employee.department.includes("Others")} onChange={(e)=>handleDepartment(e)} />
                            <label className="text" htmlFor="others">Others</label>
                        </div>
                    </div>

                    <div className="row_content">
                        <label className="text label" htmlFor="salary"> Salary</label>
                        <input type="number" id="salary" name="salary" placeholder="salary" className="input" value={employee.salary} onChange={(e) => { setEmployee({ ...employee, salary: e.target.value }) }} />
                    </div>

                    <div className="row_content">
                        <label htmlFor="startDate" className="label text">Start Date</label>
                        <div>
                            <select name="day" id="day" value={employee.day} onChange={(e) => { setEmployee({ ...employee, day: e.target.value }) }}>
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                            </select>
                            <select name="month" id="month" value={employee.month} onChange={(e) => { setEmployee({ ...employee, month: e.target.value }) }}>
                                <option value="Jan">January</option>
                                <option value="Feb">Febuary</option>
                                <option value="Mar">March</option>
                                <option value="Apr">April</option>
                            </select>
                            <select name="year" id="year" value={employee.year} onChange={(e) => { setEmployee({ ...employee, year: e.target.value }) }}>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                            </select>
                        </div>
                    </div>

                    <div className="row_content">
                        <label className="label text" htmlFor="notes">Notes</label>
                        <textarea id="notes" name="notes" className="input" style={{ height: '100%' }} value={employee.note} onChange={(e) => { setEmployee({ ...employee, note: e.target.value }) }}></textarea>
                    </div>
                    <div className="buttonParent">
                        <a routerLink="" className="resetButton button cancelButton"> Cancel</a>
                        <div className="submit-reset">
                            <button type="submit" className="button submitButton" id="submitButton">Submit</button>
                            <button type="reset" className="button resetButton">Reset</button>
                        </div>
                    </div>

                </form>
            </div>
        </>
    );
}

export default EmployeeAddForm;