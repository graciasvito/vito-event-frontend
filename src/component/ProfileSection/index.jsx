import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./index.css";

function Sidemenu() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const imgUserSource =
    "https://res.cloudinary.com/du0sbrocy/image/upload/v1663819188";
  const profileImage = user.data.image;
  const name = user.data.name;
  const profession = user.data.profession;

  const navigation = (link) => {
    navigate(`/profile${link}`);
  };
  const navigationAdmin = (link) => {
    navigate(`${link}`);
  };
  return (
    <div>
      <aside>
        <div className="section-left">
          <div className="section-img-container">
            <img src={`${imgUserSource}/${profileImage}`} alt="" />
          </div>
          <div>
            <p>{name}</p>
            <p>{profession}, ID</p>
          </div>
        </div>
        <div className="mt-4">
          <div className=" mt-3">
            <div className="d-flex">
              <ion-icon
                name="person-circle-outline"
                class="profile-icon mt-1"
              ></ion-icon>
              <Link
                className={
                  "font-weight-bold ml-xl-3 text-decoration-none text-dark"
                }
              >
                Profile
              </Link>
            </div>
            <button
              type="button"
              className="btn btn-outline-light text-dark font-weight-bold d-flex submenu-profile"
              onClick={() => navigation("/edit-profile")}
            >
              <ion-icon
                name="create-outline"
                class="profile-icon mt-1"
              ></ion-icon>
              <p className="font-weight-bold ml-xl-3 text-decoration-none text-dark">
                Edit Profile
              </p>
            </button>
            <button
              type="button"
              className="btn btn-outline-light text-dark font-weight-bold d-flex submenu-profile"
              onClick={() => navigation("/updatepass")}
            >
              <ion-icon
                name="lock-open-outline"
                class="profile-icon mt-1"
              ></ion-icon>
              <p className="font-weight-bold ml-xl-3 text-decoration-none text-dark">
                Password
              </p>
            </button>
          </div>
          <button
            type="button"
            className="btn btn-outline-light text-dark font-weight-bold d-flex"
            onClick={() => navigationAdmin("/create-event")}
          >
            <ion-icon
              name="add-circle-outline"
              class="profile-icon mt-1"
            ></ion-icon>
            <p className="font-weight-bold ml-xl-3 text-decoration-none text-dark">
              Create Event
            </p>
          </button>

          <button
            type="button"
            className="btn btn-outline-light text-dark font-weight-bold d-flex"
            onClick={() => navigation("/")}
          >
            <ion-icon
              name="reorder-four-outline"
              class="profile-icon mt-1"
            ></ion-icon>
            <p className="font-weight-bold ml-xl-3 text-decoration-none text-dark">
              My Booking
            </p>
          </button>
          <button
            type="button"
            className="btn btn-outline-light text-dark font-weight-bold d-flex"
            onClick={() => navigation("/")}
          >
            <ion-icon name="heart" class="profile-icon mt-1"></ion-icon>
            <p className="font-weight-bold ml-xl-3 text-decoration-none text-dark">
              My Wishlist
            </p>
          </button>
          <button
            type="button"
            className="btn btn-outline-light text-dark font-weight-bold d-flex"
            onClick={() => navigation("/")}
          >
            <ion-icon
              name="settings-outline"
              class="profile-icon mt-1"
            ></ion-icon>
            <p className="font-weight-bold ml-xl-3 text-decoration-none text-dark">
              Setting
            </p>
          </button>
          <button
            type="button"
            className="btn btn-outline-light text-dark font-weight-bold d-flex"
            onClick={() => navigation("/")}
          >
            <ion-icon
              name="log-out-outline"
              class="logout-icon mt-1"
            ></ion-icon>
            <p className="font-weight-bold ml-xl-3 text-decoration-none text-danger">
              Logout
            </p>
          </button>
        </div>
      </aside>
    </div>
  );
}

export default Sidemenu;
