import logo from "../../assets/image/Wetick.png";
import avatar from "../../assets/image/Avatar.png";
import { Link, useNavigate } from "react-router-dom";
import "../Header/index.css";
import React from "react";
import axios from "../../utils/axios";

function Header() {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  axios.get(`user/${userId}`).then((response) => {
    localStorage.setItem("name", response.data.data[0].name);
  });

  const name = localStorage.getItem("name");

  return (
    <div className="header-body tes">
      <nav className="navbar navbar-expand-lg bg-white header-container">
        <div className="container">
          <a className="navbar-brand" href="/index.html">
            <img src={logo} alt="" width="150" height="60" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link current_page">
                  Home
                </Link>
                {/* <a
                  className="nav-link current_page"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a> */}
              </li>
              <li className="nav-item">
                <Link to="/detail" className="nav-link">
                  Create Event
                </Link>
                {/* <a className="nav-link" href="create">
                  Create Event
                </a> */}
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Location
                </Link>
                {/* <a className="nav-link" href="location">
                  Location
                </a> */}
              </li>
            </ul>
            <div className="d-flex gap-4">
              {isLogin ? (
                <>
                  <a
                    href="#"
                    className="mt-2 ava-container"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={avatar} alt="profile ava" className="ava-img" />
                  </a>
                  <a href="#" className="user-name fw-bold d-flex link-nodecor">
                    {name ? name : "Anonymous"}
                  </a>
                  {/* <p className="my-auto">{name || "Anonymous"}</p> */}
                </>
              ) : (
                <>
                  <button
                    className="btn btn-outline-primary"
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
        </div>
      </nav>
    </div>
  );
}

export default Header;
