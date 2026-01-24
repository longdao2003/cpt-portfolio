import initAboutUs from "./components/about-us.js";
import initHeader from "./components/header.js";
import initExperience from "./components/experience.js";
const initApp = () => {
  $("body").css({
    "user-select": "none",
    "-webkit-user-select": "none",
    "-moz-user-select": "none",
  });
  initHeader();
  initAboutUs();
  initExperience();
};

$.when($.ready).then(initApp);
