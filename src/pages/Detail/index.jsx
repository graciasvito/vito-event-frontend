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
  const [wishlist, setWishlist] = useState(
    localStorage.getItem(`eventId:${eventId}, userId: ${userId}`)
  );

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
      localStorage.setItem(
        `eventId:${eventId}, userId: ${userId}`,
        result.data.data[0].wishlistId
      );
    } catch (error) {
      // console.error(error);
    }
  };

  let wishlistId = localStorage.getItem(
    `eventId:${eventId}, userId: ${userId}`
  );

  const handleDeleteWishlist = async () => {
    try {
      await axios.delete(`wishlist/${wishlistId}`);
      setWishlist(null);
      localStorage.removeItem(`eventId:${eventId}, userId: ${userId}`);
    } catch (error) {
      // console.error(error);
    }
  };

  const getEventById = async () => {
    try {
      const result = await axios.get(`event/${eventId}`);

      setData(result.data.data);
    } catch (error) {
      setData(error);
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
              />
            </div>
            <p className="font-size-5 font-weight-bold mt-4 ml-5 detail-query-wishlist">
              <span>
                {wishlist === null ? (
                  <ion-icon
                    name="heart-outline"
                    onClick={handleWishlist}
                  ></ion-icon>
                ) : (
                  <ion-icon
                    name="heart"
                    onClick={handleDeleteWishlist}
                  ></ion-icon>
                )}
              </span>
              Add to Wishlist
            </p>
          </div>
          <div className="container-fluid col-xl-7">
            <div className="detail-query-text--overlay ">
              <div className="detail-title-content detail-content-color">
                <h4 className="fw-bold">{data[0] ? data[0].name : ""}</h4>
              </div>
              <div className="detail-information">
                <p className="detail-content-color">
                  <ion-icon name="location-outline" class="icon"></ion-icon>
                  {data[0] ? data[0].location : ""}
                </p>
                <p className="detail-time detail-content-color">
                  <ion-icon name="time-outline" class="icon"></ion-icon>
                  {moment(eventDate).format("llll")}
                </p>
              </div>
              <p className="detail-content-color">Attendees</p>
              <div className="detail-attendants d-flex">
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
              <div>
                <h5 className="fw-bold mt-5">Location</h5>
                <img src={Map} className="mt-3" alt="" />
              </div>
              <button
                className="btn btn-primary shadow-lg detail-buy-button"
                type="button"
                onClick={handleOrder}
              >
                Buy Tickets
              </button>
            </article>
          </div>{" "}
        </section>
        {/* FOOTER */}
        <Footer className="detail-footer" />
      </div>
    </>
  );
}

export default DetailPage;
