// weapons-entry.js

function startWeaponEntry(logText) {
  const bootScreen = document.getElementById("boot-screen");
  const entryUI = document.getElementById("entry-ui");
  const entryContent = document.getElementById("entry-content");
  const bootText = document.getElementById("boot-text");

  const bootLines = [
    ">> INITIATING ARMORY ACCESS...",
    ">> LINKING TO LOCAL TERMINAL NODE...",
    ">> DECRYPTING VAULT ENTRY...",
    ">> SYSTEM UNLOCKED. LOADING FILE...\n"
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let currentLine = "";
  let isBootComplete = false;

  function typeBoot() {
    if (lineIndex < bootLines.length) {
      currentLine += bootLines[lineIndex][charIndex++];
      bootText.innerHTML = currentLine;

      if (charIndex < bootLines[lineIndex].length) {
        setTimeout(typeBoot, 15);
      } else {
        currentLine += "\n";
        lineIndex++;
        charIndex = 0;
        setTimeout(typeBoot, 200);
      }
    } else {
      isBootComplete = true;
      bootScreen.style.display = "none";
      entryUI.style.display = "block";
      typeEntryText(logText);
    }
  }

  function typeEntryText(text) {
    let i = 0;
    function typeChar() {
      if (i < text.length) {
        entryContent.textContent += text.charAt(i);
        i++;
        setTimeout(typeChar, 5);
      }
    }
    typeChar();
  }

  typeBoot();
}
