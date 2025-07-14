document.addEventListener("DOMContentLoaded", () => {
  const bootText = document.getElementById("boot-text");
  const bootScreen = document.getElementById("boot-screen");
  const mainUI = document.getElementById("main-ui");

  const bootLines = [
    ">> RETRIEVING GIBEL DEVICE INDEX...",
    ">> DECODING FRACTAL SIGNALS...",
    ">> DEVICE ENERGY SIGNATURES VERIFIED...",
    ">> DISPLAYING ARCHIVE...\n"
  ];

  let i = 0;
  function typeBoot() {
    if (i < bootLines.length) {
      bootText.innerHTML += bootLines[i] + "\n";
      i++;
      setTimeout(typeBoot, 200);
    } else {
      setTimeout(() => {
        bootScreen.style.display = "none";
        mainUI.style.display = "block";
      }, 500);
    }
  }

  typeBoot();
});
