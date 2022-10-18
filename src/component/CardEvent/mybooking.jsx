import { useNavigate } from "react-router-dom";
import "./create-event.css";
import moment from "moment/moment";
import { useDispatch } from "react-redux";

import { getDataEvent, deleteDataEvent } from "../../store/action/event";

export default function CreateEvent(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${props.data.eventId}`);
  };

  const handleDelete = () => {
    dispatch(deleteDataEvent(props.data.eventId)).then(() => {
      dispatch(getDataEvent());
    });
  };

  let eventDay = moment(props.data.dateTimeShow).format("ddd");
  let eventDate = moment(props.data.dateTimeShow).format("DD");

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
          <button className="btn btn-primary" onClick={handleDetail}>
            Detail
          </button>
          <button
            className="btn btn-warning"
            onClick={() => props.setUpdate(props.data)}
            data-toggle="modal"
            data-target="#create-event"
          >
            Update
          </button>
          <div
            className="modal fade"
            id="create-event"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <Modal />
          </div>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
