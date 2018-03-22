import React, {Component} from "react";
import { Link } from "react-router-dom";


class Signup extends Component {


    render() {

        const MY_API = 'AIzaSyBv2xBR-nJ3gso-Er5TV9RBhMBWNeuZYRU';
        let martialArt = this.props.match.params.id
        let location = ""
        let _url = `https://www.google.com/maps/embed/v1/search?key=${MY_API}&q="${martialArt}"+schools+near+${location}&zoom=11`

        
        
        return(<div>
            <h1 style={{  margin: "20px"
}}>{`Here are some ${martialArt} Schools in your area: `} </h1>
           <iframe
           frameBorder="0" style={{ width: "100%", height: "450px"}} 
            src={_url} allowfullscreen>
            </iframe>
            <button type="button" className="btn btn-lg btn-info"><Link to={`/`}>Search Again</Link></button>

        </div>
        )
    }
}

export default Signup;
