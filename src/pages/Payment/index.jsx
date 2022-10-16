import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import Footer from "../../component/Footer";
import Header from "../../component/Header/";

import CardIcon from "../../assets/image/Card icon.png";
import BankIcon from "../../assets/image/Bank icon.png";
import RetailIcon from "../../assets/image/Retail icon.png";
import MoneyIcon from "../../assets/image/e-money icon.png";
import Card from "../../assets/image/card payment.png";

import "./index.css";

import axios from "../../utils/axios";

export default function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [form, setForm] = useState("");

  const handlePayment = async () => {
    const setData = {
      userId: localStorage.getItem("userId"),
      eventId: state.eventId,
      totalTicket: state.quantity,
      totalPayment: state.totalPayment,
      paymentMethod: form.value,
      section: state.bookingSection,
    };
    try {
      const result = await axios.post("booking", setData);

      alert(result.data.message);
      navigate("/");
    } catch (error) {
      // alert(error.response.data.message);
    }
  };

  const handleChangeForm = (e) => {
    const { value } = e.target;
    setForm({ ...form, value });
  };

  return (
    <>
      <div className="payment-body">
        {/* HEADER */}
        <Header />

        {/* MAIN */}
        <section className="container-fluid payment-section-container">
          <div className="container-fluid col-xl-6 payment-left-container mt-5 ml-xl-4">
            <div>
              <h4 className="font-weight-bold">Payment Method</h4>

              <div id="accordion" className="mt-md-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="exampleRadios1"
                    value="Card"
                    onChange={handleChangeForm}
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    <div>
                      <div id="headingCard">
                        <h5 className="mb-md-4">
                          <button
                            className="btn collapsed"
                            data-toggle="collapse"
                            data-target="#collapseCard"
                            aria-expanded="true"
                            aria-controls="collapseCard"
                          >
                            <img src={CardIcon} />
                            Card
                          </button>
                        </h5>
                      </div>

                      <div
                        id="collapseCard"
                        className="collapse show"
                        aria-labelledby="headingCard"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <img src={Card} />
                        </div>
                      </div>
                    </div>{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="exampleRadios1"
                    value="Bank"
                    onChange={handleChangeForm}
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    <div>
                      <div id="headingBank">
                        <h5 className="mb-md-4">
                          <button
                            className="btn collapsed"
                            data-toggle="collapse"
                            data-target="#collapseBank"
                            aria-expanded="false"
                            aria-controls="collapseBank"
                          >
                            <img src={BankIcon} />
                            Bank Transfer
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseBank"
                        className="collapse"
                        aria-labelledby="headingBank"
                        data-parent="#accordion"
                      >
                        <div className="card-body">Bank Transfer</div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="exampleRadios1"
                    value="Retail"
                    onChange={handleChangeForm}
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    <div>
                      <div id="headingRetail">
                        <h5 className="mb-md-4">
                          <button
                            className="btn collapsed"
                            data-toggle="collapse"
                            data-target="#collapseRetail"
                            aria-expanded="false"
                            aria-controls="collapseRetail"
                          >
                            <img src={RetailIcon} />
                            Retail
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseRetail"
                        className="collapse"
                        aria-labelledby="headingRetail"
                        data-parent="#accordion"
                      >
                        <div className="card-body">Retail</div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="exampleRadios1"
                    value="e-money"
                    onChange={handleChangeForm}
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    <div>
                      <div id="headingMoney">
                        <h5 className="mb-md-4">
                          <button
                            className="btn collapsed"
                            data-toggle="collapse"
                            data-target="#collapseMoney"
                            aria-expanded="false"
                            aria-controls="collapseMoney"
                          >
                            <img src={MoneyIcon} />
                            E-Money
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseMoney"
                        className="collapse"
                        aria-labelledby="headingMoney"
                        data-parent="#accordion"
                      >
                        <div className="card-body">E-money</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid col-xl-6 mt-5">
            <div>
              <h4 className="font-weight-bold">Ticket Detail</h4>

              <div className=" mt-md-5 w-75">
                <div className="d-flex justify-content-between">
                  <p className="font-weight-bold">Event</p>
                  <p className="text-primary font-weight-bold">{state.event}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="font-weight-bold">Ticket Section</p>
                  <p className="text-primary font-weight-bold">
                    {state.ticketSection.toString()}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="font-weight-bold">Quantity</p>
                  <p className="text-primary font-weight-bold">
                    {state.quantity}{" "}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="font-weight-bold">Total Payment</p>
                  <p className="text-primary font-weight-bold">
                    Rp{state.totalPayment}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block w-75"
                onClick={handlePayment}
              >
                Payment
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
