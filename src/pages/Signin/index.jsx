import "../Signin/index.css";
import Footer from "../../component/Footer";
import Banner from "../../assets/image/img banner.png";
import Logo from "../../assets/image/Wetick.png";

function Signin() {
  return (
    <>
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-7 container-color left-container">
            <div className="col-md-auto image-container">
              <img src={Banner} alt="" className="imgbanner" />
            </div>
          </div>

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
                <div className="mb-3 rounded-pill">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3 input-container">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <ion-icon
                    name="eye-outline"
                    class="btn-outline-primary icon fs-2"
                  ></ion-icon>
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
                  >
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" />
                  </button>
                  <button
                    className="btn btn-outline-primary facebook-logo"
                    type="button"
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signin;
