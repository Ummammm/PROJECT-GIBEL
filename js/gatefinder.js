document.addEventListener("DOMContentLoaded", () => {
  const bootText = document.getElementById("boot-text");
  const bootScreen = document.getElementById("boot-screen");
  const mainUI = document.getElementById("main-ui");

  const bootLines = [
    ">> INITIALIZING GATE FINDER DATABASE...",
    ">> LOADING OPERATIVE FILES...",
    ">> MATCHING BIOMETRICS...",
    ">> ACCESS GRANTED. DISPLAYING AGENT LOGS...",
    "",
    ""
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
      }, 400);
    }
  }

  typeBoot();
});
