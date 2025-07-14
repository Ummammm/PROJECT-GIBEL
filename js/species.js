document.addEventListener("DOMContentLoaded", () => {
  const bootText = document.getElementById("boot-text");
  const entryUI = document.getElementById("entry-ui");
  const bootScreen = document.getElementById("boot-screen");

  const lines = [
    "BOOT SEQUENCE INITIATED…",

"> LOADING DATABASE: [GALACTIC SPECIES INDEX]...",
"> ACCESS LEVEL: NIEMAND.EXPLORER.LOG",
"> DECRYPTING DATA MODULE…",
"> READING FILE STRUCTURE: KNOWN SENTIENT LIFEFORMS",
"> STANDBY...",

"CONNECTED TO ARCHIVE CORE ██.██.██.██::PORT//476-A",

  ];

  let i = 0;

  function showNextLine() {
    if (i < lines.length) {
      bootText.textContent += lines[i] + "\n";
      i++;
      setTimeout(showNextLine, 500);
    } else {
      setTimeout(() => {
        bootScreen.style.display = "none";
        entryUI.style.display = "block";
      }, 500);
    }
  }

  showNextLine();
});
