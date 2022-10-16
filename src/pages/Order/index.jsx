import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../component/Header";
import Footer from "../../component/Footer";
import SeatPosition from "../../component/SeatPosition";
import axios from "../../utils/axios";

import "../Order/style.css";
import ticketREG from "../../assets/image/Reg.png";
import ticketVIP from "../../assets/image/VIP.png";
import ticketVVIP from "../../assets/image/VVIP.png";

function Order() {
  const navigate = useNavigate();
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
      let dataFullSeat = result.data.data.filter((item) => item.statusFull);
      dataFullSeat = dataFullSeat.map((item) => item.section);
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
    function quantity(item) {
      return item.qty;
    }
    function payment(item) {
      return item.price;
    }
    function sum(a, b) {
      return a + b;
    }
    navigate("/payment", {
      state: {
        event: dataEvent.name,
        ticketSection: dataOrder.map((item) => item.seat.split("-")[0]),
        quantity: dataOrder.map(quantity).reduce(sum),
        totalPayment: dataOrder.map(payment).reduce(sum),
        eventId: eventId,
        bookingSection: dataOrder.map((item) => item.seat),
      },
    });
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
    <div>
      <div className="detail-body">
        {/* HEADER */}
        <Header />

        {/* MAIN */}

        {/* MAIN */}
        <section className="container-fluid order-section-container">
          <div className="col-sm-12 col-md-7 p-0 p-md-4 mt-md-5">
            <div className="rotate-seat">
              <SeatPosition
                width="80%" // MEMBERIKAN BESARAN PADA POLA SEAT
                height="80%" // MEMBERIKAN TINGGI PADA POLA SEAT
                fullSeat={fullSeat}
                activeSeat={activeSeat}
                handleSelectSeat={handleSelectSeat}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-5 p-0 p-md-4 mt-md-5 ">
            <h4>Tickets</h4>
            {activeSeat.length > 0 ? (
              <div className="ticket-scrolling">
                {dataOrder.map((item, index) => {
                  const data = item.seat.split("-");
                  const dataSeat = listBooking.filter(
                    (itemSeat) => itemSeat.section === item.seat
                  );
                  // const maxSeat = item.qty === dataSeat[0].available;
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
                        // disabled={maxSeat ? true : false}
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
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}

export default Order;
