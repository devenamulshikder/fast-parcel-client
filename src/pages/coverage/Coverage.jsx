import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useLoaderData } from "react-router";
import { useRef, useState, useEffect } from "react";

// Custom smaller icon
const smallIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [20, 30],
  iconAnchor: [10, 30],
  popupAnchor: [0, -30],
  shadowSize: [30, 30],
});

// Custom component to control map movement
const MapMover = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, 10); // zoom in
    }
  }, [position, map]);
  return null;
};

export const Coverage = () => {
  const bangladeshCenter = [23.685, 90.3563];
  const districtData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(null);

  // Store refs for all markers
  const markerRefs = useRef({});

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    const matched = districtData.find((d) =>
      d.district.toLowerCase().includes(input.toLowerCase())
    );

    if (matched) {
      setSelectedPosition([matched.latitude, matched.longitude]);

      // Open the popup after slight delay (to allow map to zoom first)
      setTimeout(() => {
        const ref = markerRefs.current[matched.district];
        if (ref) {
          ref.openPopup();
        }
      }, 400);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">
        We are available in 64 districts.
      </h2>

      <div className="my-6 md:my-8">
        <input
          type="text"
          placeholder="Search district..."
          className="input input-bordered bg-gray-200 rounded-xl border border-gray-300 w-full max-w-md block mx-auto"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-md mb-10">
        <MapContainer
          center={bangladeshCenter}
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* move the map when a match is found */}
          <MapMover position={selectedPosition} />

          {districtData.map((district, index) => (
            <Marker
              key={index}
              position={[district.latitude, district.longitude]}
              icon={smallIcon}
              ref={(ref) => {
                if (ref) markerRefs.current[district.district] = ref;
              }}
            >
              <Popup>
                <strong>{district.district}</strong>
                <br />
                Region: {district.region}
                <br />
                Covered Areas: {district.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};
