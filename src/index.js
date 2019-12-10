import React from "react";
import ReactDOM from "react-dom";
import Map from "./Map";
import places from "./places.json";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Map
    center={{ lat: 40.6451594, lng: -74.0850826 }}
    zoom={10}
    places={places}
  />,
  rootElement
);
