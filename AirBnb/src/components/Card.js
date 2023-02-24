import React from "react";
import "../style.css";
// import pic from "../images/katie-zaferes.png";
import star from "../images/star.png";

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
  let cardBadge;
  if (props.data.openSpots === 0) {
    cardBadge = "SOLD OUT";
  } else if (props.data.location === "Online") {
    cardBadge = "ONLINE";
  }

  return (
    <section className="card">
      {cardBadge && <div className="card-badge">{cardBadge}</div>}
      <img
        src={require(`../images/${props.data.coverImg}`)}
        className="katie-zaferes-pic"
        alt="frfd"
      />
      <div className="card-text">
        <p>
          <img src={star} className="star" alt="gfg" />{" "}
          {props.data.stats.rating}{" "}
          <span className="card-country">
            ({props.data.stats.reviewCount}) • {props.data.location}
          </span>
        </p>
        <p>{props.data.title}</p>
        <p>
          <span className="card-price">From ${props.data.price}</span> / person
        </p>
      </div>
    </section>
  );
}
