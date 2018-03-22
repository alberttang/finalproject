import React, {Component} from "react";

class Map extends Component {


    render() {

        const MY_API = 'AIzaSyBv2xBR-nJ3gso-Er5TV9RBhMBWNeuZYRU';
        let martialArt = "martial art schools"
        let location = "me"
        let _url = `https://www.google.com/maps/embed/v1/search?key=${MY_API}&q=${martialArt}+near+${location}&zoom=12`


        
        return(<div>
            <h1 style={{ textAlign: "center" }}> Martial Arts Schools Nearby</h1>
           <iframe
           frameBorder="0" style={{ width: "100%", height: "450px"}} 
            src={_url} allowfullscreen>
            </iframe>
        </div>
        )
    }
}

export default Map;