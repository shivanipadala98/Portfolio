import React, { useState } from "react";

const headerOptions = [
  {
    id: "#home",
    name: "HOME",
  },
  {
    id: "#education",
    name: "EDUCATION",
  },
  {
    id: "#experience",
    name: "EXPERIENCE",
  },
  {
    id: "#skills",
    name: "SKILLS",
  },
  {
    id: "#projects",
    name: "PROJECTS",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <>
      <div className="nav-bar">
        {headerOptions?.map((eachHeader, index) => {
          return (
            <div key={index} className="header-item">
              <a href={eachHeader.id}>{eachHeader.name}</a>
            </div>
          );
        })}
      </div>
      <div className="header">
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {menuOpen && (
        <div className="menu">
          {headerOptions.map((eachHeader, index) => (
            <a
              key={index}
              href={eachHeader.id}
              className="menu-item"
              onClick={() => setMenuOpen(false)}
            >
              {eachHeader.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default Header;
