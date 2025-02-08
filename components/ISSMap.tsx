"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { ISSMapProps } from "@/types";
import "leaflet/dist/leaflet.css";

const ISSIcon = L.icon({
  iconUrl: "/images/iss-icon.png",
  iconSize: [50, 50],
  iconAnchor: [25, 25],
});

export default function ISSMap({ issData }: Readonly<ISSMapProps>) {
  return (
    <MapContainer center={[issData.latitude, issData.longitude]} zoom={3}>
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
