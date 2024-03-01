import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function Map() {

    const [markers, setMarkers] = useState([]);

    useEffect(() => {
    // Fetch live traffic data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/traffic');
        setMarkers(response.data);
      } catch (error) {
        console.error('Error fetching traffic data:', error);
      }
    };

    fetchData();

    // Set up polling (adjust the interval based on your needs)
    const interval = setInterval(fetchData, 5000);

    // Cleanup interval
    return () => clearInterval(interval);
  }, []);

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
        <Marker key={marker.id} position={marker.coordinates} />
      ))} */}
    </MapContainer>
    </div>
  )
}

export default Map
