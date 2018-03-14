import React, { Component } from 'react';
import axios from "axios";
import Quiz from "./Quiz";
import Map from "./Map";
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
      <div className="container">
       Home
       <div className="row">
            <div className="col-xs-6 col-sm-4"></div>
            <div className="col-xs-6 col-sm-4"><Quiz/></div>
            <div className="clearfix visible-xs-block"></div>
            <div className="col-xs-6 col-sm-4"></div>
       </div>
       <div className="row">
            <Map />
        </div>
      </div>
    );
  }
}

export default Home;
