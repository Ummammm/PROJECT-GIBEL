document.addEventListener("DOMContentLoaded", () => {
  const bootText = document.getElementById("boot-text");
  const bootScreen = document.getElementById("boot-screen");
  const mainUI = document.getElementById("main-ui");

  const bootLines = [
    ">> LOADING CORPORATE DATASTREAM...",
    ">> AUTHENTICATION BYPASSED...",
    ">> ACCESS GRANTED TO CORPORATE DOSSIER.",
    ">> DECRYPTING ENTRIES...",
    ">> STABILIZING INTERFACE...",
    ">> WELCOME TO PROTOCOL: GIBEL [CORPORATE ARCHIVE MODE]",
    "",
    ""
  ];

  let index = 0;

  function typeLine() {
    if (index < bootLines.length) {
      bootText.innerHTML += bootLines[index] + "\n";
      bootText.scrollTop = bootText.scrollHeight; // autoscroll
      index++;
      setTimeout(typeLine, 200);
    } else {
      setTimeout(() => {
        bootScreen.style.display = "none";
        mainUI.style.display = "block";
      }, 400);
    }
  }

  typeLine();
});
