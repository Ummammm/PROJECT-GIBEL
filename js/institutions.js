document.addEventListener("DOMContentLoaded", () => {
  const bootText = document.getElementById("boot-text");
  const mainUI = document.getElementById("main-ui");
  const bootLines = [
    "[INITIALIZING INSTITUTIONAL ARCHIVE SYSTEM...]",
    "[ESTABLISHING ENCRYPTED NEXUS LINK...]",
    "[GRANTED ACCESS: CIVILIAN TIER-3]",
    "[RETRIEVING DATABASE: PROTOCOL_GIBEL//INSTITUTIONS...]",
    "[LOCATING PUBLIC DOSSIERS...]",
    "[DECRYPTING... ██████████████████████████]",
    "[COMPLETE.]",
    "",
    ":: LOADING INSTITUTION DIRECTORY INTERFACE ::"
  ];

  let index = 0;

  function typeLine() {
    if (index < bootLines.length) {
      bootText.innerHTML += bootLines[index] + "\n";
      index++;
      setTimeout(typeLine, 100); // Speed of typing
    } else {
      setTimeout(() => {
        document.getElementById("boot-screen").style.display = "none";
        mainUI.style.display = "block";
      }, 600); // Delay after last line
    }
  }

  typeLine();
});
