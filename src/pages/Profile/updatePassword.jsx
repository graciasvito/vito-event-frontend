import React, { useState } from "react";
import { useSelector } from "react-redux";

import axios from "../../utils/axios";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Sidemenu from "../../component/ProfileSection";

import "./index.css";

function updatePassword() {
  const user = useSelector((state) => state.user);
  const userId = user.data.userId;
  const [form, setForm] = useState({});
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdatePassword = async () => {
    try {
      const result = await axios.patch(`user/password/${userId}`, form);
      alert(result.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <div className="profile-body">
        {/* HEADER */}
        <Header />

        {/* SECTION */}
        <section className="container-fluid profile-section-container">
          <Sidemenu />
          <div className="right-section-container ml-sm-5">
            <div className=" profile-information-container ">
              <h4 className="font-weight-bold">Change Password</h4>
              <div className="d-flex mt-5">
                <div>
                  <p className="">Old Password</p>
                  <p className="mt-5">New Password</p>
                  <p className="mt-5">Confirm Password</p>
                </div>
                <div className="password-input-container ">
                  <form className="d-flex flex-column">
                    <div className="input-group ">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        name="oldPassword"
                        onChange={handleChangeForm}
                      />
                    </div>
                    <div className="input-group password-input">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        name="newPassword"
                        onChange={handleChangeForm}
                      />
                    </div>
                    <div className="input-group password-input">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        name="confirmPassword"
                        onChange={handleChangeForm}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block mt-sm-5"
                onClick={handleUpdatePassword}
              >
                Update Password
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

export default updatePassword;
