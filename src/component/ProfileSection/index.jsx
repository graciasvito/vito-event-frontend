export default function profileSection() {
  return (
    <aside>
      <div className="profile-left">
        <div className="img-container">
          <img src="../assets/Avatar.png" alt="" />
        </div>
        <div>
          <p>Jhon Tomson</p>
          <p>Entrepreneur, ID</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="d-flex mt-3">
          <ion-icon
            name="person-circle-outline"
            class="profile-icon mt-1"
          ></ion-icon>
          <p className="font-weight-bold ml-3">Profile</p>
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
          <ion-icon name="log-out-outline" class="profile-icon mt-1"></ion-icon>
          <p className="font-weight-bold ml-3">Logout</p>
        </div>
      </div>
    </aside>
  );
}
