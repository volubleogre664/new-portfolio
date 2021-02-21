import Header from "./Header/Header";
import Skill from "./Skill/Skill";
import responsiteIcon from "./responsive-design.svg";
import devIcon from "./development.svg";
import appIcon from "./app-design.svg";
import amazonClone from "./amazon-clone.png";
import chatImg from "./chat.png";
import Tile from "./Tile/Tile";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <section className="app__hero">
        <div className="app__heroIntro">
          <h1 className="app__heroIntroTitle">
            Hi, I'm <span className="name">Nduduzo Shabalala</span>.
          </h1>

          <h3 className="app__heroIntroSubtitle">
            I'm one of those developers who signed a life-long contract with
            endless learning.
          </h3>

          <a href="/#about" className="app__heroIntroBtn">
            Who am I <i className="far fa-question-circle"></i>
          </a>
        </div>
      </section>

      <section className="app__about" id="about">
        <h2 className="app__aboutTitle">About</h2>

        <div className="app__aboutBody">
          <aside className="app__aboutBodyBio">
            <h1 className="bio__title">Hey, lets know Nduduzo</h1>
            <p className="bio__description">
              I am a junior web developer with a strong passion in programming.
              I love creating web products and I put a lot of pride in my work
              and I enjoy seeing my good work reaching other people.
            </p>
            <p className="bio__description">
              I have been learning and working on my web developer skills. Now I
              am taking on a new journey of job search. Currently I am open to
              any work or collaborations related to web development, so do{" "}
              <a href="/#contact">get in touch.</a>
            </p>

            <a href="/resume" className="bio__resume">
              View my resume...
            </a>
          </aside>

          <aside className="app__aboutBodySkills">
            <div className="skills__container">
              <Skill name="HTML" value={80} />
              <Skill name="CSS" value={80} />
              <Skill name="JavaScript" value={65} />
              <Skill name="React" value={60} />
              <Skill name="Node.JS" value={50} />
              <Skill name="Core C#" value={50} />
              <Skill name="Git" value={65} />
            </div>
          </aside>
        </div>

        <div className="app__aboutFooter"></div>
      </section>

      <section className="app__projects" id="projects">
        <h2 className="app__projectsTitle">My Work</h2>

        <div className="app__projectsAttribution">
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/flat-icons"
            title="Flat Icons"
          >
            Flat Icons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div className="app__projectsAttribution">
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>

        <div className="app__projectsTiles">
          <Tile
            img={responsiteIcon}
            title="Responsiveness"
            summary="I build one size fit all products with mobile-first approach"
          />

          <Tile
            img={appIcon}
            title="Progressive Web Apps"
            summary="Why mobile apps if we can have native functionality on web apps with PWAs?"
          />

          <Tile
            img={devIcon}
            title="Fullstack JavaScript"
            summary="Fullstack JS web apps powered by the awesome MERN Stack"
          />
        </div>

        <div className="app__projectsWork">
          <div className="project">
            <h2 className="project__title">01. Amazon Clone</h2>

            <img
              className="project__img"
              src={amazonClone}
              alt="project image"
            />

            <div className="project__stack">
              <i className="fab fa-4x fa-react"></i>
              <i className="fab fa-4x fa-css3"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="firebase"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#ff8f00"
                  d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
                />
                <path
                  fill="#ffa000"
                  d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
                />
                <path
                  fill="#ff6f00"
                  d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
                />
                <path
                  fill="#ffc400"
                  d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
                />
              </svg>
            </div>

            <p className="projectDescription">
              This one is a full firebase application. It utilises
              authentication from firebase and the user data is stored in
              firebase's firestore. This was to implement a simple yet powerful
              e-commerce functionality. This app has full basket functionality.
              The state of the app is managed with the React Context API(similar
              to Redux just a bit less powerful).
            </p>

            <div className="project__btns">
              <a
                href="https://challenge-e828d.web.app/"
                className="project__btn"
                target="_blank"
              >
                <i className="fas fa-eye"></i> Preview
              </a>
            </div>
          </div>

          <div className="project">
            <h2 className="project__title">02. Chat Application</h2>

            <img className="project__img" src={chatImg} alt="project image" />

            <div className="project__stack">
              <i className="fab fa-4x fa-node"></i>
              <i className="fab fa-4x fa-react"></i>
              <i className="fab fa-4x fa-css3"></i>
            </div>

            <p className="projectDescription">
              This is a awesome chat application made with the MERN Stack. This
              app features the great features of react. From hooks to state
              management with React Context API. All of the code is in
              JavaScript ES6. In the backend it is powered by express and
              MongoDB to bring user Authentication. I made use of Pusher to make
              it a realtime chatting app.
            </p>

            <div className="project__btns">
              <a
                href="https://github.com/volubleogre664/chat-app.git"
                className="project__btn"
                target="blank"
              >
                <i className="fab fa-github"></i> Github
              </a>
              <a
                href="https://chat-app-4a595.web.app/"
                className="project__btn"
                target="_blank"
              >
                <i className="fas fa-eye"></i> Preview
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="app__contact" id="contact">
        <h2 className="app__contactTitle">Contact</h2>

        <h3 className="app__contactSubtitle">Get in touch and let's talk.</h3>

        <form className="app__contactForm">
          <input
            type="text"
            placeholder="Name(s)"
            className="app__contactFormInput"
          />

          <input
            type="text"
            placeholder="Email"
            className="app__contactFormInput"
          />

          <textarea
            className="app__contactFormInput"
            placeholder="Your Message"
          ></textarea>

          <button type="submit" className="app__contactFormBtn">
            Send
          </button>
        </form>
      </section>

      <footer className="app__footer">
        <div className="app__footerContainer">
          <span className="iconContainer">
            <a href="https://github.com/volubleogre664/" target="_blank">
              <i className="fab fa-4x fa-github"></i>
            </a>
          </span>

          <span className="iconContainer">
            <a href="https://t.co/wUXGjFaVTo?amp=1" target="_blank">
              <i className="fab fa-4x fa-linkedin"></i>
            </a>
          </span>

          <span className="iconContainer">
            <a href="https://twitter.com/theReactDude" target="_blank">
              <i className="fab fa-4x fa-twitter"></i>
            </a>
          </span>
        </div>

        <div className="app__footerDisclaimer">
          2021 &copy; Nduduzo Shabalala
        </div>
      </footer>
    </div>
  );
}

export default App;
