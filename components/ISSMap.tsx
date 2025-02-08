"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface ISSData {
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
  visibility: string;
  timestamp: number;
}

interface ISSMapProps {
  issData: ISSData;
}

const ISSIcon = L.icon({
  iconUrl: "/images/iss-icon.png",
  iconSize: [50, 50],
  iconAnchor: [25, 25],
});

export default function ISSMap({ issData }: ISSMapProps) {
  return (
    <MapContainer
      center={[issData.latitude, issData.longitude]}
      zoom={3}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[issData.latitude, issData.longitude]} icon={ISSIcon}>
        <Popup>
          ISS Location
          <br />
          Latitude: {issData.latitude.toFixed(4)}
          <br />
          Longitude: {issData.longitude.toFixed(4)}
          <br />
          Altitude: {issData.altitude.toFixed(4)}
          <br />
          Velocity: {issData.velocity.toFixed(4)}
          <br />
          Visibility: {issData.visibility}
        </Popup>
      </Marker>
    </MapContainer>
  );
}