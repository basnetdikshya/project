let noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function () {
  let x = Math.floor(Math.random() * 300) - 150;
  let y = Math.floor(Math.random() * 300) - 150;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function yesClicked() {
  document.getElementById("message").innerHTML =
    "YAYYY 😍💖 I KNEW IT! Love You Forever 🥰🌹";
}
