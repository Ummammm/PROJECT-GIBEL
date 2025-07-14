const bootLines = [
  "[Pale Fold Terminal – Booting...]",
  "  ",
"> SYSTEM LOG LOADER INITIALIZING...",
"> CONNECTION: OFFLINE",
"> ENCRYPTION: NONE",
"> LOG AUTHOR: “NIEMAND”",
"> LOCATION: Unknown (Starmap data corrupted)",
  "  ",
"[DATASET: OBSERVATIONS – SECTOR WIDE PHENOMENA]",
"[ENTRY COUNT: 127 AND RISING...]",

"> Personal Log Viewer: ACTIVE",
"> Timestamp Sync: UNSTABLE",
"> Sensory Feed Patching: ERRATIC",
"> Memory Integrity: *Fragmented*",
  "  ",
"[NOTE]",
"These records are drawn from experience, rumor, and things that should not be remembered.",  
"There are no guarantees of accuracy. Only survival.",
  "  ",
"Proceed at your own risk.",
  "  ",
"> LOADING FIRST LOG...",
  "  ",
"..."
];

const bootTextEl = document.getElementById("boot-text");
const bootScreen = document.getElementById("boot-screen");
const mainUI = document.getElementById("main-ui");



let lineIndex = 0;

function typeLine() {
  if (lineIndex >= bootLines.length) {
    // Boot complete → show main UI after slight delay
    setTimeout(() => {
      bootScreen.style.display = "none";
      mainUI.style.display = "block";
    }, 1000);
    return;
  }

  const line = bootLines[lineIndex];
  let charIndex = 0;
  const typingInterval = setInterval(() => {
    if (charIndex < line.length) {
      bootTextEl.textContent += line.charAt(charIndex);

      charIndex++;
    } else {
      clearInterval(typingInterval);
      bootTextEl.textContent += "\n";
      lineIndex++;
      setTimeout(typeLine, 200); // Delay before next line
    }
  }, 5); // Typing speed per character
}

window.onload = () => {
  typeLine();
};




