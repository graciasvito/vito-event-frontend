import axios from "../../utils/axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Sidemenu from "../../component/ProfileSection";
import { getDataUser, updateImageUser } from "../../store/action/user";

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
  // const gender = user.data.gender;
  const birthday = user.data.dateOfBirth;
  const profession = user.data.profession;
  const userId = user.data.userId;
  const nationality = user.data.nationality;

  const [form, setForm] = useState({});
  const [image, setImage] = useState("");
  const [imageForm, setImageForm] = useState({});

  const handleUpdate = async () => {
    try {
      const result = await axios.patch(`user/${userId}`, form);
      dispatch(getDataUser(result.data.data[0].userId));
      alert(result.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleChangeImage = (e) => {
    const { name, files } = e.target;

    setImageForm({ ...imageForm, [name]: files[0] });
    setImage(URL.createObjectURL(files[0]));
  };

  const handleUpdateImage = (e) => {
    e.preventDefault();
    const formImageData = new FormData();
    for (const image in imageForm) {
      formImageData.append(image, imageForm[image]);
    }
    dispatch(updateImageUser(formImageData, userId));
  };

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
                    <div className="value-container mt-4">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder={username}
                        name="username"
                        onChange={handleChangeForm}
                      />
                    </div>
                    <div className="d-flex value-container mt-5">
                      <p>{email}</p>
                    </div>
                    <div className="value-container value-margin">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleChangeForm}
                      />
                      <label htmlFor="html">Male</label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        className="ml-4"
                        onChange={handleChangeForm}
                      />
                      <label htmlFor="css">Female</label>
                    </div>
                    <div className="input-group value-container value-margin">
                      <select
                        className="custom-select"
                        id="inputGroupSelect02"
                        name="profession"
                        onChange={handleChangeForm}
                      >
                        <option selected>{profession}</option>
                        <option value="Developer">Developer</option>
                        <option value="Employee">Employee</option>
                        <option value="Investor">Investor</option>
                      </select>
                    </div>
                    <div className="input-group value-container value-margin">
                      <select
                        className="custom-select"
                        id="inputGroupSelect02"
                        name="nationality"
                        onChange={handleChangeForm}
                      >
                        <option value={nationality}>{nationality}</option>
                        <option value="Spain">Spain</option>
                        <option value="Mexico">Mexico</option>
                        <option value="German">German</option>
                        <option value="Indonesia">Indonesia</option>
                      </select>
                    </div>
                    <p className="value-container value-margin ">
                      <input
                        type="text"
                        id="birthday"
                        name="dateOfBirth"
                        value={birthday}
                        onChange={handleChangeForm}
                      />
                    </p>
                  </div>
                </div>
                <div className="card profile-card ml-sm-5 mt-5">
                  <div className="profile-img-container mx-auto">
                    <img
                      src={image ? image : `${imgUserSource}/${profileImage}`}
                      className="card-img-top profile-card-img "
                    />
                  </div>
                  <div className="card-body mx-auto">
                    <input
                      type="file"
                      id="profile-img"
                      className="btn btn-outline-primary profile-card-button font-weight-bold d-none"
                      onChange={handleChangeImage}
                    />
                    <label
                      htmlFor="profile-img"
                      className="btn btn-outline-primary profile-card-button font-weight-bold"
                      onClick={image ? handleUpdateImage : ""}
                    >
                      {image ? "Save Photo" : "Choose Photo"}
                    </label>
                    {/* <button type="submit" onClick={handleUpdateImage}>
                      save photo
                    </button> */}

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
