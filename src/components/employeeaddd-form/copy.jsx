import react, { useCase,useEffect, useState } from "react";

import './employeeAddForm.css';
import profile1 from "../../assets/profile-images/._Ellipse -1.png";


function EmployeeAddForm() {
    const [employee,setEmployee] = useCase({
            name: "",
            profilePic: "",
            gender: "",
            department: "",
            salary: "",
            startDate: "",
            note: ""
    })

    useEffect(()=>{
        let employee_obj = {
                name:employee.name,
                profileUrl:employee.profileUrl,
                gender:employee.gender,
                department:employee.departMentValue,
                salary:employee.salary,
                startDate:`${ employee.day} ${ employee.month} ${ employee.year}`,
                notes:employee.notes
    
        }
        localStorage.setItem("EmployeeList",employee_obj);
    },[employee]);

    const onChange = event => setEmployee(event.target.value);

    const save = (event) =>{
        event.preventDefault();
        setEmployee(employee);
    }
    return (
        <>
            <div className="form-content">
                <form className="form" action="#" onSubmit={save}>
                    <div className="form-head">Employee Payroll form</div>
                    <div className="row_content">
                        <label className="label text" htmlFor="name">name</label>
                        <input className="input" type="text" id="name" onChange={onChange} value={employee.name} name="name" placeholder="your Name.." requuired />
                    </div>
                    <div className="row_content">
                        <label className="label text" htmlFor="profileUrl">Profile Image</label>
                        <div className="profile-radio-content">
                            <label>
                                <input type="radio" id="profile1" name="profileUrl" value="../../assets/profile-images/Ellipse -3.png" />
                                <img className="profile" src={profile1} />
                            </label>
                            <label>
                                <input type="radio" id="profile2"  name="profileUrl"  value="../../assets/profile-images/Ellipse -1.png" />
                                <img className="profile" src="../../assets/profile-images/Ellipes -1.png" />
                            </label>
                            <label>
                                <input type="radio" id="profile3"  name="profileUrl" value="../../assets/profile-images/Ellipse -2.png" />
                                <img className="profile" src="../../assets/profile-images/Ellipes -8.png" />
                            </label>
                            <label>
                                <input type="radio" id="profile4" name="profileUrl"  value="../../assets/profile-images/Ellipse -7.png" />
                                <img className="profile" src="../../assets/profile-images/Ellipes -7.png" />
                            </label>
                        </div>
                    </div>
                    <div className="error"></div>
                    <div className="row_content">
                        <label className="text label" htmlFor="gender">Gender</label>
                        <div>
                            <input type="radio" id="male" onChange={onChange} name="gender" value="male" />
                            <label className="taxt" htmlFor="male">Male</label>
                            <input type="radio" id="female" onChange={onChange} value={employee.name} name="gender" value="Female" />
                            <label className="taxt" htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="row_content">
                        <label className="label text" htmlFor="department">Department</label>
                        <div>
                            <input className="checkbox" type="checkbox" id="hr" name="hr" value="Hr" />
                            <label className="text" htmlFor="hr">HR</label>
                            <input className="checkbox" type="checkbox" id="sales" name="sales" value="Sales" />
                            <label className="text" htmlFor="sales">Sales</label>
                            <input className="checkbox" type="checkbox" id="fianance" name="fianance" value="Fianance" />
                            <label className="text" htmlFor="fianance">Fianance</label>
                            <input className="checkbox" type="checkbox" id="engineer" name="engineer" value="Engineer" />
                            <label className="text" htmlFor="engineer">Engineer</label>
                            <input className="checkbox" type="checkbox" id="others" name="others" value="Others" />
                            <label className="text" htmlFor="others">Others</label>
                        </div>
                    </div>

                    <div className="row_content">
                        <label className="text label" htmlFor="salary"> Salary</label>
                        <input type="number" id="salary" name="salary" onChange={onChange} value={employee.salary} placeholder="salary" className="input" />
                    </div>

                    <div className="row_content">
                        <label htmlFor="startDate" className="label text">Start Date</label>
                        <div>
                            <select name="day"  id="day" onChange={onChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <select name="month"  id="month" onChange={onChange}>
                                <option value="Jan">January</option>
                                <option value="Feb">Febuary</option>
                                <option value="Mar">March</option>
                                <option value="Apr">April</option>
                            </select>
                            <select name="year"  id="year" onChange={onChange}>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                            </select>
                        </div>
                    </div>

                    <div className="row_content">
                        <label className="label text" htmlFor="notes">Notes</label>
                        <textarea id="notes" name="notes" onChange={onChange} className="input" style={{ height: '100%' }}></textarea>
                    </div>
                    <div className="buttonParent">
                        <a routerLink="" className="resetButton button cancelButton"> Cancel</a>
                        <div className="submit-reset">
                            <button type="submit" className="button submitButton" id="submitButton">Submit</button>
                            <button type="button" className="button resetButton">Reset</button>
                        </div>
                    </div>

                </form>
            </div>
        </>
    );
}

export default EmployeeAddForm;