import React from "react";
import { Link } from "react-router-dom";
import "../styles/swanik.css";


function ViewPage(){
    return(
        <main>
      <Link to="/" className="back">
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
          <p className="ps">Brown eyes, light brown fur</p>
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
            <p className="p2s">Pluto</p>
            <p className="p2s">Male</p>
            <p className="p2s">8 months</p>
            <p className="p2s">New Delhi, 110067</p>
            <p className="p2s">xyz@gmail.com</p>
            <p className="p2s">9912345678</p>
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