const bootLines = [
 ">> SYSTEM BOOTING...",
  ">> Checking memory sectors... OK",
  ">> Linking neural nodes... OK",
  ">> Loading user protocols... COMPLETE",
  ">> Syncing quantum clock... 2025.07.12 UTC",
  ">> Accessing GIBEL framework...",
  ">> Decrypting security layers... ███████████████ 100%",
  ">> Verifying agent ID: N13M4ND // VALID",
  ">> Establishing connection with archive core...",
  ">> Core handshake complete.",
  ">> SYSTEM ONLINE.",
  "",
  ">> Welcome, Niemand.",
  ">> Initializing ARCHIVE INTERFACE..."
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
  }, 20); // Typing speed per character
}

window.onload = () => {
  typeLine();
};




