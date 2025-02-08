"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the ISSMap component with SSR disabled
const ISSMap = dynamic(() => import("./ISSMap"), { ssr: false });

interface ISSData {
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
  visibility: string;
  timestamp: number;
}

export default function ISSTracker() {
  const [issData, setISSData] = useState<ISSData | null>(null);

  useEffect(() => {
    const fetchISSData = async () => {
      try {
        const response = await fetch(
          "https://api.wheretheiss.at/v1/satellites/25544"
        );
        const data = await response.json();
        setISSData({
          latitude: Number.parseFloat(data.latitude),
          longitude: Number.parseFloat(data.longitude),
          altitude: Number.parseFloat(data.altitude),
          velocity: Number.parseFloat(data.velocity),
          visibility: data.visibility,
          timestamp: data.timestamp,
        });
      } catch (error) {
        console.error("Error fetching ISS data:", error);
      }
    };

    fetchISSData();
    const interval = setInterval(fetchISSData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (!issData) {
    return <div>Loading ISS data...</div>;
  }

  return (
    <div className="w-full max-w-4xl">
      {/* Dynamically loaded map component */}
      <ISSMap issData={issData} />
      
      <div className="mt-4 p-4 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-2">ISS Information</h2>
        <p>Latitude: {issData.latitude.toFixed(4)}</p>
        <p>Longitude: {issData.longitude.toFixed(4)}</p>
        <p>Timestamp: {new Date(issData.timestamp * 1000).toLocaleString()}</p>
        <p>Altitude: {issData.altitude.toFixed(4)}</p>
        <p>Velocity: {issData.velocity.toFixed(4)}</p>
        <p>Visibility: {issData.visibility}</p>
      </div>
    </div>
  );
}