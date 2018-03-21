import React, {Component} from "react";

class HomeBody extends Component {
    render() {
        return(<div>
            <div>
            <div className="jumbotron jumbotron-fluid">
            <div className="container-fluid">
              <h1 className="display-4" > Find Your New Skill - Build Your Profile </h1>
              <p className="lead" >What do you want to learn?</p>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3 col-xs-3">
                    <button type="button" className="btn btn-lg btn-info">Fitness</button>
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
        
          <div className="card" >
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        
          <section id="footer">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                  <p> This is your footer stuff and you can put whatever you want here</p>
                  <p className="h6">copy All right Reversed.
                    <a className="text-green ml-2" href="#" target="_blank">Albert Tang</a>
                  </p>
                </div>
              </div>
            </div>
          </section>
    </div>    
        </div>
        )
    }
}

export default HomeBody;


