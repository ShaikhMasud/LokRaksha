import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';

// Fix icon paths for Leaflet
const fixLeafletIcon = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/leaflet/marker-icon-2x.png',
    iconUrl: '/leaflet/marker-icon.png',
    shadowUrl: '/leaflet/marker-shadow.png',
  });
};

// Custom alert icon
const alertIcon = L.icon({
  iconUrl: '/leaflet/alert-icon.png', // You'll need to create this icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

interface CrimeHotspot {
  id: string;
  latitude: number;
  longitude: number;
  crimeType: string;
  intensity: number;
}

interface AlertLocation {
  name: string;
  latitude: number;
  longitude: number;
  alertLevel: 'high' | 'medium' | 'low';
  description: string;
}

const CrimeHotspotMap: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const [hotspots, setHotspots] = useState<CrimeHotspot[]>([]);
  const heatLayerRef = useRef<L.Layer | null>(null);

  // Maharashtra alert locations
  const alertLocations: AlertLocation[] = [
    { name: "Mumbai", latitude: 19.0760, longitude: 72.8777, alertLevel: "high", description: "High crime rates in specific areas. Exercise caution." },
    { name: "Thane", latitude: 19.2183, longitude: 72.9781, alertLevel: "medium", description: "Moderate criminal activity reported recently." },
    { name: "Pune", latitude: 18.5204, longitude: 73.8567, alertLevel: "high", description: "Several theft incidents reported in the last week." },
    { name: "Nagpur", latitude: 21.1458, longitude: 79.0882, alertLevel: "medium", description: "Increasing vehicle theft cases in certain areas." },
    { name: "Nashik", latitude: 19.9975, longitude: 73.7898, alertLevel: "low", description: "Minor incidents reported, general vigilance advised." },
    { name: "Aurangabad", latitude: 19.8762, longitude: 75.3433, alertLevel: "medium", description: "Recent spike in property-related crimes." }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && !mapRef.current && mapContainer.current) {
      fixLeafletIcon();

      // Initialize map
      mapRef.current = L.map(mapContainer.current).setView([19.7515, 75.7139], 7);

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      addAlertLocations();
      fetchHotspots();
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const addAlertLocations = () => {
    if (!mapRef.current) return;

    alertLocations.forEach(location => {
      const markerColor =
        location.alertLevel === 'high' ? 'red' :
        location.alertLevel === 'medium' ? 'orange' : 'yellow';

      const alertMarker = L.circleMarker([location.latitude, location.longitude], {
        radius: 12,
        fillColor: markerColor,
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      }).addTo(mapRef.current!);
      // Add pulsing effect
      const pulseClass = `pulse-${location.alertLevel}`;

      alertMarker.on('add', () => {
        const markerElement = document.querySelector(`.leaflet-marker-icon`) as HTMLElement;
        if (markerElement) {
          markerElement.classList.add(pulseClass);
        }
      });

      alertMarker.bindPopup(`
        <div class="alert-popup">
          <h3>${location.name}</h3>
          <p><strong>Alert Level:</strong> ${location.alertLevel.toUpperCase()}</p>
          <p>${location.description}</p>
          <button class="view-details-btn">View Crime Details</button>
        </div>
      `);
    });
  };

  const fetchHotspots = async () => {
    try {
      const response = await fetch('/api/crime-hotspots');
      const data = await response.json();
      setHotspots(data.hotspots);
      updateHeatmap(data.hotspots);
    } catch (error) {
      console.error('Error fetching crime hotspots:', error);
    }
  };

  const updateHeatmap = (hotspots: CrimeHotspot[]) => {
    if (!mapRef.current) return;

    if (heatLayerRef.current) {
      mapRef.current.removeLayer(heatLayerRef.current);
    }

    const heatData = hotspots.map(spot => [
      spot.latitude,
      spot.longitude,
      spot.intensity / 10
    ]);

    heatLayerRef.current = (L as any).heatLayer(heatData, {
      radius: 15,
      blur: 10,
      maxZoom: 17,
      gradient: {
        0.0: 'blue',
        0.2: 'cyan',
        0.4: 'lime',
        0.6: 'yellow',
        0.8: 'orange',
        1.0: 'red'
      }
    }).addTo(mapRef.current);
  };

  return (
    <div>
      <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />
      <style jsx global>{`
        .pulse-high { animation: pulse-animation 2s infinite; }
        .pulse-medium { animation: pulse-animation 3s infinite; }
        .pulse-low { animation: pulse-animation 4s infinite; }
        
        @keyframes pulse-animation {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
          100% { opacity: 1; transform: scale(1); }
        }

        .alert-popup h3 { font-size: 16px; font-weight: bold; }
        .view-details-btn { background-color: #1d4ed8; color: white; border: none; padding: 5px; cursor: pointer; }
      `}</style>
    </div>
  );
};

export default CrimeHotspotMap;
