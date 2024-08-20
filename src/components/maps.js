import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './maps.css';

function GoogleMapFor20() {
    const [selected, setSelected] = useState(null);

    const locations = [
        { lat: 37.818330,  lng: -122.478500, name: "Golden Gate Bridge" },
        { lat: 33.028561,  lng: -96.674291, name: "Location 2" },
    ];

    return (
        <div className="mapDiv">
        <LoadScript googleMapsApiKey="AIzaSyA_V4J1t09TrGyClkuYzvENZvJoba15i2c">
            <GoogleMap 
                mapContainerStyle={{ width: '100%', height: '450px', margin: '0px', border: '2px solid #500000', borderRadius: '15px' }}
                center={{ lat: 37.818330, lng: -122.478500 }}
                zoom={9}
                >
                    {locations.map((location, i) => (
                        <Marker
                            key={i}
                            position={{ lat: location.lat, lng: location.lng }}
                            onClick={() => setSelected(location)}
                        />
                    ))}

                    {selected && (
                        <InfoWindow
                            position={{ lat: selected.lat, lng: selected.lng }}
                            onCloseClick={() => setSelected(null)}
                        >
                            <div className="locationCallout">
                                <img className="calloutImg" src="./images/goldenGate_300x169.jpg" alt="Golden Gate Bridge" />
                                <h4>{selected.name}</h4>
                                <p>Famed 4,200 ft art deco suspension bridge open to car, bike & foot traffic.</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
        </LoadScript>
        </div>
    )
}

export default GoogleMapFor20;