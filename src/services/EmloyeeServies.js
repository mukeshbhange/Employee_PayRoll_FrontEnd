import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8885/empservices";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL+'/getall');
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+'/add', employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/get/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/update/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/delete/' + employeeId);
    }
}

export default new EmployeeService()