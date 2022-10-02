import Header from "../../component/Header";
import Footer from "../../component/Footer";
import "../Order/index.css";
import Stadium from "../../assets/image/Order.png";
import Price from "../../assets/image/Price.png";
import Pink from "../../assets/image/Pink ticket.png";
import Orange from "../../assets/image/Orange ticket.png";
import Purple from "../../assets/image/Purple ticket.png";

function OrderPage() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <section className="container section-container">
        <div className="container-fluid col-xl-6 left-container">
          <div className="left-content">
            <img src={Stadium} alt="event image" className="query-image" />
          </div>
        </div>
        <div className="container-fluid col-xl-6 right-container">
          <div className="title-content content-color">
            <h4 className="fw-bold">Tickets</h4>
            <p className="price content-color fw-bold">
              BY PRICE
              <img src={Price} alt="price Tick" className="ms-4" />
            </p>
          </div>
          <div>
            <div className="ticket__container d-flex mt-4">
              <div className="ticket-icon">
                <img src={Purple} alt="Purple ticket" />
              </div>
              <div className="ticket-section">
                <h5 className="fw-bold">SECTION REG, ROW 1</h5>
                <p className="text-secondary">12 Seats available</p>
              </div>
              <div className="price-container d-flex">
                <h5>$15</h5>
                <p>/person</p>
              </div>
            </div>
            <div className="ticket__container d-flex mt-4">
              <div className="ticket-icon">
                <img src={Pink} alt="Pink ticket" />
              </div>
              <div className="ticket-section">
                <h5 className="fw-bold">SECTION VIP, ROW 2</h5>
                <p className="text-secondary">9 Seats available</p>
              </div>
              <div className="price-container d-flex">
                <h5>$35</h5>
                <p>/person</p>
              </div>
            </div>
            <div className="ticket__container d-flex mt-4">
              <div className="ticket-icon">
                <img src={Orange} alt="Orange ticket" />
              </div>
              <div className="ticket-section">
                <h5 className="fw-bold">SECTION VVIP, ROW 3</h5>
                <p className="text-secondary">6 Seats available</p>
              </div>
              <div className="price-container d-flex">
                <h5>$50</h5>
                <p>/person</p>
              </div>
            </div>
          </div>

          <hr />
          <div>
            <div className="detail-ticket-section d-flex justify-content-between mt-4">
              <h5 className="fw-bold detail-size">Ticket Section</h5>
              <h5 className="detail-color">VIP</h5>
            </div>
            <div className="detail-ticket-section d-flex justify-content-between mt-4">
              <h5 className="fw-bold detail-size">Quantity</h5>
              <h5 className="detail-color">2</h5>
            </div>
            <div className="detail-ticket-section d-flex justify-content-between mt-4">
              <h5 className="fw-bold detail-size">Total Payment</h5>
              <h5 className="detail-color">$70</h5>
            </div>
          </div>
          <button
            className="btn btn-primary shadow-lg buy-button"
            type="button"
          >
            Checkout
          </button>
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default OrderPage;
