import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "50%",
  height: "500px",
  margin: "0 auto",
  display: "block",
  marginTop: "50px",
};

const center = {
  lat: 35.82539,
  lng: 10.63699,
};

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const [markerPosition, setMarkerPosition] = useState(center);

  if (!isLoaded) return <></>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={8}
        center={center}
        onClick={(e) => {
          setMarkerPosition({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          });
        }}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </div>
  );
}

export default App;
