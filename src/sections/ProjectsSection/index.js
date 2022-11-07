import responsiteIcon from "../../assets/images/responsive-design.svg";
import devIcon from "../../assets/images/development.svg";
import appIcon from "../../assets/images/app-design.svg";
import blogFinder from "../../assets/images/blog-finder.png";
import qampus from "../../assets/images/qampus.png";
import Tile from "../../components/Tile/Tile";
import ProjectView from "../../components/Project";

function Project() {
  return (
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
        <ProjectView
          title="01. Qampus"
          img={qampus}
          privateRepo={true}
          preview="https://qampus.co.za/"
          description="Qampus (pronounced campus) is a platform that keeps students connected with the campus. It helps with things like buying used textbooks, finding your way around campus, and connecting with other students. It is a progressive web app built with React, Node, Apollo GraphQL, and MongoDB. The client app is hosted on firebase and the backend app is hosted on Heroku."
        />

        <ProjectView
          title="02. Blog Article Finder"
          img={blogFinder}
          github="https://github.com/volubleogre664/blog-finder.git"
          preview="https://find-blogs-1614938844000.web.app/"
          description="A web app to search for tech blogs (articles). This App uses the basic web tech stack which is HTML, CSS3 (SCSS) and Javascript. The searching of blog (articles) is achieved with the help of Google's Programmable Search Engine JSON API. The app is hosted on Firebase with their free domain name"
        />
      </div>
    </section>
  );
}

export default Project;
