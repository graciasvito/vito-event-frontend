import React from "react";
import Banner from "../../assets/image/img banner.png";
import "../Sign Left Container/index.css";
export default function LeftContainer() {
  return (
    <>
      <div className="col-7 container-color left-container">
        <div className="col-md-auto image-container">
          <img src={Banner} alt="" className="imgbanner" />
        </div>
      </div>
    </>
  );
}
