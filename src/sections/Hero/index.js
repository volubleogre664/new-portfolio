import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="app__hero">
      <div className="app__heroIntro">
        <h1 className="app__heroIntroTitle">
          Hi, I'm <span className="name">Nduduzo Shabalala</span>.
        </h1>

        <h3 className="app__heroIntroSubtitle">
          My dream is to write coloured text for a living with SovTech.
        </h3>

        <a href="/#about" className="app__heroIntroBtn">
          Who am I <i className="far fa-question-circle"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
