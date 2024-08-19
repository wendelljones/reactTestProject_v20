import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './maps.css';

function GoogleMapFor20() {
    return (
        <div className="map">
        <LoadScript googleMapsApiKey="AIzaSyA_V4J1t09TrGyClkuYzvENZvJoba15i2c">
            <GoogleMap
                mapContainerStyle={{ width: '75%', height: '450px', margin: '20px', border: '2px solid #500000', borderRadius: '15px' }}
                center={{ lat: 33.028561, lng: -96.674291 }}
                zoom={8}
                >
                </GoogleMap>
        </LoadScript>
        </div>
    )
}

export default GoogleMapFor20;