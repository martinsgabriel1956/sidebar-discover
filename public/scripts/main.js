const elements = {
  allSidebarText: document.querySelectorAll("aside span"),
  sideBar: document.querySelector("aside"),
  hamburgerMenu: document.querySelector(".logo-container button"),
  logo: document.querySelector(".logo"),
  avatar: document.querySelector(".avatar"),
  main: document.querySelector("main"),
  logoContainer: document.querySelector(".logo-container"),
  userContainer: document.querySelector(".user-info-container"),
}

const { allSidebarText, avatar, hamburgerMenu, logo, logoContainer, main, sideBar, userContainer } = elements;

hamburgerMenu.addEventListener("click", () => {
  allSidebarText.forEach((item) => {
    item.classList.toggle("short");
  });
  logo.classList.toggle("short");
  logoContainer.classList.toggle("minimized");
  avatar.classList.toggle("short");
  userContainer.classList.toggle("minimized");
  main.classList.toggle("minimized");
});
