import logo from "../../assets/image/Wetick.png";
import { Link, useNavigate } from "react-router-dom";
import "../Header/index.css";
import React from "react";
import { useSelector } from "react-redux";
import axios from "../../utils/axios";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const name = user.data.name;
  const imgSource =
    "https://res.cloudinary.com/du0sbrocy/image/upload/v1663819188";
  const profileImage = user.data.image;
  const isLogin = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");

  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };

  const handleProfile = () => {
    navigate("/profile/edit-profile");
  };

  const handleLogOut = async () => {
    try {
      const result = await axios.post("auth/logout", {
        headers: {
          refreshtoken: refreshToken,
        },
      });
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("token");
      alert(result.data.message);
      navigate("/signin");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white header-body">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="" width="150" height="60" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0 mx-auto">
          <li className="nav-item ">
            <Link to="/" className="nav-link current_page">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create-event" className="nav-link">
              Create Event
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/" className="nav-link">
              Location
            </Link>{" "}
          </li>
        </ul>
        <div className="d-flex gap-4">
          {isLogin ? (
            <>
              <a
                className="mt-2 ava-container"
                style={{ cursor: "pointer" }}
                onClick={handleProfile}
              >
                <img
                  src={`${imgSource}/${profileImage}`}
                  alt="profile ava"
                  className="ava-img"
                />
              </a>
              <a
                className="user-name fw-bold d-flex link-nodecor"
                style={{ cursor: "pointer" }}
                onClick={handleProfile}
              >
                {name ? name : "Anonymous"}
              </a>
              <button className="btn btn-primary" onClick={handleLogOut}>
                Log Out
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-primary mr-3"
                onClick={() => handleNavigate("signin")}
              >
                Signin
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleNavigate("signup")}
              >
                Signup
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
