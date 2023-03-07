import React from "react";
import "../style.css";
// import pic from "../images/katie-zaferes.png";
import star from "../images/star.png";

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
