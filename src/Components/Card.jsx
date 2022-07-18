import React from "react";
import design from "../assets/Design.png";
import sketch from "../assets/Sketch.png";
import testing from "../assets/Testing.png";

function Card() {
  const CardData = [
    {
      image: design,
      title: "Design",
      class: "card mx-4 my-5 card1",
    },
    {
      image: sketch,
      title: "Sketch",
      class: "card mx-4 my-5 card2",
    },
    {
      image: testing,
      title: "Testing",
      class: "card mx-4 my-5 card3",
    },
  ];
  return (
    <>
      {CardData.map((card, index) => {
        return (
          <div className={card.class} key={index}>
            <div className="d-flex justify-content-center my-5">
              <img src={card.image} alt="design" className="img-fluid" />
            </div>
            <div className="text-center my-2">
              <h3 className="card-title">{card.title}</h3>
              <h4 className="card-font">
                Lorm Spam Door
                <br />
                Somith Door
              </h4>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
