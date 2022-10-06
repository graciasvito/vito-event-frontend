import Attendees from "../../component/Attendees";
import "../Detail/index.css";
import EventA from "../../assets/image/Event A.png";
import Map from "../../assets/image/Map.png";

function Detail(props) {
  return (
    <div className="d-flex">
      <div className="container-fluid col-xl-5 detail-left-container">
        <div className="detail-left-content">
          <img src={EventA} alt="event image" className="image" />
        </div>
        <p className="fs-5 fw-bold mt-4 query-wishlist">
          <ion-icon name="heart-outline"></ion-icon>
          Add to Wishlist
        </p>
      </div>
      <div className="container-fluid col-xl-7 detail-right-container">
        <div className="query-text--overlay ">
          <div className="detail-title-content content-color">
            <h4 className="fw-bold">{props.name}</h4>
          </div>
          <div className="detail-information">
            <p className="content-color">
              <ion-icon name="location-outline" class="icon"></ion-icon>
              Jakarta, Indonesia
            </p>
            <p className="detail-time content-color">
              <ion-icon name="time-outline" class="icon"></ion-icon>
              Wed, 15 Nov, 4:00 PM
            </p>
          </div>
          <p className="content-color">Attendees</p>
          <div className="attendants d-flex">
            <Attendees />
          </div>
        </div>
        <hr />
        <article>
          <h5 className="fw-bold">Event Detail</h5>
          <p className="mt-4">
            After his controversial art exhibition &quot;Tear and Consume&quot;
            back in
            <br />
            November 2018, in which guest were invited to tear up...
          </p>
          <a href="#" className="link-nodecor">
            Read More
          </a>
          <div className="location">
            <h5 className="fw-bold mt-5">Location</h5>
            <img src={Map} className="mt-3" alt="" />
          </div>
          <button
            className="btn btn-primary shadow-lg buy-button"
            type="button"
          >
            <a
              href="/Order/order.html"
              className="link-nodecor text-white fw-bold"
            >
              Buy Tickets
            </a>
          </button>
        </article>
      </div>{" "}
    </div>
  );
}

export default Detail;
