import React from "react";
import { Link } from "react-router-dom";
import "../styles/swanik.css";

function AdoptPage() {
  return (
    <main className="adoptcss">
      <h1 className="h1adopt">LOOK FOR STRAY DOGS</h1>
      <div className="settings">
        <div className="bx bx-filter" id="filter"></div>
        <p className="padopt">Filter</p>
      </div>
      <div className="cards">
        {[...Array(4)].map((_, index) => (
          <div className="card" key={index}>
            <img 
              src="https://png.pngtree.com/thumb_back/fh260/background/20240717/pngtree-stray-dogs-have-itching-on-their-front-feet-image_15879040.jpg" 
              alt="Stray Dog" className="imgadopt"
            />
            <div className="card-info">
              <div className="nameloc">
                <p className="padopt">Name</p>
                <p className="padopt">Location</p>
              </div>
              <div className="features">
                <p className="padopt">Report Time</p>
                <div className="viewsave">
                  <button className="buttonadopt">
                    <Link to="/ViewPage" className="linkadopt">View</Link>
                  </button>
                  <p className="alerting">Save</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AdoptPage;
