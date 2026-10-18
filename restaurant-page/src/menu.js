// menu.js
import { el } from "./dom.js";

const dishes = [
  {
    name: "Kopa Classic",
    description: "Pork bone broth, hand-pulled noodles, soft egg, scallion.",
    price: "$12",
  },
  {
    name: "Chili Oil Dry Noodles",
    description: "No soup. Garlic, black vinegar, crushed peanuts, hot chili oil.",
    price: "$11",
  },
  {
    name: "Mushroom Miso Bowl",
    description: "Vegetarian. Shiitake, miso broth, bok choy, tofu.",
    price: "$12",
  },
  {
    name: "Beef Shank Noodle Soup",
    description: "Braised for four hours, served with pickled greens.",
    price: "$14",
  },
  {
    name: "Pork Dumplings (6)",
    description: "Pan-fried, with ginger-soy dipping sauce.",
    price: "$7",
  },
  {
    name: "Iced Calamansi Tea",
    description: "Not too sweet. Free refills.",
    price: "$3",
  },
];

export default function loadMenu() {
  const content = document.querySelector("#content");

  const page = el("div", "page menu");
  page.appendChild(el("h2", "headline", "Menu"));

  const list = el("ul", "dish-list");

  dishes.forEach((dish) => {
    const item = el("li", "dish");

    const info = el("div", "dish-info");
    info.append(
      el("h3", "dish-name", dish.name),
      el("p", "dish-description", dish.description),
    );

    item.append(info, el("span", "dish-price", dish.price));
    list.appendChild(item);
  });

  page.appendChild(list);
  content.appendChild(page);
}
