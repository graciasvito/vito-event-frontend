import logo from "../../assets/image/Wetick.png";
// import avatar from "../../assets/image/Avatar.png";
import { Link, useNavigate } from "react-router-dom";
import "../Header/index.css";
import React from "react";
// import axios from "../../utils/axios";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const name = user.data.name;
  const imgSource =
    "https://res.cloudinary.com/du0sbrocy/image/upload/v1663819188";
  const profileImage = user.data.image;
  const isLogin = localStorage.getItem("token");
  // const userId = localStorage.getItem("userId");

  const handleNavigate = (nav) => {
    navigate(`/${nav}`);
  };
  // axios.get(`user/${userId}`).then((response) => {
  //   localStorage.setItem("name", response.data.data[0].name);
  // });

  // const name = localStorage.getItem("name");

  return (
    <div className="header-body tes">
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
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/detail" className="nav-link">
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
                  href="#"
                  className="mt-2 ava-container"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`${imgSource}/${profileImage}`}
                    alt="profile ava"
                    className="ava-img"
                  />
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
      </nav>
    </div>
  );
}

export default Header;
