function selectTheme(theme) {
  switch (theme) {
    case "dark":
      return true;
    case "light":
      return false;
    default:
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
}

function setTheme(isDark) {
  localStorage.setItem("theme", isDark ? "dark" : "light");
  const body = document.querySelector("body");
  if (isDark) {
    body.setAttribute("theme", "dark");
  } else {
    body.setAttribute("theme", "light");
  }
}

function toggleTheme() {
  setTheme(!selectTheme(localStorage.getItem("theme")));
}

const isDark = selectTheme(localStorage.getItem("theme"));
localStorage.setItem("theme", isDark ? "dark" : "light");
setTheme(isDark);

addEventListener("storage", (event) => {});
onstorage = (event) => {
  if (event.key === "theme") {
    setTheme(selectTheme(localStorage.getItem("theme")));
  }
};

const button = document.querySelector(".dark-toggle");
button.addEventListener("click", function (event) {
  toggleTheme();
});
