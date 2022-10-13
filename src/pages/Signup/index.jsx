import Footer from "../../component/Footer";
import "../Signup/index.css";
import Logo from "../../assets/image/Wetick.png";
import LeftContainer from "../../component/Sign Left Container";
import axios from "../../utils/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    try {
      const result = await axios.post("auth/register", form);
      localStorage.setItem("idUser", result.data.data.userId);
      localStorage.setItem("token", result.data.data.token);
      alert(result.data.message);
      navigate("/signin");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword); // mengeset nilai kebalikan dari boolean
  };

  return (
    <>
      <div className="container-fluid bg-white">
        <div className="row">
          <LeftContainer />
          <div className="col-md-5 col-sm-12 right-container">
            <div className="contain">
              <div className="logo-contain mt-auto">
                <img src={Logo} className="logo" alt="" />
              </div>
              <p className="font-size-5 font-weight-bold mt-5">
                Sign Up <br />
              </p>
              <p className="fs-6">
                Already have an account?
                <a href="/signin">Log In</a>
              </p>
              <form>
                <div className="mb-3 rounded-pill">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Username"
                    name="username"
                    onChange={handleChangeForm}
                  />{" "}
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    name="email"
                    onChange={handleChangeForm}
                  />{" "}
                </div>
                <div className="mb-3 input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={handleChangeForm}
                  />{" "}
                  <span onClick={handleShowPassword}>
                    {showPassword ? (
                      <ion-icon
                        name="eye-off-outline"
                        class="btn-outline-primary icon fs-5 mt-1"
                      ></ion-icon>
                    ) : (
                      <ion-icon
                        name="eye-outline"
                        class="btn-outline-primary icon fs-5 mt-1"
                      ></ion-icon>
                    )}
                  </span>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input btn-outline-primary"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Accept terms and condition
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-primary shadow-lg signup-button"
                    type="button"
                    onClick={handleRegister}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer className="sign-footer" />
    </>
  );
}

export default Signup;
