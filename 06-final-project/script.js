// 4.6 Theme: use a saved choice, otherwise use the system preference.
const themeButton = document.querySelector("#theme-button");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
let savedTheme = null;
try { savedTheme = localStorage.getItem("theme"); } catch {}
function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeButton.setAttribute("aria-pressed", String(isDark));
}
setTheme(savedTheme === "dark" ||
  (savedTheme !== "light" && systemTheme.matches));
themeButton.hidden = false;
themeButton.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  setTheme(isDark);
  try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch {}
});
// Project 4: mobile menu with keyboard and resize support.
const menuButton = document.querySelector("#menu-button");
const navLinks = document.querySelector("#nav-links");
const smallScreen = window.matchMedia("(max-width: 639px)");
function setMenu(isOpen) {
  navLinks.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
}
function syncMenu() {
  setMenu(false);
  menuButton.hidden = !smallScreen.matches;
}
menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});
navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a") && smallScreen.matches) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && smallScreen.matches &&
      menuButton.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menuButton.focus();
  }
});
smallScreen.addEventListener("change", syncMenu);
document.documentElement.classList.add("js");
syncMenu();
// Project 4: project filtering is the additional interaction.
const filters = document.querySelector("#filters");
const cards = [...document.querySelectorAll(".project-card")];
const count = document.querySelector("#project-count");
function filterProjects(category) {
  let visible = 0;
  cards.forEach((card) => {
    card.hidden = category !== "all" && card.dataset.category !== category;
    if (!card.hidden) visible += 1;
  });
  filters.querySelectorAll("button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === category));
  });
  count.textContent = `${visible} project${visible === 1 ? "" : "s"} shown`;
}
filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (button) filterProjects(button.dataset.filter);
});
filters.hidden = false;
count.hidden = false;
filterProjects("all");
