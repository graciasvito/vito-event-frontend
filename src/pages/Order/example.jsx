import "../Order/style.css";
import { useState, useEffect } from "react";

import Header from "../../component/Header";
import Footer from "../../component/Footer";
import SeatPosition from "../../component/SeatPosition";

import ticketREG from "../../assets/image/Purple ticket.png";
import ticketVIP from "../../assets/image/Pink ticket.png";
import ticketVVIP from "../../assets/image/Orange ticket.png";
import axios from "../../utils/axios";
import { useLocation } from "react-router-dom";

// LIST SECTION
// VVIP = VVIP(1...4)-1
// VIP = VIP(1...4)-(1...7)
// REG = REG(1...4)-(1...9)

export default function App() {
  const { state } = useLocation();
  const eventId = state.eventId;

  const [fullSeat, setFullSeat] = useState([]); // DI GUNAKAN UNTUK MENAMPUNG SEAT YANG FULL
  const [activeSeat, setActiveSeat] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SEDANG DIPILIH
  const [dataOrder, setDataOrder] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SUDAH TERPILIH
  const [listBooking, setListBooking] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG LIST DATA SEAT YANG SUDAH DI BOOKING
  const [dataEvent, setDataEvent] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG DATA EVENT

  useEffect(() => {
    getDataBooking();
    getDataEvent();
  }, []);

  const getDataBooking = async () => {
    try {
      const result = await axios.get(`booking/section/${eventId}`);
      console.log("Getdatabooking");
      let dataFullSeat = result.data.data.filter((item) => item.statusFull);
      dataFullSeat = dataFullSeat.map((item) => item.section);
      console.log(dataFullSeat);
      setFullSeat(dataFullSeat);
      setListBooking(result.data.data);
    } catch (error) {
      //   console.log(error);
    }
  };

  const getDataEvent = async () => {
    try {
      const result = await axios.get(`event/${eventId}`);
      setDataEvent(result.data.data[0]);
    } catch (error) {
      //   console.log(error);
    }
  };

  const handleSelectSeat = (seat) => {
    // PROSES PEMILIHAN SEAT
    const data = seat.split("-");

    if (!fullSeat.includes(seat)) {
      if (activeSeat.includes(seat)) {
        const deleteSeat = activeSeat.filter((item) => item !== seat);
        const deleteDataOrder = dataOrder.filter((item) => item.seat !== seat);
        setActiveSeat(deleteSeat);
        setDataOrder(deleteDataOrder);
      } else {
        setActiveSeat([...activeSeat, seat]);
        setDataOrder([
          ...dataOrder,
          {
            seat,
            qty: 1,
            price: data[0].includes("VVIP")
              ? dataEvent.price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
              : data[0].includes("VIP")
              ? dataEvent.price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
              : dataEvent.price, // HARGA TIDAK BERUBAH UNTUK REGULAR
          },
        ]);
      }
    }
  };

  const handleOrderSeat = () => {
    // console.log(dataOrder);
  };

  const clearOrderSeat = () => {
    setActiveSeat([]);
    setDataOrder([]);
  };

  const increaseOrderSeat = (section) => {
    const findData = dataOrder.find((item) => item.seat === section.seat);
    const price = section.seat.includes("VVIP")
      ? dataEvent.price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
      : section.seat.includes("VIP")
      ? dataEvent.price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
      : dataEvent.price; // HARGA TIDAK BERUBAH UNTUK REGULAR
    findData.qty += 1;
    findData.price = price * findData.qty;
    setDataOrder([...dataOrder]);
  };

  const decreaseOrderSeat = (section) => {
    const findData = dataOrder.find((item) => item.seat === section.seat);
    if (findData.qty === 1) {
      const deleteData = dataOrder.filter((item) => item.seat !== section.seat);
      const deleteSeat = activeSeat.filter((item) => item !== section.seat);
      setDataOrder(deleteData);
      setActiveSeat(deleteSeat);
    } else {
      const price = section.seat.includes("VVIP")
        ? dataEvent.price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
        : section.seat.includes("VIP")
        ? dataEvent.price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
        : dataEvent.price; // HARGA TIDAK BERUBAH UNTUK REGULAR
      findData.qty -= 1;
      findData.price = price * findData.qty;
      setDataOrder([...dataOrder]);
    }
  };

  return (
    <>
      <div className="order-background">
        {/* HEADER */}
        <Header />

        <div className="container order-section-container">
          <div className="example-card">
            <div className="row m-5">
              <div className="col-sm-12 col-md-7 p-0 p-md-4">
                <div className="rotate-seat">
                  <SeatPosition
                    width="90%" // MEMBERIKAN BESARAN PADA POLA SEAT
                    height="90%" // MEMBERIKAN TINGGI PADA POLA SEAT
                    fullSeat={fullSeat}
                    activeSeat={activeSeat}
                    handleSelectSeat={handleSelectSeat}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-5 p-0 p-md-4">
                <h4>Tickets</h4>

                {activeSeat.length > 0 ? (
                  <div className="ticket-scrolling">
                    {dataOrder.map((item, index) => {
                      const data = item.seat.split("-");
                      const dataSeat = listBooking.filter(
                        (itemSeat) => itemSeat.section === item.seat
                      );

                      return (
                        <div className="my-3" key={index}>
                          <img
                            src={
                              data[0].includes("VVIP")
                                ? ticketVVIP
                                : data[0].includes("VIP")
                                ? ticketVIP
                                : ticketREG
                            }
                            className="ticket-icon"
                            alt="ticket icon"
                          />
                          <label className="ms-3">
                            Section {data[0]}, Row {data[1]} - Rp {item.price}
                            <br />[
                            {dataSeat.length > 0
                              ? dataSeat[0].available
                              : data[0].includes("VVIP")
                              ? 10
                              : data[0].includes("VIP")
                              ? 20
                              : 30}{" "}
                            Seats Available]
                          </label>
                          <br />
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => decreaseOrderSeat(item)}
                          >
                            -
                          </button>
                          <h5 className="d-inline mx-2">{item.qty}</h5>
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => increaseOrderSeat(item)}
                          >
                            +
                          </button>
                          <hr />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="d-flex align-items-center justify-content-center h-50">
                    <h6>Select Seat</h6>
                  </div>
                )}
                <hr />
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" onClick={handleOrderSeat}>
                    Checkout
                  </button>
                  <button className="btn btn-danger" onClick={clearOrderSeat}>
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
