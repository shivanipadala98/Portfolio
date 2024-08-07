import ContactMe from "./components/ContactMe/contactMe";
import Education from "./components/Education/education";
import Experience from "./components/Experience/experience";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";
import './global.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-content">
      <Home/>
      <Education/>
      <Experience/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      </div>
    </div>
  );
}

export default App;
