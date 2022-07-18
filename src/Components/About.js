import React from "react";
import cris from "../assets/gettyimages-507480872-612x612.png";
import WaveMeButton from "./WaveMeButton";
import Card from "./Card";
import workflowimage from "../assets/undraw_social_networking_nqk4.png";
import Review from "./Review";

function About() {
  return (
    <>
      <section className="container-fluid crisContainer mb-4">
        <div className="row cris1Row">
          <div className="col my-3">
            <h2 className="my-4">What they say about us!</h2>
            <p className="my-4">
              Customer Review Sites for Collecting Business & Product Reviews
            </p>
            <div className="my-5 mx-2">
              <img src={cris} alt="cris" className="img-fluid mt-5" />
            </div>
            <p className="my-2">
              Loved the design specially the color combination. Look forward to{" "}
              <br />
              work more in future.
            </p>
            <h4 className="my-3">Cris Angela</h4>
            <p className="my-2">Head Of CsWeb</p>
          </div>
        </div>
        <div className="row my-5 mx-5 cris2Row">
          <div className="col my-5">
            <p className="mt-3">Learn About My Workflow:</p>
            <h2 className="text-right my-2">
              I'm always hungry for creativity. <br />
              Available for hire
            </h2>
          </div>
          <div className="col my-5 cris4col">
            <div>
              <WaveMeButton />
            </div>
          </div>
        </div>
      </section>

      <section className="container cardContainer">
        <div className="row d-flex justify-content-center">
          <Card />
        </div>
      </section>

      <section className="container workFlowContainer">
        <div className="row">
          <div className="col mx-1 my-5">
            <div className="">
              <img
                src={workflowimage}
                alt="workflowimage"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col mx-1">
            <div>
              <h5 className="my-2">Our Workflow</h5>
              <p className="">
                I always follow professional Workflow and provide you best{" "}
                <br />
                service with resealable costs.
              </p>
            </div>
            <div className="review my-5">
              <div className="row">
                <Review />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
