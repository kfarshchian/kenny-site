import React from 'react';
import './map.scss'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'


function Map() {
  

  return (
    <>
  <MapContainer  center={[41.075105, -111.974193]} zoom={13} scrollWheelZoom={false}>
  {/* <div className='info-map'>
    Kenny Farshchian Utah Mortgage
            </div> */}
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[41.075105, -111.974193]}>
    </Marker>
  </MapContainer>

      
    </>
  );
}

export default Map;
