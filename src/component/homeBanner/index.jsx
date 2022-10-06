import bannerBackground from "../../assets/image/Banner Background.png";
import imageBanner from "../../assets/image/img banner.png";
import "../homeBanner/index.css";

export default function Banner() {
  return (
    <>
      <section className="home-banner">
        <div className="home-image__overlay">
          <img src={imageBanner} alt="img banner" />
        </div>
        <div className="home-banner__overlay ms-4">
          <span className="home-banner__overlay--title fw-bolder container mb-4">
            Find event you love with our
          </span>
        </div>
        <div className="home-search__overlay">
          <form className="navbar-form home-input-container" role="search">
            <div className="input-group add-on">
              <ion-icon name="search-outline" class="home-icon"></ion-icon>
              <input
                className="form-control home-input-field home-input-left"
                placeholder="Search Event"
                name="srch-term"
                id="srch-term1"
                type="text"
              />
              <ion-icon name="location-outline" class="home-icon"></ion-icon>
              <input
                className="form-control home-input-field"
                placeholder="Where?"
                name="srch-term"
                id="srch-term2"
                type="text"
              />
              <div className="input-group-btn">
                <button className="btn home-button-color me-3" type="button">
                  <ion-icon
                    name="arrow-forward-outline"
                    class="pt-2 arrow-icon"
                  ></ion-icon>
                </button>
              </div>
            </div>
          </form>
        </div>

        <img src={bannerBackground} alt="" className="home-banner__image" />
      </section>
    </>
  );
}
