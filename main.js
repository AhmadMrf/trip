import main_layout from "./src/component/main_layout";

const body = document.body;
body.innerHTML = main_layout();
location.hash = "";

const mainTag = body.querySelector("main");
const proceedBtn = mainTag.querySelector("#proceed");

const handlePages = (e) => {
  const hash = new URL(e.newURL).hash;
  mainTag.classList.toggle("home", hash === "#home");
  mainTag.classList.toggle("explore", hash === "#explore");
  mainTag.classList.remove("proceed");
};

proceedBtn.addEventListener("click", () => {
  mainTag.classList.toggle("proceed");
});
window.addEventListener("hashchange", handlePages);
