import React, { Component } from 'react';
import axios from "axios";
import Quiz from "./Quiz";
import Map from "./Map";
import Question from './quiz/Questions';
import QuizComponent from "./quiz/QuizQuestions";
import HomeBody from "./HomeBody";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

// import GoogleMap from "./maps/GoogleMap";

class Home extends Component {
    getBackendProtectedData() {
        axios({
            url: "/api",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("token")
            }
        })
        .then(resp => {
            console.log(resp);
        })
        .catch(err => {
            console.error(err);
        })
    }
  render() {
    this.getBackendProtectedData();
    return (
      <div>
          <Jumbotron/>
      </div>
    );
  }
}

export default Home;
