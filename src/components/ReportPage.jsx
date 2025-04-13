import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../styles/swanik.css";

const markerIcon = new L.Icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function ReportPage() {
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    age: "",
    description: "",
    location: "",
    email: "",
    phone: "",
  });

  const [coordinates, setCoordinates] = useState({ lat: 20.5937, lon: 78.9629 });

  const fetchCoordinates = async (location) => {
    if (!location) return;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
      );
      const data = await response.json();
      if (data.length > 0) {
        setCoordinates({ lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) });
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (id === "location") {
      fetchCoordinates(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingReports = JSON.parse(localStorage.getItem("strayReports")) || [];
    existingReports.push({ ...formData, lat: coordinates.lat, lon: coordinates.lon });
    localStorage.setItem("strayReports", JSON.stringify(existingReports));
    alert("Stray Dog Reported!");

    setFormData({ name: "", sex: "", age: "", description: "", location: "", email: "", phone: "" });
  };

  function DraggableMarker() {
    const [position, setPosition] = useState([coordinates.lat, coordinates.lon]);

    const map = useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]); 
        setCoordinates({ lat: e.latlng.lat, lon: e.latlng.lng });
      },
    });

    return (
      <Marker
        position={position}
        icon={markerIcon}
        draggable={true}
        eventHandlers={{
          dragend: (e) => {
            const newCoords = e.target.getLatLng();
            setPosition([newCoords.lat, newCoords.lng]);
            setCoordinates({ lat: newCoords.lat, lon: newCoords.lng });
          },
        }}
      >
        <Popup>Drag me to adjust location</Popup>
      </Marker>
    );
  }

  return (
    <main className="report-page">
      <h1 className="h1report">REPORT A STRAY DOG</h1>
      <div className="formdiv">
        <form className="form-r" onSubmit={handleSubmit}>
          <label htmlFor="name" className="name-r">
            Name:
            <input id="name" className="name-inp long" type="text" value={formData.name} onChange={handleChange} placeholder="Enter name" required />
          </label>
          <label htmlFor="sex" className="sex-r">
            Sex:
            <input id="sex" className="sex-inp long" type="text" value={formData.sex} onChange={handleChange} placeholder="Enter sex" required />
          </label>
          <label htmlFor="age" className="age-r">
            Age (optional):
            <input id="age" className="age-inp long" type="text" value={formData.age} onChange={handleChange} placeholder="Enter age" />
          </label>
          <label htmlFor="description" className="desc-r">
            Description:
            <textarea id="description" className="desc-inp" rows="2" cols="10" value={formData.description} onChange={handleChange} placeholder="Enter details" required />
          </label>
          <label htmlFor="location" className="loc-r">
            Location:
            <input id="location" className="loc-inp" type="text" value={formData.location} onChange={handleChange} placeholder="Enter location" required />
          </label>

          <MapContainer center={[coordinates.lat, coordinates.lon]} zoom={15} style={{ height: "300px", width: "100%", marginTop: "10px" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <DraggableMarker />
          </MapContainer>

          <label htmlFor="email" className="email-r">
            Email ID:
            <input id="email" className="email-inp" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email ID" />
          </label>
          <label htmlFor="phone" className="phone-r">
            Phone No.:
            <input id="phone" className="phone-inp" type="number" value={formData.phone} onChange={handleChange} placeholder="Enter your phone no." required maxLength="10" />
          </label>
          <div className="submitb-r">
            <input className="submit-r" type="submit" value="Report" />
          </div>
        </form>
      </div>
    </main>
  );
}

export default ReportPage;