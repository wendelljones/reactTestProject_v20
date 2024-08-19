import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './maps.css';

function GoogleMapFor20() {
    const [selected, setSelected] = useState(null);

    const locations = [
        { lat: 37.818330,  lng: -122.478500, name: "Location 1" },
        { lat: 33.028561,  lng: -96.674291, name: "Location 2" },
    ];

    return (
        <div className="map">
        <LoadScript googleMapsApiKey="AIzaSyA_V4J1t09TrGyClkuYzvENZvJoba15i2c">
            <GoogleMap
                mapContainerStyle={{ width: '75%', height: '450px', margin: '20px', border: '2px solid #500000', borderRadius: '15px' }}
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
                            <div>
                                <h4>{selected.name}</h4>
                                <p>Details about this location.</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
        </LoadScript>
        </div>
    )
}

export default GoogleMapFor20;