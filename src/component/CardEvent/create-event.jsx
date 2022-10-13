import { useNavigate } from "react-router-dom";
import "./create-event.css";
import moment from "moment/moment";

export default function CreateEvent(props) {
  console.log(props);
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${props.data.eventId}`);
  };
  let eventDay = moment(props.data.dateTimeShow).format("ddd");
  let eventDate = moment(props.data.dateTimeShow).format("DD");
  console.log(props);
  return (
    <div className="d-flex mt-5 ml-5 create-parent-container">
      <div className="mr-4 d-flex flex-column justify-content-center align-items-center">
        <p className="text-warning">{eventDate}</p>
        <p className="text-secondary">{eventDay}</p>
      </div>
      <div className="card create-card-container">
        <div className="card-body">
          <h5 className="card-title font-weight-bold create-card-font-style">
            {props.data.name}
          </h5>
          <p className="card-text">{props.data.location}</p>
          <p className="card-text">Wed, 15 Nov, 4:00 PM</p>
          <a href="#" className="btn btn-primary" onClick={handleDetail}>
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
