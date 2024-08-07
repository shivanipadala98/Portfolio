import ContactMe from "./components/ContactMe/contactMe";
import Education from "./components/Education/education";
import Experience from "./components/Experience/experience";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";
import "./global.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Home />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
      {/* Decorative Shapes */}
      <div className="decorative-shapes">
      <div className="decorative-shape circle"></div>
      <div className="decorative-shape triangle"></div>
      <div className="decorative-shape app-square"></div>
      <div className="decorative-shape app-square-grey"></div>
      <div className="decorative-shape ellipse"></div>
      <div className="decorative-shape diamond"></div>
      <div className="decorative-shape pentagon"></div>
      <div className="decorative-shape hexagon"></div>
      <div className="decorative-shape hexagon-color"></div>
      <div className="decorative-shape parallelogram"></div>
      <div className="decorative-shape star"></div>
      <div className="decorative-shape star-color"></div>
      </div>
    </div>
  );
}

export default App;
