import React from "react";
import "./Home.css";

import portfolio3 from "../assets/Our portfolio_03.png";
import portfolio4 from "../assets/Our portfolio_04.png";
import portfolio5 from "../assets/Our portfolio_05.png";
import portfolio6 from "../assets/Our portfolio_06.png";

import HomeContainer from "../Components/HomeContainer";
import Service from "../Components/Service";
import KnowUi from "../Components/KnowUi";
import DublicatPortfolio from "../Components/DublicatPortfolio";
import About from "../Components/About";
import Blog from "../Components/Blog";
import Contact from "../Components/Contact";

function Home() {
  return (
    <>
      <HomeContainer />
      <Service />
      <KnowUi />
      <DublicatPortfolio />
      <About />
      <Blog />
      <Contact />
    </>
  );
}

export default Home;
