import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/swanik.css";

export default function HomePage() {
  const [isMenuShowing, setIsMenuShowing] = useState(false);

  const toggleMenu = () => {
    setIsMenuShowing((prev) => !prev);
  };

  return (
    <>
      <header className="head">
        <div className="navbar">
        <h1 className="hlogot">SwaNik</h1>
          <Link to="/home">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/01/13/paw-155322_640.png"
              className="pawlogo"
              alt="Logo"
            />
          </Link>
          <div
            className={`bx bx-menu ${isMenuShowing ? "bx-x" : ""}`}
            id="menu-icon"
            onClick={toggleMenu}
          ></div>
        </div>
      </header>

      <main className="info">
        <div className="report-section">
          <h1 className="htitle">REPORT</h1>
          <div className="report-info">
            <img
              src="https://t4.ftcdn.net/jpg/06/96/91/05/360_F_696910506_Nz7jzTSBy0HJIT2A85nmJB1orx7PZDRP.jpg"
              alt="Report Stray"
            />
            <div className="report-desc">
              <h1 className="htitle">Spot a stray dog in your neighborhood?</h1>
              <button>
                <Link to="/report">Report</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="adopt-section">
          <h1 className="htitle">ADOPT</h1>
          <div className="adopt-info">
            <img
              src="https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-cute-cartoon-happy-dog-png-file-png-image_10201724.png"
              alt="Adopt a Dog"
            />
            <div className="adopt-desc">
              <h1 className="htitle">Wish to provide a loving home to a dog?</h1>
              <button>
                <Link to="/adopt">Adopt</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="volunteer-section">
          <h1 className="htitle">VOLUNTEER</h1>
          <p id="c">Wish to volunteer for our mission?</p>
          <div className="volunteer-info">
            <p>
              <Link to="/info" id="a">
                Learn More
              </Link>
            </p>
            <p>
              <Link to="/signup" id="b">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        <nav className="navlist" style={{ display: isMenuShowing ? "block" : "none" }}>
          <p>What Can You Do?</p>
          <ul>
            <li>
              <Link to="/report">Report a Stray</Link>
            </li>
            <li>
              <Link to="/adopt">Adopt a Stray</Link>
            </li>
            <li>
              <Link to="/info">Volunteer</Link>
            </li>
          </ul>
          <p>Profile</p>
          <ul>
            <li>
              <Link to="/saved">View Saved Posts</Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
