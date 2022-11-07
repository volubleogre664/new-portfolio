import Header from "./components/Header/Header";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Project from "./sections/ProjectsSection";
import "./App.css";
import ContactForm from "./sections/Contact";

function App() {
  return (
    <div className="app">
      <Header />

      <Hero />

      <About />

      <Project />

      <ContactForm />

      <footer className="app__footer">
        <div className="app__footerContainer">
          <span className="iconContainer">
            <a
              href="https://github.com/volubleogre664/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-4x fa-github"></i>
            </a>
          </span>

          <span className="iconContainer">
            <a
              href="https://t.co/wUXGjFaVTo?amp=1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-4x fa-linkedin"></i>
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
