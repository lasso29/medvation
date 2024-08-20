import React from "react";
import { DiHtml53dEffects } from "react-icons/di";
import { IoAccessibility } from "react-icons/io5";
import { GrSupport } from "react-icons/gr";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";

const About = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center p-3">
        <div className="col-8 text-center">
          <h4 className="text-about-topic fs-2">Who We Are:</h4>
          <p className="about-text fs-5">
            Medvation is a cutting-edge platform dedicated to bridging the gap
            between medical professionals, students, and patients. Our mission
            is to empower users with easy access to valuable medical resources,
            expert insights, and up-to-date healthcare information. Whether
            you're a specialist sharing your expertise, a student researching
            the latest advancements, or a patient seeking reliable medical
            advice, Medvation is your trusted companion in the journey toward
            better health and knowledge.
          </p>
        </div>
      </div>

      <div className="container my-5">
        <p className="text-center fs-5">
          At Medvation, we prioritize your needs with a platform that offers:
        </p>
        <div className="row text-center">
          {/* Column 1 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="p-3 shadow rounded mx-auto d-flex flex-column align-items-center" 
                 style={{ maxWidth: "20rem", height: "250px" }}>
              <div className="icon-container mb-3">
                <IoAccessibility className="about-icon" />
              </div>
              <h4>Accessibility</h4>
              <p>
                Access medical resources and support anytime, anywhere.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="p-3 shadow rounded mx-auto d-flex flex-column align-items-center" 
                 style={{ maxWidth: "20rem", height: "253px" }}>
              <div className="icon-container mb-3">
                <DiHtml53dEffects className="about-icon" />
              </div>
              <h4>Efficiency</h4>
              <p>
                Quickly find the information and care you need with our streamlined interface.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="p-3 shadow rounded mx-auto d-flex flex-column align-items-center" 
                 style={{ maxWidth: "20rem", height: "253px" }}>
              <div className="icon-container mb-3">
                <GrSupport className="about-icon" />
              </div>
              <h4>24/7 Support</h4>
              <p>
                Get help whenever you need it with round-the-clock assistance.
              </p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="p-3 shadow rounded mx-auto d-flex flex-column align-items-center" 
                 style={{ maxWidth: "20rem", height: "253px" }}>
              <div className="icon-container mb-3">
                <AiFillSafetyCertificate className="about-icon" />
              </div>
              <h4>Certified Specialist</h4>
              <p>
                Learn from trusted and certified medical professionals dedicated to your success.
              </p>
            </div>
          </div>

          {/* Column 5 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="p-3 shadow rounded mx-auto d-flex flex-column align-items-center" 
                 style={{ maxWidth: "20rem", height: "253px" }}>
              <div className="icon-container mb-3">
              <RiTeamFill className="about-icon" />
              </div>
              <h4>Collaboration Opportunities</h4>
              <p>
                Connect and collaborate with other professionals, researchers, and patients for a holistic learning and healthcare experience.
              </p>
            </div>
          </div>

          {/* Column 6 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="p-3 shadow rounded mx-auto d-flex flex-column align-items-center" 
                 style={{ maxWidth: "20rem", height: "253px" }}>
              <div className="icon-container mb-3">
              <GrUpdate className="about-icon" />
              </div>
              <h4>Up-to-Date Information</h4>
              <p>
                Stay informed with the latest medical news and research, ensuring you have access to current and reliable information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
