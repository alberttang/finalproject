import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class EmployeeHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }
    componentDidMount() {
        API.getEmployees()
            .then(response => {
                console.log(response.data)
                this.setState({ employees: response.data });
            })
            .catch(err => {
                console.error(err);
            })
    }
    render() {
        return (
            <div>
                <h1>Employee Home <Link className="btn btn-primary" to="/employees/add">Add Employee</Link></h1>

                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>View</th>
                            <th>Edit</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Job Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employees => (
                            <tr>
                                <td><Link to={`/employees/view/${employees.id}`}><span className="glyphicon glyphicon-eye-open"></span></Link></td>
                                <td><Link to={`/employees/edit/${employees.id}`}><span className="glyphicon glyphicon-pencil"></span></Link></td>
                                <td>{employees.firstName}</td>
                                <td>{employees.lastName}</td>
                                <td>{employees.Age}</td>
                                <td>{employees.jobTitle}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default EmployeeHome;