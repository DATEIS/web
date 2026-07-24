const disappearingText = document.getElementById("disapText");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    disappearingText.style.opacity = 0;
  } else {
    disappearingText.style.opacity = 1;
  }
});
