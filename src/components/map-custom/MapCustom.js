import React from 'react'
import Button from "devextreme-react/button";
import Map from "devextreme-react/map";
import notify from 'devextreme/ui/notify';
// import { Button } from 'devextreme-react';

const centerCoordinates = { lat: 40.749825, lng: -73.987963 };
const mapMarkers = [{
    location: "Brooklyn Bridge,New York,NY",
    tooltip: {
        text: "Brooklyn Bridge",
        isShown: true
    }
    }, 
{ 
    location: "40.058435, -74.903842",
    onClick: () => {
        notify("The marker is clicked!", "info", 1000);
    }
}];

const MapStyle = {
    hight: 500,
    width: 1170
};

const ApiKeys = {
    google: "AIzaSyD7sTwFhoFapMZASmRssVnDmTg7eG9SOy4"
}

class MapCustom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapMarkers: [],
            tmpMarkers:[]
        };
        this.addMarker = this.addMarker.bind(this);
        this.markerAdded = this.markerAdded.bind(this);
    }

    addMarker(e) {
        this.setState({ tmpMarkers: this.state.mapMarkers });
        let marker = { location: e.location };
        this.setState({mapMarkers: [marker]});
    }

    markerAdded(e) {
        console.log(e);

    }

    render(){
        return (
            <React.Fragment>
            <Map
                height={MapStyle.hight} 
                width={MapStyle.width}
                controls={true}
                provider={'bing'} 
                defaultZoom={10}
                markers={this.state.mapMarkers}
                onClick={this.addMarker}
                onMarkerAdded={this.markerAdded}
            />
            <div>
            <Button
                stylingMode={'outlined'}
                type={'normal'}
            >
                Создать объект
            </Button>
            </div>
            </React.Fragment>
        );
    }
}

export default MapCustom;
