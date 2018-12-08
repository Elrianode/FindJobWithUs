import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { default as MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import MarkerCustom from "./Marker";
import data from "./marker.json"

const Map = withScriptjs(withGoogleMap((props) => {
  const markers = data.map(marker => <MarkerCustom
    location={{ lat: marker.lat, lng: marker.lng }}
    //label={marker.label}
    icon={marker.icon}
    name={marker.name}
    defaultTitle={marker.defaultTitle}
    img={marker.img}
    address={marker.address}
    infomation={marker.infomation}
    phoneNumber={marker.phoneNumber}
    website={marker.website}
  />);

  return (
    <GoogleMap
      defaultZoom={12}
      center={{ lat: 21.027764, lng: 105.83416 }}
    >
      <MarkerClusterer
        onClick={props.onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={60} >
        {markers}
      </MarkerClusterer>
    </GoogleMap>
  );
}
))
export default Map;