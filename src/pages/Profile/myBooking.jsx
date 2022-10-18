import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Sidemenu from "../../component/ProfileSection";

export default function MyBooking() {
  return (
    <>
      <div className="profile-body">
        {/* HEADER */}
        <Header />
        {/* Main */}
        <section className="container-fluid profile-section-container">
          <Sidemenu />
          <div className="create-right-section-container ml-sm-5 ">
            <h3 className="ml-4 font-weight-bold mt-3">My Booking</h3>
          </div>
        </section>
        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
