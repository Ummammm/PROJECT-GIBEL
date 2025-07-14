window.onload = function () {
  const bootScreen = document.getElementById("boot-screen");
  const bootText = document.getElementById("boot-text");
  const mainUI = document.getElementById("main-ui");

  const bootLines = [
    ">> ACCESSING MINOR FACTION TERMINAL...",
    ">> INITIALIZING DIPLOMATIC LAYER HANDSHAKE...",
    ">> CONNECTION STABLE. AUTHENTICATING...",
    ">> FACTION INTEL DATABASE UNLOCKED.",
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
};
