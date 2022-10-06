import "../Signin/index.css";
import Footer from "../../component/Footer";
import LeftContainer from "../../component/Sign Left Container";
import Logo from "../../assets/image/Wetick.png";
import axios from "../../utils/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const result = await axios.post("auth/login", form);
      localStorage.setItem("userId", result.data.data.userId);
      localStorage.setItem("token", result.data.data.token);
      alert(result.data.message);
      navigate("/");
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

  const comingSoon = () => {
    alert("Stay Tuned, It's Coming Soon !");
  };
  return (
    <>
      <div className="container-fluid bg-white">
        <div className="row">
          <LeftContainer />
          <div className="col-md-5 col-sm-12 right-container">
            <div className="container row contain">
              <div className="logo-contain mt-auto">
                <img src={Logo} className="logo" alt="" />
              </div>

              <p className="fs-5 fw-bold mt-auto">
                Sign In <br />
              </p>
              <p className="fs-6">Hi, Welcome back to Urticket!</p>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
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
                <div className="mb-3 form-check text-end">
                  <label className="form-check-label">
                    <a href="../Signup/signup.html">Forgot Password?</a>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-primary shadow-lg signin-button"
                    type="button"
                    onClick={handleLogin}
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p className="fs-6">or sign in with</p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-primary google-logo"
                    type="button"
                    onClick={comingSoon}
                  >
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" />
                  </button>
                  <button
                    className="btn btn-outline-primary facebook-logo"
                    type="button"
                    onClick={comingSoon}
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="sign-footer" />
    </>
  );
}

export default Signin;
