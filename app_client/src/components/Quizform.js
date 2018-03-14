import React, { Component } from "react";
import FormStates from "./../helpers/FormStates";
import FormBtns from "./FormBtns";
class EmployeeForm extends Component {
    render() {
        let readOnly = false;
        if(this.props.formState === FormStates.view) {
            readOnly = true;
        }
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName">What would you like to learn?</label>
                        <input readOnly={readOnly}  type="radio" value="thing1" className="form-control" name="firstName" placeholder="First Name..." onChange={this.props.handleChange}/>
                        <input readOnly={readOnly}  type="radio" value="thing2" className="form-control" name="lastName" placeholder="Last Name..." onChange={this.props.handleChange}/>
                        <input readOnly={readOnly}  type="radio" value="thing3" className="form-control" name="age" placeholder="Age..." onChange={this.props.handleChange}/>
                        <input readOnly={readOnly}  type="radio" value="thing4" className="form-control" name="jobTitle" placeholder="Job Title..." onChange={this.props.handleChange}/>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input readOnly={readOnly} value={this.props.employee.firstName} type="text" className="form-control" name="firstName" placeholder="First Name..." onChange={this.props.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input readOnly={readOnly} value={this.props.employee.lastName} type="text" className="form-control" name="lastName" placeholder="Last Name..." onChange={this.props.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input readOnly={readOnly} value={this.props.employee.age} type="text" className="form-control" name="age" placeholder="Age..." onChange={this.props.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input readOnly={readOnly} value={this.props.employee.jobTitle} type="text" className="form-control" name="jobTitle" placeholder="Job Title..." onChange={this.props.handleChange}/>
                    </div> */}
                    <div className="clearfix">
                        <FormBtns handleDelete = {this.props.handleDelete} 
                        handleEdit={this.props.handleEdit} 
                        formState = {this.props.formState} 
                        handleSubmit={this.props.handleSubmit}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default EmployeeForm;