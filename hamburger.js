const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".chats");
const shadow = document.createElement("div");
shadow.className = "shadow";

hamburger.addEventListener("click", () => {
  document.body.appendChild(shadow);
  sidebar.style.transform = "translateX(0)";
});

shadow.addEventListener("click", (e) => {
  document.body.removeChild(shadow);
  sidebar.style.transform = "translateX(-100%)";
});
