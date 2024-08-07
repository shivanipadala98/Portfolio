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
      <div className="decorative-shape circle"></div>
      <div className="decorative-shape triangle"></div>
      <div className="decorative-shape app-square"></div>
      <div className="decorative-shape app-square-grey"></div>
      <div className="ellipse"></div>
      <div className="diamond"></div>
      <div className="pentagon"></div>
      <div className="hexagon"></div>
      <div className="hexagon-color"></div>
      <div className="parallelogram"></div>
      <div className="star"></div>
      <div className="star-color"></div>
    </div>
  );
}

export default App;
