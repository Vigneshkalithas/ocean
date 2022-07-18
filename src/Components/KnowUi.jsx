import React from "react";
import knowUiExpert from "../assets/undraw_about_me_wa29.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

function KnowUi() {
  return (
    <>
      <section className="container knowUiExpertContainer">
        <div className="row d-flex align-items-center my-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <img className="img-fluid" src={knowUiExpert} alt="knowUiImage" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-3">
            <h5>Know About UiExpert</h5>
            <p>
              I always follow professional Workflow and provide you best <br />
              service with resealable costs
            </p>
            <div className="video d-flex align-items-center">
              <BsFillPlayCircleFill color="#0013de" fontSize="3rem" />
              <div className="player mx-2"></div>
              <p className="mx-2 mt-2">See My Video Brif</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default KnowUi;
