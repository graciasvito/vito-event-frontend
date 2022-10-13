// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./index.css";

function Sidemenu() {
  // const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const imgUserSource =
    "https://res.cloudinary.com/du0sbrocy/image/upload/v1663819188";
  const profileImage = user.data.image;
  const name = user.data.name;
  const profession = user.data.profession;

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
            <div className="d-flex ">
              <ion-icon
                name="person-circle-outline"
                class="profile-icon mt-1"
              ></ion-icon>
              <Link className="font-weight-bold ml-xl-3 text-decoration-none text-dark">
                Profile
              </Link>
            </div>

            <div className="d-flex submenu-profile">
              <ion-icon
                name="create-outline"
                class="profile-icon mt-1"
              ></ion-icon>
              <Link
                to="/profile/edit-profile"
                className="font-weight-bold ml-xl-3 text-decoration-none text-dark"
              >
                Edit Profile
              </Link>
            </div>
            <div className="d-flex submenu-profile">
              <ion-icon
                name="lock-open-outline"
                class="profile-icon mt-1"
              ></ion-icon>
              <Link className="font-weight-bold ml-xl-3 text-decoration-none text-dark">
                Change Password
              </Link>
            </div>
          </div>
          <div className="d-flex mt-3">
            <ion-icon
              name="add-circle-outline"
              class="profile-icon mt-1"
            ></ion-icon>
            <Link
              to="/create-event"
              className="font-weight-bold ml-xl-3 text-decoration-none text-dark"
            >
              Create Event
            </Link>
          </div>
          <div className="d-flex mt-3">
            <ion-icon
              name="reorder-four-outline"
              class="profile-icon mt-1"
            ></ion-icon>
            <Link className="font-weight-bold ml-xl-3 text-decoration-none text-dark">
              My Booking
            </Link>
          </div>
          <div className="d-flex mt-3">
            <ion-icon name="heart" class="profile-icon mt-1"></ion-icon>
            <Link className="font-weight-bold ml-xl-3 text-decoration-none text-dark">
              My Wishlist
            </Link>
          </div>
          <div className="d-flex mt-3">
            <ion-icon
              name="settings-outline"
              class="profile-icon mt-1"
            ></ion-icon>
            <Link className="font-weight-bold ml-xl-3 text-decoration-none text-dark">
              Setting
            </Link>
          </div>
          <div className="d-flex mt-3 logout-icon">
            <ion-icon
              name="log-out-outline"
              class="profile-icon mt-1"
            ></ion-icon>
            <Link className="font-weight-bold ml-xl-3 text-decoration-none text-dark">
              Logout
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidemenu;
