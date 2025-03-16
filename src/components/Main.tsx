import React from "react";
import "../assets/styles/Main.scss";
import img from "../assets/images/img.jpg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper w-32 h-32 rounded-full">
          <img src={img} alt="Avatar" className="fill" />
        </div>
        <div className="content">
          <h1>K P Nishigandha</h1>
          <p>Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
