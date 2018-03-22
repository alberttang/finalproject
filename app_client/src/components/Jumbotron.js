import React, { Component } from "react";
import { Link } from "react-router-dom";


class Jumbotron extends Component {
    render() {
        return (

            <div className="jumbotron jumbotron-fluid">
                    <h1 className="display-4" style={{ textAlign: "center" }}>Find the right Martial Arts For You</h1>
                    <p className="lead" style={{ textAlign: "center" }}>What would you like to learn?</p>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/compete`}>Learn To Compete</Link></button>
                            </div>
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/selfdefense`}>Self-Defense</Link></button>
                            </div>
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/fitness`}>Physical Fitness</Link></button>
                            </div>
                            <div className="col-md-3 col-xs-3">
                                <button type="button" className="btn btn-lg btn-info"><Link to={`/stress`}>Stress Relief</Link></button>
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
                                        <a className="dropdown-item" href="/users/Judo">Judo</a>
                                        <a className="dropdown-item" href="/users/Karate">Karate</a>
                                        <a className="dropdown-item" href="/users/Aikido">Aikido</a>
                                        <a className="dropdown-item" href="/users/Boxing">Boxing</a>
                                        <a className="dropdown-item" href="/users/Brazilian Jiu-Jitsu">Brazilian Jiu-Jitsu</a>
                                        <a className="dropdown-item" href="/users/Capoeira">Capoeira</a>
                                        <a className="dropdown-item" href="/users/Eskrima">Eskrima</a>
                                        <a className="dropdown-item" href="/users/Wrestling">Greco-Roman Wrestling</a>
                                        <a className="dropdown-item" href="/users/Kendo">Kendo</a>
                                        <a className="dropdown-item" href="/users/Kickboxing">Kickboxing</a>
                                        <a className="dropdown-item" href="/users/Krav Maga">Krav Maga</a>
                                        <a className="dropdown-item" href="/users/Kung Fu">Kung Fu</a>
                                        <a className="dropdown-item" href="/users/Muay Thai">Muay Thai</a>
                                        <a className="dropdown-item" href="/users/Taekwondo">Taekwondo</a>
                                        <a className="dropdown-item" href="/users/Wing Chun">Wing Chun</a>
                                        <a className="dropdown-item" href="/users/MMA">MMA</a>


                                    </div>
                                </div>
                            </div>    </div>
                    </div>
                </div>

        )
    }
}

export default Jumbotron;