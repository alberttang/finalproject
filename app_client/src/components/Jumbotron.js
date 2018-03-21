import React, {Component} from "react";

class Jumbotron extends Component {
    render() {
        return(

            <div className="jumbotron jumbotron-fluid">
            <div className="container-fluid">
              <h1 className="display-4" style={{ textAlign:"center"}}>Find Your New Skill - Build Your Profile</h1>
              <p className="lead" style={{ textAlign:"center"}}>What do you want to learn?</p>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3 col-xs-3">
                    <button type="button" className="btn btn-lg btn-info"><a href="/users/fitness">Fitness</a></button>
                  </div>
                  <div className="col-md-2 col-xs-3">
                    <button type="button" className="btn btn-lg btn-info">Weightloss</button>
                  </div>
                  <div className="col-md-2 col-xs-3">
                    <button type="button" className="btn btn-lg btn-info">Agility</button>
                  </div>
                  <div className="col-md-2 col-xs-3">
                    <button type="button" className="btn btn-lg btn-info">Competition</button>
                  </div>
                  <div className="col-md-3 col-xs-3">
                    <button type="button" className="btn btn-lg btn-info">Weapons</button>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3 col-xs-3">
                    <button type="button" className="btn btn-lg btn-info">Self Defense</button>
                  </div>
                  <div className="col-md-2 col-xs-3">
                    <button type="button" className="btn btn-lg btn-info">Strength</button>
                  </div>
                  <div className="col-md-2 col-xs-3">
                    <button type="button" className="btn btn-lg btn-info">Stress-Relief</button>
                  </div>
                  <div className="col-md-2 col-xs-3">
                    <button type="button" className="btn btn-lg btn-info">Flexibility</button>
                  </div>
                  <div className="col-md-3 col-xs-3">
                    <button type="button" className="btn btn-lg btn-dark">All of the Above</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        )
    }
}

export default Jumbotron;