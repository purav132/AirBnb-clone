import React from "react";
import "../style.css";
import airnib from "../images/airbnb-logo.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={airnib} alt="Imagefefd" />
    </nav>
  );
}
