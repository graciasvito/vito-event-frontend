import logo from "../../assets/image/Wetick.png";
import "../Footer/index.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm">
              <img src={logo} alt="Logo" />
              <p className="mt-2 fw-bolder font-footer ms-2">
                Find event you love with us
              </p>
              <div className="ms-2 text-secondary">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-whatsapp" class="icon-footer"></ion-icon>
                <ion-icon name="logo-instagram" class="icon-footer"></ion-icon>
                <ion-icon name="logo-twitter" class="icon-footer"></ion-icon>
              </div>
            </div>
            <div className="col-sm">
              <p className="fw-bold mt-2 font-footer1">Wetick</p>
              <div className="row">
                <a
                  href="#"
                  className="text-decoration-none text-muted font-footer2 ms-1"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-muted font-footer2 mt-1 ms-1"
                >
                  Feature
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-muted font-footer2 mt-1 ms-1"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-muted font-footer2 mt-1 ms-1"
                >
                  Payment
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-muted font-footer2 mt-1 ms-1"
                >
                  Mobile App
                </a>
              </div>
            </div>
            <div className="col-sm">
              <p className="fw-bold mt-2 font-footer1">Feature</p>
              <div className="row">
                <a
                  href="#"
                  className="text-decoration-none text-muted font-footer2 ms-1"
                >
                  Booking
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-muted font-footer2 mt-1 ms-1"
                >
                  create Event
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-muted font-footer2 mt-1 ms-1"
                >
                  Discover
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-muted font-footer2 mt-1 ms-1"
                >
                  Register
                </a>
              </div>
            </div>
            <div className="col-sm">
              <p className="fw-bold mt-2 font-footer1">Company</p>
              <div className="row">
                <a
                  href="#"
                  className="text-decoration-none text-muted font-footer2 ms-1"
                >
                  Partnership
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-muted font-footer2 mt-1 ms-1"
                >
                  Help
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-muted font-footer2 mt-1 ms-1"
                >
                  Term of Service
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-muted font-footer2 mt-1 ms-1"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-decoration-none text-muted font-footer2 mt-1 ms-1"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="font-footer1 fw-bold container mt-5">
          © 2020 Wetick All Right Reserved
        </p>
      </footer>
    </div>
  );
}
