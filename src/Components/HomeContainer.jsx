import React from "react";
import WaveMeButton from "./WaveMeButton";
import HomeLogo from "../assets/Home.png";

function HomeContainer() {
  return (
    <>
      <section className="container homeContainer">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="Text-provide my-3">
              Provide You best<br></br>Best Ui Service
            </h1>
            <h6 className="Text-mobile my-3">
              Mobile App Design and Development Studio. You can hire us
            </h6>
            <div className="my-5 mx-3">
              <WaveMeButton />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <img className="img-fluid" src={HomeLogo} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeContainer;
