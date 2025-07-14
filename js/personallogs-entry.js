function typeText(text, element, speed = 5, callback) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }
  typing();
}

function startPersonalLog(entryContent) {
  const bootText = document.getElementById("boot-text");
  const bootMessages = [
    ">> BOOTING PERSONAL LOG INTERFACE...",
    ">> ACCESS GRANTED: GATEFINDER PROTOCOL",
    ">> RETRIEVING MEMORY SEQUENCE...",
    ">> STABILIZING ENTRY...",
    ">> READY."
  ];

  const entryUI = document.getElementById("entry-ui");
  const entryDisplay = document.getElementById("entry-content");
  const fullBootText = bootMessages.join("\n");

  // Step 1: Type the boot messages
  typeText(fullBootText, bootText, 5, () => {
    // Step 2: Pause briefly before showing UI
    setTimeout(() => {
      document.getElementById("boot-screen").style.display = "none";
      entryUI.style.display = "block";
      entryDisplay.textContent = ""; // Clear just in case
      // Step 3: Type out the log entry
      typeText(entryContent, entryDisplay, 5);
    }, 600);
  });
}
