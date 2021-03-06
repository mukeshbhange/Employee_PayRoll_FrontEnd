import {useState } from "react";
import {useNavigate,Link}  from "react-router-dom";
import './employeeAddForm.css';
import profile1 from "../../assets/profile_images/logo1.png";
import profile2 from "../../assets/profile_images/logo2.png";
import profile3 from "../../assets/profile_images/logo3.png";
import profile4 from "../../assets/profile_images/logo4.png";


function EmployeeAddForm() {
    const [employeeList,setEmployeeList] =useState([]);

    const [employee,setEmployee] = useState(
        {
            id:employeeList.length,
            name:"",
            profileUrl:"",
            gender:"",
            department:[],
            salary:"",
            day:"",
            month:"",
            year:"",
            notes:""
        }
    );

    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(employee);
        employeeList.push(employee);
        //setEmployeeList([...employeeList,employee]);
        localStorage.setItem("EmployeeList",JSON.stringify(employeeList));
        resetForm();

       // setTimeout(() => { resetForm(); navigate("/"); }, 3000);
      /* let emp_id = document.getElementById("emp_id").value
        if (emp_id) {
            employeeList.forEach(item => {
                if (emp_id == item.id) {
                    item.id = employee.id;
                    item.name = employee.name;
                    item.profileUrl = employee.profileUrl;
                    item.gender = employee.gender;
                    item.department = employee.department;
                    item.salary = employee.salary;
                    item.day = employee.day;
                    item.month = employee.month;
                    item.year = employee.year;
                    item.notes = employee.notes;
                }
            })
            localStorage.setItem("EmployeeList", JSON.stringify([...employeeList]));
        } else {
            setEmployeeList([...employeeList, employee]);
            localStorage.setItem("EmployeeList", JSON.stringify([...employeeList, employee]));
        }
        setTimeout(() => { resetForm(); navigate("/"); }, 3000);*/
    }

    const [departmentArr,setDepartmentArr] = useState([]);
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
            id :employeeList.length+1,
            name:"",
            profileUrl:"",
            gender:"",
            department:{},
            salary:"",
            day:"",
            month:"",
            year:"",
            notes:""
        })
        document.getElementById("emp_add_form").reset();
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
                        <label className="label text" htmlFor="profileUrl">Profile Image</label>
                        <div className="profile-radio-content">
                            <label>
                                <input type="radio" id="profile1" name="profileUrl" value={profile1}  onClick={(e) => { setEmployee({ ...employee, profileUrl: e.target.value }) }} />
                                <img className="profile" src={profile1} />
                            </label>
                            <label>
                                <input type="radio" id="profile2" name="profileUrl" value={profile2}  onClick={(e) => { setEmployee({ ...employee, profileUrl: e.target.value }) }}/>
                                <img className="profile" src={profile2} />
                            </label>
                            <label>
                                <input type="radio" id="profile3" name="profileUrl" value={profile3} onClick={(e) => { setEmployee({ ...employee, profileUrl: e.target.value }) }} />
                                <img className="profile" src={profile3} />
                            </label>
                            <label>
                                <input type="radio" id="profile4" name="profileUrl" value={profile4} onClick={(e) => { setEmployee({ ...employee, profileUrl: e.target.value }) }} />
                                <img className="profile" src={profile4} />
                            </label>
                        </div>
                    </div>
                    <div className="error"></div>
                    <div className="row_content">
                        <label className="text label" htmlFor="gender">Gender</label>
                        <div>
                            <input type="radio" id="male" name="gender" value="male"  onClick={(e) => { setEmployee({ ...employee, gender: e.target.value }) }}/>
                            <label className="taxt" htmlFor="male">Male</label>
                            <input type="radio" id="female" name="gender" value="Female" onClick={(e) => { setEmployee({ ...employee, gender: e.target.value }) }} />
                            <label className="taxt" htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="row_content">
                        <label className="label text" htmlFor="department">Department</label>
                        <div>
                            <input className="checkbox" type="checkbox" id="hr" name="hr" value="Hr" onClick={(e)=>handleDepartment(e)} />
                            <label className="text" htmlFor="hr">HR</label>
                            <input className="checkbox" type="checkbox" id="sales" name="sales" value="Sales" onClick={(e)=>handleDepartment(e)}/>
                            <label className="text" htmlFor="sales">Sales</label>
                            <input className="checkbox" type="checkbox" id="fianance" name="fianance" value="Fianance" onClick={(e)=>handleDepartment(e)} />
                            <label className="text" htmlFor="fianance">Fianance</label>
                            <input className="checkbox" type="checkbox" id="engineer" name="engineer" value="Engineer" onClick={(e)=>handleDepartment(e)}/>
                            <label className="text" htmlFor="engineer">Engineer</label>
                            <input className="checkbox" type="checkbox" id="others" name="others" value="Others" onClick={(e)=>handleDepartment(e)} />
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
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
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
                        <textarea id="notes" name="notes" className="input" style={{ height: '100%' }} value={employee.notes} onChange={(e) => { setEmployee({ ...employee, notes: e.target.value }) }}></textarea>
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