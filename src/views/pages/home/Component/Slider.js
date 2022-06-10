import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../Home.scss";

function Slider(props) {
  return (
    <div>
      <Carousel
        className="carousel-slider"
        showThumbs={false}
        style={{ borderRadius: "20px" }}
        axis="horizontal"
      >
        <div style={{ height: "350px" }}>
          <img
            style={{ maxWidth: "100%", height: "350px", objectFit: "cover" }}
            src="/img/1.png"
          />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div style={{ height: "350px" }}>
          <img
            style={{ maxWidth: "100%", height: "350px", objectFit: "cover" }}
            src="/img/2.png"
          />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div style={{ height: "350px" }}>
          <img
            style={{ maxWidth: "100%", height: "350px", objectFit: "cover" }}
            src="/img/3.png"
          />
          {/* <p className="legend">Legend 3</p> */}
        </div>

        <div style={{ height: "350px" }}>
          <img
            style={{ maxWidth: "100%", height: "350px", objectFit: "cover" }}
            src="/img/4.png"
          />
          {/* <p className="legend">Legend 3</p> */}
        </div>

        <div style={{ height: "350px" }}>
          <img
            style={{ maxWidth: "100%", height: "350px", objectFit: "cover" }}
            src="/img/5.png"
          />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
