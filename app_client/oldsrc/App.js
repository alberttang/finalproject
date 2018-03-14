import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from "./components/Navbar";

// Employee Components
import EmployeeHome from './components/employees/EmployeeHome';
import EmployeeAdd from './components/employees/EmployeeAdd';
import EmployeeEdit from './components/employees/EmployeeEdit';
import EmployeeView from './components/employees/EmployeeView';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path ="/" component={Home} />
            <Route exact path ="/employees" component={EmployeeHome}/>
            <Route exact path ="/employees/add" component={EmployeeAdd}/>
            <Route exact path ="/employees/edit/:id" component={EmployeeEdit}/>
            <Route exact path ="/employees/view/:id" component={EmployeeView}/>
            {/* footer goes here */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
