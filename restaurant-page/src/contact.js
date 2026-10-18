// contact.js
import { el } from "./dom.js";

const details = [
  { label: "Address", value: "123 Noodle Lane, Your City" },
  { label: "Phone", value: "(555) 013-2244" },
  { label: "Email", value: "hello@kopanoodlebar.example" },
  { label: "Hours", value: "Every day, 5 pm to 11 pm" },
];

export default function loadContact() {
  const content = document.querySelector("#content");

  const page = el("div", "page contact");
  page.append(
    el("h2", "headline", "Find us"),
    el("p", "lede", "Walk-ins only. We don't take reservations."),
  );

  const list = el("dl", "contact-list");
  details.forEach((detail) => {
    list.append(el("dt", null, detail.label), el("dd", null, detail.value));
  });

  page.appendChild(list);
  content.appendChild(page);
}
