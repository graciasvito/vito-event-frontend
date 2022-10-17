import React from "react";
import { useNavigate } from "react-router-dom";

import "../../component/CardEvent/index.css";
import Attendees from "../../component/Attendees";
import moment from "moment/moment";

// import eventA from "../../assets/image/Event A.png";

function CardEvent(props) {
  const imgSource =
    "https://res.cloudinary.com/du0sbrocy/image/upload/v1663640826/";
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${props.data.eventId}`);
  };
  let eventDate = moment(props.data.dateTimeShow).format("LLLL");

  return (
    <a onClick={handleDetail}>
      <div className="card card-size mr-5 mt-5">
        <img
          className="card-img-top card-img-size"
          src={`${imgSource}${props.data.image}`}
          alt="Card image cap"
        />
        <div className="card-img-overlay text-white d-flex flex-column justify-content-end">
          <p className="card-text date-card-size bg-dark">{eventDate}</p>
          <h5 className="card-title bg-dark">{props.data.name}</h5>
          <Attendees />
        </div>
      </div>
    </a>
  );
}

export default CardEvent;
