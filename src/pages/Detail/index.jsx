import Header from "../../component/Header";
import Footer from "../../component/Footer";
import "../Detail/index.css";
import axios from "../../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

import Map from "../../assets/image/Map.png";
import Attendees from "../../component/Attendees";
import moment from "moment/moment";

function DetailPage() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const { eventId } = useParams();
  const [data, setData] = useState([]);
  const [wishlist, setWishlist] = useState("");

  useEffect(() => {
    getEventById();
  }, []);

  const handleWishlist = async () => {
    try {
      const result = await axios.post("wishlist", {
        eventId: eventId,
        userId: userId,
      });
      setWishlist(result.data.data[0].wishlistId);
    } catch (error) {
      // console.error(error);
    }
  };

  console.log(wishlist);
  const getEventById = async () => {
    try {
      const result = await axios.get(`event/${eventId}`);
      setData(result.data.data);
    } catch (error) {
      console.log("error" + error);
    }
  };

  const eventDate = data[0] ? data[0].dateTimeShow : "";

  const handleOrder = () => {
    navigate("/order", {
      state: {
        eventId: eventId,
      },
    });
  };
  return (
    <>
      <div className="detail-body">
        {/* HEADER */}
        <Header />

        {/* MAIN */}
        <section className="container-fluid detail-section-container">
          <div className="container-fluid col-xl-5 detail-left-container">
            <div className="detail-left-content">
              <img
                src={`https://res.cloudinary.com/du0sbrocy/image/upload/v1663640826/${
                  data[0] ? data[0].image : ""
                }`}
                alt="event image"
                className="image"
              />
            </div>
            <p className="fs-5 fw-bold mt-4 query-wishlist">
              <span onClick={handleWishlist}>
                {wishlist === "" ? (
                  <ion-icon name="heart-outline"></ion-icon>
                ) : (
                  <ion-icon name="heart"></ion-icon>
                )}
              </span>
              Add to Wishlist
            </p>
          </div>
          <div className="container-fluid col-xl-7 detail-right-container">
            <div className="query-text--overlay ">
              <div className="detail-title-content content-color">
                <h4 className="fw-bold">{data[0] ? data[0].name : ""}</h4>
              </div>
              <div className="detail-information">
                <p className="content-color">
                  <ion-icon name="location-outline" class="icon"></ion-icon>
                  {data[0] ? data[0].location : ""}
                </p>
                <p className="detail-time content-color">
                  <ion-icon name="time-outline" class="icon"></ion-icon>
                  {moment(eventDate).format("llll")}
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
              <p className="mt-4">{data[0] ? data[0].detail : ""}</p>
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
                onClick={handleOrder}
              >
                Buy Tickets
              </button>
            </article>
          </div>{" "}
        </section>
        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}

export default DetailPage;
