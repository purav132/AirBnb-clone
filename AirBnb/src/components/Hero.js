import React from "react";
import grid from "../images/photo-grid.png";
import "../style.css";

export default function Hero() {
  return (
    <div className="hero">
      <img src={grid} className="hero-grid" alt="imagefg" />
      <br />
      <div className="hero-text">
        <h1 className="hero-text-title">Online Experiences</h1>
        <p className="hero-text-content">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
