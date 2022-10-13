import Footer from "../../component/Footer";
import Header from "../../component/Header/";

import "./index.css";

export default function Payment() {
  return (
    <>
      <div className="payment-body">
        {/* HEADER */}
        <Header />

        {/* MAIN */}
        <section className="container-fluid payment-section-container">
          <div className="container-fluid col-xl-6 payment-left-container mt-5 ml-xl-5">
            <h4 className="font-weight-bold">Payment Method</h4>
          </div>
          <div className="container-fluid col-xl-6 mt-5 ml-xl-5 ">
            <h4 className="font-weight-bold">Ticket Detail</h4>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
