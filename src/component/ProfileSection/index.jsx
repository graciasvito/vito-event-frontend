// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
            <div className="d-flex">
              <ion-icon
                name="person-circle-outline"
                class="profile-icon mt-1"
              ></ion-icon>
              <p className="font-weight-bold ml-3">Profile</p>
            </div>

            <div className="d-flex submenu-profile">
              <ion-icon
                name="create-outline"
                class="profile-icon mt-1"
              ></ion-icon>
              <p className="font-weight-bold ml-3">Edit Profile</p>
            </div>
            <div className="d-flex submenu-profile">
              <ion-icon
                name="lock-open-outline"
                class="profile-icon mt-1"
              ></ion-icon>
              <p className="font-weight-bold ml-3">Change Password</p>
            </div>
          </div>
          <div className="d-flex mt-3">
            <ion-icon
              name="reorder-four-outline"
              class="profile-icon mt-1"
            ></ion-icon>
            <p className="font-weight-bold ml-3">My Booking</p>
          </div>
          <div className="d-flex mt-3">
            <ion-icon name="heart" class="profile-icon mt-1"></ion-icon>
            <p className="font-weight-bold ml-3">My Wishlist</p>
          </div>
          <div className="d-flex mt-3">
            <ion-icon
              name="settings-outline"
              class="profile-icon mt-1"
            ></ion-icon>
            <p className="font-weight-bold ml-3">Setting</p>
          </div>
          <div className="d-flex mt-3 logout-icon">
            <ion-icon
              name="log-out-outline"
              class="profile-icon mt-1"
            ></ion-icon>
            <p className="font-weight-bold ml-3">Logout</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidemenu;
