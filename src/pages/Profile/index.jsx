import axios from "../../utils/axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Sidemenu from "../../component/ProfileSection";
import { getDataUser } from "../../store/action/user";

import "./index.css";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const imgUserSource =
    "https://res.cloudinary.com/du0sbrocy/image/upload/v1663819188";
  const profileImage = user.data.image;
  const name = user.data.name;
  const username = user.data.username;
  const email = user.data.email;
  const gender = user.data.gender;
  const birthday = user.data.dateOfBirth;
  const profession = user.data.profession;
  const userId = user.data.userId;
  // const nationality = user.data.nationality;

  const [form, setForm] = useState({
    name: name,
  });

  const handleUpdate = async () => {
    try {
      const result = await axios.patch(`user/${userId}`, form);
      dispatch(getDataUser(result.data.data.userId));
      alert(result.data.message);
      console.log(result.data.data[0]);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  // const handleUpdateImage = async () => {
  //   try {
  //     const result = await axios.patch(`user/image/${userId}`)
  //   } catch (error) {

  //   }
  // }

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
              <h4>Profile</h4>
              <div className="d-flex ">
                <div className="information-profile mt-5 d-flex">
                  <div className="param-info">
                    <p className="">Name</p>
                    <p className="mt-5">Username</p>
                    <p className="mt-5">Email</p>
                    <p className="mt-5">Gender</p>
                    <p className="mt-5">Profession</p>
                    <p className="mt-5">Nationality</p>
                    <p className="mt-5">Birthday</p>
                  </div>
                  <div className="value-info">
                    <div className="input-group input-group mb-3 value-container ">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder={name}
                        name="name"
                        onChange={handleChangeForm}
                      />
                    </div>
                    <div className="value-container value-margin">
                      <p>@{username}</p>
                    </div>
                    <div className="d-flex value-container mt-5">
                      <p>{email}</p>
                    </div>
                    <div className="value-container value-margin">
                      <input
                        type="radio"
                        id="Male"
                        name="gender"
                        value="Male"
                        checked={gender === "male"}
                      />
                      <label htmlFor="html">Male</label>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        className="ml-4"
                        checked={gender === "female"}
                      />
                      <label htmlFor="css">Female</label>
                    </div>
                    <div className="input-group value-container mt-4">
                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>{profession}</option>
                        <option value="1">Developer</option>
                        <option value="2">Employee</option>
                        <option value="3">Investor</option>
                      </select>
                    </div>
                    <div className="input-group value-container value-margin">
                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected>Indonesia</option>
                        <option value="1">Spain</option>
                        <option value="2">Mexico</option>
                        <option value="3">German</option>
                      </select>
                    </div>
                    <p className="value-container birthday ">
                      <input
                        type="date"
                        id="birthday"
                        name="dateOfBirth"
                        value={birthday}
                        min="1990-01-01"
                        max="2018-12-31"
                      />
                    </p>
                  </div>
                </div>
                <div className="card profile-card ml-sm-5 mt-5">
                  <div className="profile-img-container mx-auto">
                    <img
                      src={`${imgUserSource}/${profileImage}`}
                      className="card-img-top profile-card-img "
                    />
                  </div>
                  <div className="card-body mx-auto">
                    <a
                      href="#"
                      className="btn btn-outline-primary profile-card-button font-weight-bold"
                      // onClick={handleUpdateImage}
                    >
                      Choose Photo
                    </a>
                    <p className="card-text">Image size: max, 500 KB</p>
                    <p className="card-text">
                      Image formats: .JPG, .JPEG, .PNG
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary update-button"
                onClick={handleUpdate}
              >
                Save
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

export default Profile;
