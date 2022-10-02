import logo from "../../assets/image/Wetick.png";
import avatar from "../../assets/image/Avatar.png";
import "../Header/index.css";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white">
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
                <a
                  className="nav-link current_page"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="create">
                  Create Event
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="location">
                  Location
                </a>
              </li>
            </ul>
            <div className="d-flex gap-4">
              <a href="#" className="mt-2 ava-container">
                <img src={avatar} alt="profile ava" className="ava-img" />
              </a>
              <a href="#" className="user-name fw-bold d-flex link-nodecor">
                John Thomson
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
