import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Nav from "./components/Navbar";
import Results from "./components/Results";
import quizQuestions from './components/api/quizQuestions';
import update from 'react-addons-update';
import Quiz from "./components/quiz/QuizBox";
import Result from "./components/quiz/Result";
import Footer from "./components/Footer";




class App extends Component {

  
  render() {
    return (
      <div>
        <Nav />
        
      <div className="row">
        <Router>
          <div>
            <Route exact path="/"  component={Home}/>
            <ProtectedRoute exact path="/results"  component={Results}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register}/>
            
          </div>
        </Router>
        </div>
        <Footer />
        </div>
    );
  }
}

export default App;
