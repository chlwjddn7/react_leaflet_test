import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../../resources/css/leaflet/leaflet1.8.0.css';

class Maps extends Component {
    constructor() {
        super();
        this.state = {
            lat: 36.4209398001854,
            lng: 128.379045076992,
            zoom: 11
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];

        return (
            <div>
                <MapContainer style={{width:'100%', height:'100vh'}} center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://api.vworld.kr/req/wmts/1.0.0/49ACBC96-8A7F-3D0A-8973-5B5C35C5BF96/Base/{z}/{y}/{x}.png'
                    />
                </MapContainer>

            </div>

        )
    }
}

export default Maps;