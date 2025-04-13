import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../styles/swanik.css";

const markerIcon = new L.Icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function ViewPage() {
  const location = useLocation();
  const dog = location.state;

  if (!dog) {
    return <p>No dog details available.</p>;
  }

  return (
    <main>
      <Link to="/AdoptPage" className="back">
        <div className="bx bx-chevron-left" id="back-icon"></div>
      </Link>

      <div className="main-div">
        <div className="imgdiv">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20240717/pngtree-stray-dogs-have-itching-on-their-front-feet-image_15879040.jpg"
            className="imgs"
            alt="Stray Dog"
          />
        </div>

        <div className="infodiv">
          <h1 className="h1s">About</h1>
          <p className="ps">{dog.description || "No description available"}</p>
        </div>

        <div className="detaildiv">
          <div className="detail">
            <h2 className="h2s">Name</h2>
            <h2 className="h2s">Sex</h2>
            <h2 className="h2s">Age</h2>
            <h2 className="h2s">Location</h2>
            <h2 className="h2s">E-Mail</h2>
            <h2 className="h2s">Phone</h2>
          </div>

          <div className="sinfo">
            <p className="p2s">{dog.name}</p>
            <p className="p2s">{dog.sex}</p>
            <p className="p2s">{dog.age || "No age available"}</p>
            <p className="p2s">{dog.location}</p>
            <p className="p2s">{dog.email || "No email ID available"}</p>
            <p className="p2s">{dog.phone}</p>
          </div>
        </div>

        <MapContainer
  center={[dog.lat, dog.lon]}
  zoom={15}
  style={{
    height: "300px",
    width: "80%",
    marginTop: "20px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }}
>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <Marker position={[dog.lat, dog.lon]} icon={markerIcon}>
    <Popup>{dog.location}</Popup>
  </Marker>
</MapContainer>


        <div className="buttondiv">
          <button className="buttons">Save</button>
        </div>
      </div>
    </main>
  );
}

export default ViewPage;