import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/swanik.css";

function AdoptPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const storedReports = JSON.parse(localStorage.getItem("strayReports")) || [];
    setReports(storedReports);
  }, []);

  return (
    <main className="adoptcss">
      <h1 className="h1adopt">LOOK FOR STRAY DOGS</h1>
      <div className="settings">
        <div className="bx bx-filter" id="filter"></div>
        <p className="padopt">Filter</p>
      </div>
      <div className="cards">
        {reports.length > 0 ? (
          reports.map((dog, index) => (
            <div className="card" key={index}>
              <img 
                src="https://png.pngtree.com/thumb_back/fh260/background/20240717/pngtree-stray-dogs-have-itching-on-their-front-feet-image_15879040.jpg" 
                alt="Stray Dog" className="imgadopt"
              />
              <div className="card-info">
                <div className="nameloc">
                  <p className="padopt">Name: {dog.name}</p>
                  <p className="padopt">Location: {dog.location}</p>
                </div>
                <div className="features">
                  <div className="viewsave">
                    <button className="buttonadopt">
                    <Link to="/ViewPage" state={dog} className="linkadopt">View</Link>
                    </button>
                    <p className="alerting">Save</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No stray dogs reported yet.</p>
        )}
      </div>
    </main>
  );
}

export default AdoptPage;
