import React from 'react';
import { MapContainer, TileLayer, Popup, Polyline } from 'react-leaflet';
export const Map = (props: any) => {
  return (
    <MapContainer
      style={{
        height: '500px',
        width: '100%',
      }}
      center={props.activityPositions[0]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <Polyline positions={props.activityPositions}>
        <Popup>
          <div>
            <h2>{'Name: ' + props.activityName}</h2>
            {/* <p>{'Total Elevation Gain: ' + props.activityElevation}</p> */}
          </div>
        </Popup>
      </Polyline>
    </MapContainer>
  );
};
