import React from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/LandingPage/index.css";
import eventA from "../../assets/image/Event A.png";

function CardEvent(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${props.data.id}`);
  };
  return (
    <a href="#" onClick={handleDetail}>
      <div className="card" style={{ width: "17rem" }}>
        {/* https://res.cloudinary.com/dd1uwz8eu/image/upload/v1662967884 */}
        <img className="card-img-top" src={eventA} alt="Card image cap" />
        <div className="card-img-overlay">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">{props.data.price}</p>
        </div>
      </div>
    </a>
  );
}

export default CardEvent;
