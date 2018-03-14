import React, { Component } from "react";
import API from "../../utils/API";


class EmployeeAdd extends Component {
    state = {
        firstName: "",
        lastName: "",
        Age: "",
        jobTitle: ""
    };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.Age && this.state.jobTitle) {
            API.saveEmployee({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                Age: this.state.Age,
                jobTitle: this.state.jobTitle
            })
                .then(res => 
                    console.log(res),
                    this.props.history.push("/employees"))

                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="container-fluid">
                <h1>Add an Employee</h1>
                <div class="col-xs-12 col-md-8">
                    <form>
                        <label for="firstName">First Name</label>
                        <input className="form-control"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            name="firstName"
                            id="firstName"
                        />
                        <label for="lastName">Last Name</label>
                        <input className="form-control"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            name="lastName"
                            id="lastName"
                        />
                        <label for="Age">Age</label>
                        <input className="form-control"
                            value={this.state.Age}
                            onChange={this.handleInputChange}
                            name="Age"
                            id="Age"
                        />
                        <div class="form-group">

                            <label for="jobTitle">Job Title</label>
                            <input className="form-control"
                                value={this.state.jobTitle}
                                onChange={this.handleInputChange}
                                name="jobTitle"
                                id="jobTitle"
                            />
                        </div>



                        <div class="form-group">
                            <button disabled={!(this.state.firstName && this.state.lastName)}
                                onClick={this.handleFormSubmit} type="submit" class="btn btn-default">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default EmployeeAdd;
