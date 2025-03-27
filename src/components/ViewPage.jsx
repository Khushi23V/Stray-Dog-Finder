import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/swanik.css";

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
            <p className="p2s">{dog.age}</p>
            <p className="p2s">{dog.location }</p>
            <p className="p2s">{dog.email}</p>
            <p className="p2s">{dog.phone}</p>
          </div>
        </div>

        <div className="buttondiv">
          <button className="buttons">Save</button>
        </div>
      </div>
    </main>
  );
}

export default ViewPage;
