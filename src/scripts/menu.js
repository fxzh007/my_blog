document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("expanded");
});

document.documentElement.addEventListener("scroll", () => {});

let oDiv = document.getElementById("backTop");
window.onscroll = function () {
  let height = document.documentElement.scrollTop || document.body.scrollTop;
  oDiv.style.opacity =
    height / (window.screen.availHeight * 4) < 1
      ? height / (window.screen.availHeight * 4)
      : 1;
  if (height <= window.screen.availHeight*2) {
    oDiv.style.opacity = "0";
  }
};

oDiv.onclick = function () {
  let height = document.documentElement.scrollTop || document.body.scrollTop;
  let t = setInterval(() => {
    height -= 100;
    if (height > 0) {
      window.scrollTo(0, height);
    } else {
      window.scrollTo(0, 0);
      clearInterval(t);
    }
  }, 10);
};

