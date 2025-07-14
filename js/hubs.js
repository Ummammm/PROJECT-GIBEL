document.addEventListener("DOMContentLoaded", () => {
  const bootScreen = document.getElementById("boot-screen");
  const bootText = document.getElementById("boot-text");
  const mainUI = document.getElementById("main-ui");

  const bootLines = [
    "[BOOTING NODE: NEUTRAL_HUB_INTERFACE //]...",
    "[VERIFYING FREE-ZONE CLEARANCE]... ACCESS GRANTED",
    "[LOADING HUB CONNECTION INTERFACE]...",
    "[RETRIEVING LIST OF NON-ALIGNED ZONES]...",
    "",
    "███████████████████████████████████████████████████",
    ":: ACCESS LOG — NEUTRAL HUB ARCHIVE INTERFACE ::",
    "███████████████████████████████████████████████████",
    ""
  ];

  let lineIndex = 0;

  function typeLine() {
    if (lineIndex < bootLines.length) {
      bootText.innerHTML += bootLines[lineIndex] + '\n';
      lineIndex++;
      setTimeout(typeLine, 80);
    } else {
      bootScreen.style.display = "none";
      mainUI.style.display = "block";
    }
  }

  typeLine();
});
