const style = document.createElement("link");
let theme = "dark";
style.rel = "stylesheet";

if (!getCookie("theme")) {
  console.log("Стандартная тема");
  const isLightScheme = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  if (isLightScheme) {
    style.href = "scheme-light.css";
    theme = "light";
  } else {
    style.href = "scheme-dark.css";
    theme = "dark";
  }
  changeTheme(theme);
  setCookie("theme", theme);
} else {
  theme = getCookie("theme");
  changeTheme(theme);
}

document.head.appendChild(style);

const changeThemeButton = document.querySelector("button.theme");
changeThemeButton.addEventListener("click", toggleTheme);

function toggleTheme() {
  const value = theme == "light" ? "dark" : "light";
  style.href = `scheme-${value}.css`;
  theme = value;
  setCookie("theme", theme);
}

function changeTheme(value) {
  style.href = `scheme-${value}.css`;
}

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
