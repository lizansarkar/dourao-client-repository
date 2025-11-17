import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { FaSearch } from "react-icons/fa";

export default function Coverage() {
  const position = [23.8103, 90.4125];
  const serviceCenters = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCenters, setFilteredCenters] = useState(serviceCenters);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = serviceCenters.filter((center) =>
      center.district.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCenters(filtered);
  };

  return (
    <div className="section">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary text-center">
        We are available in 64 districts
      </h1>

      {/* search option */}
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center my-8"
      >
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:border-primary shadow-sm"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-6 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition"
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </div>
      </form>

      <p className="text-center text-gray-600 mb-8">
        We deliver almost all over Bangladesh
      </p>

      {/* map container */}
      <div className="container w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] z-0">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={true}
          className="w-full h-full rounded-3xl shadow-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> Service Area:{" "}
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
