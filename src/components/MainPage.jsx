import React from "react";
import { Link } from "react-router-dom";
import "../styles/swanik.css"; 

function MainPage() {

  return (
    <main className="mainpage">
      <div className="minfo">
        <div className="logo">
          <img  className="paw" src="https://cdn.pixabay.com/photo/2013/07/13/01/13/paw-155322_640.png" alt="Paw Logo"/>
          <h1 className="ptitle">SwaNik</h1>
        </div>
        <div className="button">
          <button>
            <Link to="/HomePage">WELCOME</Link>
          </button>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
