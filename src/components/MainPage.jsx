import React from "react";
import { Link } from "react-router-dom";
import "../styles/swanik.css"; 

function MainPage() {
  return (
    <div className="landing-container">
      <header className="header-m">
        <div className="logo-m">🐾 <span className="bold">Swa</span>Nik</div>
        <p className="subtitle">
          Connecting hearts and paws – Help us find loving homes for stray dogs in need
        </p>
        <a
          href="https://forms.gle/dcnBM4atvns9Ybdy5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="waitlist-btn">Join the Waitlist Now</button>
        </a>
      </header>

      <section className="mission-section">
        <h2>📍 Our Mission</h2>
        <p className="mission-text">
          At SwaNik, our mission goes beyond simply connecting people to stray dogs.
          We believe in the power of compassion, the strength of community, and the
          transformative effect of kindness. Every stray dog deserves a second chance;
          a warm home, a full belly, and the love of a family. Our mission is to make
          that possible, one paw at a time.
        </p>

        <div className="cards-m">
          <div className="card-m">
            <h3>Report a Stray</h3>
            <p>
              If you spot a stray dog in need, you can identify and share the exact
              location of a stray in need and capture their current condition with
              detailed descriptions.
            </p>
          </div>
          <div className="card-m">
            <h3>Adopt a Dog</h3>
            <p>
              Looking to give a forever home to a furry friend? Browse through our
              database of rescued strays, each with their own unique story.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer-m">
        <p>Created by Khushi Verma</p>
      </footer>
    </div>
  );
}

export default MainPage;
