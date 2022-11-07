import React from "react";
import myImage from "../../assets/images/66-NduduzoShabalala.jpg";
import csharp from "../../assets/images/icons8-c-sharp-logo-48.png";
import firebaseIcon from "../../assets/images/icons8-firebase-48.png";
import graphqlIcon from "../../assets/images/icons8-graphql-48.png";
import python from "../../assets/images/icons8-python-48.png";
import javaIcon from "../../assets/images/icons8-java-48.png";
import mongoDB from "../../assets/images/icons8-mongodb-48.png";
import gitIcon from "../../assets/images/icons8-git-48.png";

import "./About.css";

function About() {
  return (
    <section className="app__about" id="about">
      <h2 className="app__aboutTitle">About</h2>

      <div className="app__aboutBody">
        <aside className="app__aboutBodyBio">
          <h1 className="bio__title">Hey, lets know Nduduzo</h1>
          <p className="bio__description">
            I am a junior web developer with a strong passion in programming. I
            love creating products that are useful and solve problems. I am not
            looking for a place where I can put all the skils I have learned to
            good use. My goal is to learn as much as I can and get a glimpse of
            what it is like to work in a professional environment.
          </p>

          <p className="bio__description">
            <strong>Why I want to work for SovTech?</strong> <br />I have been
            following SovTech for a while now and I have been very much
            impressed by the work that you guys do. I would love to be part of
            the team and learn from the best. I am a fast learner and I am
            willing to learn as much as I can from you guys. SovTech is an ideal
            place for me to grow as a developer and I would love to be part of
            the team.
          </p>
        </aside>

        <main className="app__aboutBodyImage">
          <img src={myImage} alt="Nduduzo Shabalala" />
        </main>
      </div>

      <div className="app__aboutFooter">
        <h3>Current Tech Stack</h3>
        <div>
          <div>
            <i className="fab fa-4x fa-node"></i>
            <br />
            <span>NodeJS</span>
          </div>

          <div>
            <i className="fab fa-4x fa-react"></i>
            <br />
            <span>ReactJS</span>
          </div>

          <div>
            <i className="fab fa-4x fa-js-square"></i>
            <br />
            <span>JavaScript</span>
          </div>

          <div>
            <i className="fab fa-4x fa-html5"></i>
            <br />
            <span>HTML5</span>
          </div>

          <div>
            <i className="fab fa-4x fa-css3-alt"></i> <br />
            <span>CSS3</span>
          </div>

          <div>
            <img src={firebaseIcon} alt="Firebase" /> <br />
            <span>Firebase</span>
          </div>

          <div>
            <img src={javaIcon} alt="Firebase" /> <br />
            <span>Java</span>
          </div>

          <div>
            <img src={python} alt="Firebase" /> <br />
            <span>Python</span>
          </div>

          <div>
            <img src={graphqlIcon} alt="Firebase" /> <br />
            <span>GraphQL</span>
          </div>

          <div>
            <img src={csharp} alt="Firebase" /> <br />
            <span>C-Sharp</span>
          </div>

          <div>
            <img src={mongoDB} alt="Firebase" /> <br />
            <span>MongoDB</span>
          </div>

          <div>
            <img src={gitIcon} alt="Firebase" /> <br />
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
