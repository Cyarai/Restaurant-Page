// index.js
import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

// Each tab name maps to the function that builds that page.
const tabs = {
  home: loadHome,
  menu: loadMenu,
  contact: loadContact,
};

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("nav button");

function showTab(name) {
  // 1. wipe the current page
  content.replaceChildren();

  // 2. build the new one
  tabs[name]();

  // 3. highlight the active button
  buttons.forEach((button) => {
    if (button.dataset.tab === name) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => showTab(button.dataset.tab));
});

// Show the homepage when the site first loads.
showTab("home");
