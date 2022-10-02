import Footer from "../../component/Footer";
import Banner from "../../assets/image/img banner.png";
import "../Signup/index.css";
import Logo from "../../assets/image/Wetick.png";

function Signup() {
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
                Sign Up <br />
              </p>
              <p className="fs-6">
                Already have an account?
                <a href="../Signin/signin.html">Log In</a>
              </p>
              <form>
                <div className="mb-3 rounded-pill">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Full Name"
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
                <div className="mb-3 input-container">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                  <ion-icon
                    name="eye-outline"
                    class="btn-outline-primary icon fs-2"
                  ></ion-icon>
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
      <Footer />
    </>
  );
}

export default Signup;
