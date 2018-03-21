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



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
     counter: 0,
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     answersCount: {
       nintendo: 0,
       microsoft: 0,
       sony: 0
     },
     result: ''
    };
  }
  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));  

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <Router>
          <div>
            <Route exact path="/"  component={Home}/>
            <ProtectedRoute exact path="/results"  component={Results}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register}/>
            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
