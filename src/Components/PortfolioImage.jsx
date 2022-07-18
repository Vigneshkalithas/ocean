import React from "react";
import portfolio1 from "../assets/Our portfolio_01.png";
import portfolio2 from "../assets/Our portfolio_02.png";
import portfolio3 from "../assets/Our portfolio_03.png";
import portfolio4 from "../assets/Our portfolio_04.png";
import portfolio5 from "../assets/Our portfolio_05.png";
import portfolio6 from "../assets/Our portfolio_06.png";

function PortfolioImage() {
  const PortfolioImageDatas = [
    {
      image: portfolio1,
    },
    {
      image: portfolio2,
    },
    {
      image: portfolio3,
    },
    {
      image: portfolio4,
    },
    {
      image: portfolio5,
    },
    {
      image: portfolio6,
    },
  ];

  return (
    <>
      <div className="portfolio-flex">
        <div>
          <img
            src={portfolio1}
            alt="portfolio1"
            className="portfolio-image img-fluid"
          />
        </div>
        <div>
          <img
            src={portfolio2}
            alt="portfolio2"
            className="portfolio-image img-fluid"
          />
        </div>
      </div>

      <div className="portfolio-flex">
        <div>
          <img
            src={portfolio3}
            alt="portfolio1"
            className="portfolio-image img-fluid"
          />
        </div>
        <div>
          <img
            src={portfolio4}
            alt="portfolio2"
            className="portfolio-image img-fluid"
          />
        </div>
      </div>

      <div className="portfolio-flex">
        <div>
          <img
            src={portfolio5}
            alt="portfolio1"
            className="portfolio-image img-fluid"
          />
        </div>
        <div>
          <img
            src={portfolio6}
            alt="portfolio2"
            className="portfolio-image img-fluid"
          />
        </div>
      </div>
    </>
  );
}

export default PortfolioImage;
