import initAboutUs from "./components/about-us.js";
import initHeader from "./components/header.js";
import initExperience from "./components/experience.js";
import initProject from "./components/project.js";
import initBanner from "./components/banner.js";
import initMainTitle from "./components/main-title.js";
const initApp = () => {
  gsap.registerPlugin(ScrollTrigger);

  initHeader();
  initBanner();
  initAboutUs();
  initExperience();
  initProject();
  initMainTitle();
};

$.when($.ready).then(initApp);
