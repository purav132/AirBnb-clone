import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import pic from "./images/katie-zaferes.png";
import Data from "./data";

export default function App() {
  // console.log(Data);
  const cardPage = Data.map((data) => <Card key={data.id} data={data} />);

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="card-list">{cardPage}</section>
    </div>
  );
}
