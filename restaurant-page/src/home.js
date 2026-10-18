// home.js
import { el } from "./dom.js";

export default function loadHome() {
  const content = document.querySelector("#content");

  const page = el("div", "page home");

  const text = el("div", "home-text");
  text.append(
    el("h2", "headline", "Hand-pulled noodles. Slow broth. No shortcuts."),
    el(
      "p",
      "lede",
      "Our broth simmers for 14 hours and our noodles are pulled by hand every morning. Pull up a stool at the counter and watch your bowl come together.",
    ),
    el(
      "p",
      null,
      "Come hungry. Order at the counter, grab a seat, and your bowl will find you.",
    ),
  );

  const badge = el("div", "badge");
  badge.append(
    el("span", "badge-big", "5 pm"),
    el("span", "badge-small", "doors open, every day"),
  );

  page.append(text, badge);
  content.appendChild(page);
}
