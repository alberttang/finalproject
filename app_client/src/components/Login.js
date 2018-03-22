import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


class Login extends Component {
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
        axios.post("/auth/login", this.state)
        .then(resp => {
            console.log(resp);
            window.localStorage.setItem("token", resp.data.token)
            this.props.history.push("/");
        })
        .catch(err => {
            console.error(err);
        })
    }
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                    <h1> Please Login or <Link to={`/register`} style={{color:"blue"}}>Register</Link> to Continue</h1>
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

export default Login;
