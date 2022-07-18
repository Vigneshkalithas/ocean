import React from "react";
import websiteUi from "../assets/Website Ui-1.png";
import redesign from "../assets/ReDesign-1.png";
import applicationUi from "../assets/Application Ui-1.png";
import mobileApp from "../assets/Mobile App Ui-1.png";
import webApp from "../assets/Web App Ui-1.png";
import webElement from "../assets/Web Elements-1.png";

function Service() {
  const ServiceDatas = [
    {
      image: websiteUi,
      title: "Website Ui",
      class: "card card-orange",
    },
    {
      image: redesign,
      title: "ReDesign",
      class: "card card-skyblue",
    },
    {
      image: applicationUi,
      title: "Applicaon Ui",
      class: "card card-blue",
    },
  ];

  const ServiceDatas2 = [
    {
      image: mobileApp,
      title: "Mobile App Ui",
      class: "card card-darkblue",
    },
    {
      image: webApp,
      title: "Web App Ui",
      class: "card card-lightblue",
    },
    {
      image: webElement,
      title: "Web Elements",
      class: "card card-red",
    },
  ];

  return (
    <>
      <section className="container serviceContainer">
        <div className="row my-4">
          <h6 className="my-1">OUR SERVICES</h6>
          <h4 className="my-1">We Provide Best Quality Service</h4>
          <p className="my-1">
            Our commitment to quality ensures that your applications get the
            best UI design
            <br />
            possible. UI/UX design is more than just pixels and animations, but
            the entire application
            <br />
            experience.
          </p>
        </div>

        <div className="row">
          {ServiceDatas.map((data, index) => {
            return (
              <div className="col-lg-4 my-4">
                <div className={data.class} key={index}>
                  <div className="d-flex justify-content-center my-5">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="my-3 img-fluid image-card"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text my-2">
                      Fast, Powerful & Most Secure Network
                      <br />
                      Solutions for Smart Home & Businesses
                    </p>
                    <button className="btn btn-sm my-3 px-3 py-2">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row">
          {ServiceDatas2.map((data, index) => {
            return (
              <div className="col-lg-4 my-4">
                <div className={data.class} key={index}>
                  <div className="d-flex justify-content-center my-5">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="my-3 img-fluid image-card"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text my-2">
                      Fast, Powerful & Most Secure Network
                      <br />
                      Solutions for Smart Home & Businesses
                    </p>
                    <button className="btn btn-sm my-3 px-3 py-2">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Service;
