import React, { Component } from 'react';
import axios from "axios";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.submit = this.submit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    submit(e) {
        e.preventDefault();
        axios.post("/auth/register", this.state)
        .then(resp => {
            console.log(resp);
            this.props.history.push("/login");
        })
        .catch(err => {
            console.error(err);
        })
    }
    render() {
        return (
            <div className="container">
                <form>
                    <h1> Register For An Account Below:</h1>
                    <div className="form-group">
                        <label>Email</label>
                        <input className = "form-control" type="email" name="email" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className = "form-control" type="password" name="password" onChange={this.handleInputChange}/>
                    </div>
                    <button className = "btn btn-primary" onClick={this.submit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Register;
