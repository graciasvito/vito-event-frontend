import { useDispatch, useSelector } from "react-redux";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Sidemenu from "../../component/ProfileSection";
import "./myBooking.css";
import { getDataBooking } from "../../store/action/booking";
import { useEffect } from "react";
import axios from "../../utils/axios";
import { useState } from "react";
import moment from "moment/moment";

export default function MyBooking() {
  // const dispatch = useDispatch();
  const booking = useSelector((state) => state.booking);
  // console.log(booking.data);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [bookingEvent, setBookingEvent] = useState("");
  const [dataEvent, setDataEvent] = useState("");

  useEffect(() => {
    getDataEvent();
    dispatch(getDataBooking(user.data.userId));
    if (bookingEvent.length > 1) {
      getBookingEvent();
    }
  }, []);

  const getDataEvent = async () => {
    const event = booking.data.map((item) => item.eventId);
    // console.log(event);
    let promises = [];
    for (let i = 0; i < event.length; i++) {
      promises.push(axios.get("/event/" + event[i]));
    }
    Promise.all(promises).then((responses) => {
      setBookingEvent(responses.map((item) => item.data.data));
      // setDataEvent(bookingEvent.flat());
    });
    // console.log(promises);
  };

  const getBookingEvent = () => {
    if (bookingEvent) {
      setDataEvent(bookingEvent.flat());
    }
  };
  // console.log(dataEvent);

  return (
    <>
      <div className="profile-body">
        {/* HEADER */}
        <Header />
        {/* Main */}
        <section className="container-fluid profile-section-container">
          <Sidemenu />
          <div className="myBooking-right-section-container ml-sm-5 ">
            <div>
              <h3 className="ml-5 font-weight-bold mt-4">My Booking</h3>
            </div>
            {dataEvent.length > 0 ? (
              dataEvent.map((item, index) => (
                <div className="d-flex mt-5 pl-5" key={index}>
                  <div className="text-center">
                    <p className="myBooking-date">
                      {moment(item.dateTimeShow).format("DD")}
                    </p>
                    <p className="myBooking-day">
                      {moment(item.dateTimeShow).format("ddd")}
                    </p>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-weight-bold">{item.name}</h3>
                    <p>{item.location}</p>
                    <p>{moment(item.dateTimeShow).format("llll")}</p>
                    <p>Detail</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">
                <h3>Data Not Found !</h3>
              </div>
            )}
          </div>
        </section>
        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
