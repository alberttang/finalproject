import React, { Component } from "react";
import { Link } from "react-router-dom";


class Jumbotron extends Component {
    render() {
        return (

            <div className="jumbotron jumbotron-fluid">
                    <h1 className="display-4" style={{ textAlign: "center" }}>These Martial Arts are great for competition:</h1>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/users/Brazilian Jiu-Jitsu`}>Brazilian Jiu-Jitsu</Link></button>
                            </div>
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/users/Judo`}>Judo</Link></button>
                            </div>
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/users/Karate`}>Karate</Link></button>
                            </div>
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/users/MMA`}>MMA</Link></button>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/users/Capoeira`}>Capoeira</Link></button>
                            </div>
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/users/Wrestling`}>Greco-Roman Wrestling</Link></button>
                            </div>
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/users/Kickboxing`}>Kickboxing</Link></button>
                            </div>
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/users/Krav Maga`}>Krav Maga</Link></button>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/users/Taekwondo`}>Taekwondo</Link></button>
                            </div>
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/users/Muay Thai`}>Muay Thai</Link></button>
                            </div>
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/users/Wing Chun`}>Wing Chun</Link></button>
                            </div>
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/users/Boxing`}>Boxing</Link></button>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                    <div class="col-md">
                    </div>

</div>
                    <div class="row">
                        <div class="col-md">
                            <div style={{ textAlign: "center"}}>
                            <p>Already know what you want?</p>

                                <div class="dropdown" style={{ textAlign: "center" }}>
                                
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        View All
</button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="/users/judo">Judo</a>
                                        <a className="dropdown-item" href="/users/karate">Karate</a>
                                        <a className="dropdown-item" href="/users/Boxing">Boxing</a>
                                    </div>
                                </div>
                            </div>    </div>
                    </div>
                </div>

        )
    }
}

export default Jumbotron;