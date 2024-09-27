import React, {useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer , useMap} from 'react-leaflet';
import L from 'leaflet';

// Custom hook to center the map when marker location changes
const CenterMap = ({ position }) => {
    const map = useMap();
    // Automatically fly to the marker's position when it changes
    map.flyTo(position, map.getZoom());
    return null;
};

const customIcon = L.icon({
    iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',  // Path to your custom icon
    iconSize: [32, 32],  // Size of the icon [width, height]
    iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
});

const Map = ({ places }) => {

    const [center , setCenter] = useState([40.7128, -74.0060]); // Center coordinates (e.g., New York City)

    useEffect(() => {
        if(places.length > 0)  console.log("dfdf",[places[0]?.location.lat, places[0]?.location.lng]);
        if(places.length > 0) setCenter([places[0]?.location.lat, places[0]?.location.lng])
    }, [places]);

    return (
        <MapContainer center={center} zoom={10} style={{ minheight: '100vh',height:'100%', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Add markers from the places array */}
            {places.map((place, index) => (
                <Marker
                    key={index}
                    position={[place.location.lat, place.location.lng]}
                    icon={customIcon} // Set custom icon for each marker
                >
                    <Popup>
                        {place.name}
                    </Popup>
                </Marker>
            ))}
            <CenterMap position={center} />
        </MapContainer>
    );

};

export default Map;