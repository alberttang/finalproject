import React, { Component } from "react";
import API from "../../utils/API";

class EmployeeView extends Component {
    state = {
        employees: []
    };

    componentDidMount() {
        this.loadEmployees();
    }

    loadEmployees = () => {
        API.getEmployee(this.props.match.params.id)
            .then(res => this.setState({ employees: res.data  }, console.log(res) ))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div class="col-md-6">
                        <div class="jumbotron">
                            <h1>Employee List</h1>
                        </div>
                        {this.state.employees.length ? (
                            <ul>
                                {this.state.employees.map(employees => (
                                    <li key={employees.id}>
                                        <p>
                                            <strong>
                                                Name: {employees.firstName} {employees.lastName}
                                            </strong>
                                        </p>
                                        <p>
                                            <strong>
                                                Position: {employees.jobTitle}
                                            </strong>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeView;
