import React from "react";
import LandingNavBar from "../component/LandingNavBar";
import LandingFooter from "../component/LandingFooter";
import slidin1 from "../assets/images/sliding-one.jpg";
import slidin2 from "../assets/images/sliding-two.jpg";
import slidin3 from "../assets/images/sliding-three.jpg";
import About from "../component/About";
import AppointmentForm from "../component/AppointmentForm";

const Landingpage = () => {
  return (
    <div>
      <LandingNavBar />
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active border"
            style={{
              height: "90vh",
              backgroundImage: `url(${slidin1})`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="cover w-100 h-100 d-md-flex justify-content-center align-items-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.63)" }}
            >
              <div className="text-center col-md-5 pt-5 pt-md-0 coverText container">
                <h4
                  className="text-information text-white"
                  style={{ fontSize: "50px" }}
                >
                  "Your Gateway to Comprehensive Medical Resources"
                </h4>
                <p className="text-information-small text-white fs-3">
                  Welcome to our platform where medical specialists share their
                  expertise and knowledge with the world. Whether you're a
                  student, researcher, or patient, you'll find valuable
                  resources tailored to your needs.
                </p>
              </div>
            </div>
          </div>

          <div
            className="carousel-item border"
            style={{
              height: "89vh",
              backgroundImage: `url(${slidin2})`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="cover w-100 h-100 d-md-flex justify-content-center align-items-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.63)" }}
            >
              <div className="text-center col-md-5 pt-5 pt-md-0 coverText container">
                <h4
                  className="text-information text-white"
                  style={{ fontSize: "50px" }}
                >
                  "Discover Expert-Curated Medical Resources to Elevate Your
                  Knowledge and Stay Ahead in Your Field"
                </h4>
                <p className="text-information-small text-white fs-3">
                  Explore a wealth of medical resources curated by experts in
                  the field. From research papers to instructional videos, we
                  have everything you need to stay ahead in your medical
                  journey.
                </p>
              </div>
            </div>
          </div>

          <div
            className="carousel-item border"
            style={{
              height: "89vh",
              backgroundImage: `url(${slidin3})`,
              backgroundSize: "cover",
            }}
          >
            <div
              className="cover w-100 h-100 d-md-flex justify-content-center align-items-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.63)" }}
            >
              <div className="text-center col-md-5 pt-5 pt-md-0 coverText container">
                <h4
                  className="text-information text-white"
                  style={{ fontSize: "50px" }}
                >
                  "Your Trusted Source for the Latest Medical News and
                  Healthcare Advancements"
                </h4>
                <p className="text-information-small text-white fs-3">
                  Stay informed with our regularly updated medical news section.
                  Get insights into the latest advancements in healthcare and
                  medicine.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
      <br />
      <About />
      <AppointmentForm />
      <LandingFooter />
    </div>
  );
};

export default Landingpage;
