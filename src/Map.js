import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map() {

    const [markers, setMarkers] = useState([]);

    useEffect(() => {
    // Fetch live traffic data from the JSON file
    const fetchData = async () => {
      try {
        const response = await axios.get('cities.json');
        setMarkers(response.data);
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchData();


    const interval = setInterval(() => {
      setMarkers((prevMarkers) =>
        prevMarkers.map((marker) => ({
          ...marker,
          visible: !marker.visible, // Toggle visibility
        }))
      );
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // console.log(markers);

  return (
    <div className='map-container'>
    <MapContainer
      center={[20.5937, 78.9629]} // India's coordinates
      zoom={5}
      style={{ height: '500px', width: '1000px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* {markers.map((marker) => (
        <Marker key={marker.id} position={[marker.latitude, marker.longitude]}>
          <Popup>{marker.name}</Popup>
        </Marker>
      ))} */}
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={[marker.latitude, marker.longitude]}
          opacity={marker.visible ? 1 : 0} // Set opacity based on visibility
        >
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  )
}

export default Map
