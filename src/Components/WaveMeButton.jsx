import React from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import waveIcon from "../assets/waving-hand.png";

function WaveMeButton() {
  return (
    <>
      <button className="btn btn-lg btn-primary waveme-button">
        <span className="mx-2">
          <img src={waveIcon} alt="waveicon" className="waveicon" />
        </span>
        <span className="wave-me">Wave Me</span>
      </button>
    </>
  );
}

export default WaveMeButton;
