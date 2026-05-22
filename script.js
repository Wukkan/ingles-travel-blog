const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".highlight-panel");
const tipButton = document.getElementById("tip-button");
const tipDetail = document.getElementById("tip-detail");
const foodButtons = document.querySelectorAll(".food-chip");
const foodDetail = document.getElementById("food-detail");

const foodDescriptions = {
  sushi: {
    title: "Fresh sushi",
    text: "Sushi is a traditional Japanese dish made with vinegared rice and fresh fish or seafood. It tasted light, fresh, and elegant.",
  },
  ramen: {
    title: "Hot ramen",
    text: "Ramen is a noodle soup with a rich broth, soft noodles, and toppings like pork, egg, or vegetables. It felt warm, comforting, and full of flavor.",
  },
  takoyaki: {
    title: "Takoyaki",
    text: "Takoyaki are small round balls made with batter and pieces of octopus. They were crispy outside, soft inside, and very popular as street food.",
  },
  yakitori: {
    title: "Yakitori",
    text: "Yakitori is grilled chicken on skewers. It is usually seasoned with salt or sauce, and it tasted smoky, juicy, and savory.",
  },
  taiyaki: {
    title: "Taiyaki",
    text: "Taiyaki is a fish-shaped sweet cake usually filled with red bean paste, cream, or chocolate. It was soft, sweet, and perfect as a snack.",
  },
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.target;

    tabs.forEach((item) => item.classList.remove("active"));
    panels.forEach((panel) => panel.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(targetId).classList.add("active");
  });
});

tipButton.addEventListener("click", () => {
  const isHidden = tipDetail.hasAttribute("hidden");

  if (isHidden) {
    tipDetail.removeAttribute("hidden");
    tipButton.textContent = "Hide tip details";
    return;
  }

  tipDetail.setAttribute("hidden", "");
  tipButton.textContent = "Why?";
});

foodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFood = foodDescriptions[button.dataset.food];

    foodButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    foodDetail.innerHTML = `
      <p class="food-detail-kicker">Selected dish</p>
      <h3>${selectedFood.title}</h3>
      <p>${selectedFood.text}</p>
    `;
  });
});
