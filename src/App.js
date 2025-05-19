import { useState } from "react";
import logo from "./assets/images/logo.svg";
import sun from "./assets/images/icon-sun.svg";
import moon from "./assets/images/icon-moon.svg";
import logoDevLens from "./assets/images/logo-devlens.svg";
import styleSpy from "./assets/images/logo-style-spy.svg";
import speedBoost from "./assets/images/logo-speed-boost.svg";
import jsonWizard from "./assets/images/logo-json-wizard.svg";
import lobtabMaster from "./assets/images/logo-tab-master-pro.svg";
import viewPortBubby from "./assets/images/logo-viewport-buddy.svg";
import logoMakeUp from "./assets/images/logo-markup-notes.svg";
import logoGrid from "./assets/images/logo-grid-guides.svg";
import logoPallet from "./assets/images/logo-palette-picker.svg";
import logoLink from "./assets/images/logo-link-checker.svg";
import logoDom from "./assets/images/logo-dom-snapshot.svg";
import logoConsole from "./assets/images/logo-console-plus.svg";

const data = [
  {
    logo: logoDevLens,
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: styleSpy,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: speedBoost,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: jsonWizard,
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: lobtabMaster,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: viewPortBubby,
    name: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: logoMakeUp,
    name: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: logoGrid,
    name: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: logoPallet,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: logoLink,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: logoDom,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: logoConsole,
    name: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

export default App;

function Header() {
  const [colorChanges, setColorChanges] = useState(false);
  const [toggleAnimate, setToggleAnimate] = useState(false);

  const handleColorButton = () => {
    setColorChanges((prev) => !prev);
    setToggleAnimate(true);
    document.body.classList.toggle("light-theme");
    setTimeout(() => setToggleAnimate(false), 500);
  };

  return (
    <div className="header">
      <img className="img logo-animate" src={logo} alt="Extension Dashboard Logo" />
      <button
        onClick={handleColorButton}
        className="theme-toggle"
        aria-label={colorChanges ? "Switch to dark theme" : "Switch to light theme"}
      >
        <img
          className={toggleAnimate ? "toggle-animate" : ""}
          src={colorChanges ? moon : sun}
          style={{ cursor: "pointer" }}
          alt=""
        />
      </button>
    </div>
  );
}

function Main() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [extensions, setExtensions] = useState(data);

  const filteredData = extensions.filter((item) => {
    if (currentFilter === "all") return true;
    return currentFilter === "active" ? item.isActive : !item.isActive;
  });

  return (
    <div>
      <Hero setCurrentFilter={setCurrentFilter} currentFilter={currentFilter} />
      <Tabs data={filteredData} setExtensions={setExtensions} />
    </div>
  );
}

function Hero({ currentFilter, setCurrentFilter }) {
  return (
    <div className="hero">
      <div className="title-animate">
        <h1>Extensions List</h1>
      </div>
      <nav aria-label="Filter options">
        <div className="hero-btn">
          <button
            className={`button-animate ${currentFilter === "all" ? "active" : ""}`}
            style={{ animationDelay: "0s" }}
            onClick={() => setCurrentFilter("all")}
            aria-pressed={currentFilter === "all"}
          >
            All
          </button>
          <button
            className={`button-animate ${currentFilter === "active" ? "active" : ""}`}
            style={{ animationDelay: "0.1s" }}
            onClick={() => setCurrentFilter("active")}
            aria-pressed={currentFilter === "active"}
          >
            Active
          </button>
          <button
            className={`button-animate ${currentFilter === "inactive" ? "active" : ""}`}
            style={{ animationDelay: "0.2s" }}
            onClick={() => setCurrentFilter("inactive")}
            aria-pressed={currentFilter === "inactive"}
          >
            Inactive
          </button>
        </div>
      </nav>
    </div>
  );
}

function Tabs({ data, setExtensions }) {
  const toggleExtension = (name) => {
    setExtensions((prev) =>
      prev.map((ext) => (ext.name === name ? { ...ext, isActive: !ext.isActive } : ext))
    );
  };

  const removeExtension = (name) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== name));
  };

  return (
    <div className="grid-col-3">
      {data.map((item, index) => (
        <div className="grid-card card-animate" key={item.name} style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="grid-card-header">
            <img src={item.logo} width={36} alt={`${item.name} logo`} />
            <div className="grid-card-header__cont">
              <h4>{item.name}</h4>
              <span>{item.description}</span>
            </div>
          </div>
          <div className="grid-card-button">
            <button onClick={() => removeExtension(item.name)}>Remove</button>
            <label className="switch">
              <input
                type="checkbox"
                checked={item.isActive}
                onChange={() => toggleExtension(item.name)}
                aria-label={`Toggle ${item.name} extension`}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}