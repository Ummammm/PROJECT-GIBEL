document.addEventListener("DOMContentLoaded", () => {
  const bootScreen = document.getElementById("boot-screen");
  const bootText = document.getElementById("boot-text");
  const entryUI = document.getElementById("entry-ui");
  const entryContent = document.getElementById("entry-content");

  const bootLines = [
    "[BOOT SEQUENCE INITIATED]",
    "> POWERING NEXUS CORE...",
    "> VERIFYING DATA INTEGRITY...",
    "> LOADING INSTITUTIONAL ARCHIVE...",
    "> SYSTEM STABLE.",
    "> DEPLOYING VIEW INTERFACE..."
  ];

  let index = 0;

  const typeBootLine = () => {
    if (index < bootLines.length) {
      bootText.textContent += bootLines[index] + "\n";
      index++;
      setTimeout(typeBootLine, 350);
    } else {
      setTimeout(() => {
        bootScreen.style.display = "none";
        entryUI.style.display = "block";
      }, 700);
    }
  };

  typeBootLine();
});

function startInstitutionEntry(text) {
  const entryContent = document.getElementById("entry-content");
  let i = 0;

  function typeChar() {
    if (i < text.length) {
      entryContent.innerHTML += text.charAt(i) === "\n" ? "<br/>" : text.charAt(i);
      i++;
      setTimeout(typeChar, 5);
    }
  }

  typeChar();
}
