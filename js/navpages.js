function typeText(text, element, speed = 5, callback = () => {}) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      callback();
    }
  }
  typing();
}

function startPersonalLog(entryContent) {
  const bootText = document.getElementById("boot-text");
  const bootMessages = [
    ">> BOOTING INTERFACE...",
    ">> ACCESS GRANTED: ARCHIVE NODE",
    ">> RETRIEVING REQUESTED SECTION...",
    ">> STABILIZING DATA...",
    ">> READY."
  ];

  let fullBootText = bootMessages.join('\n');
  typeText(fullBootText, bootText, 10, () => {
    setTimeout(() => {
      document.getElementById("boot-screen").style.display = "none";
      document.getElementById("entry-ui").style.display = "block";
      document.getElementById("entry-content").textContent = ""; // wipe text before typing
      typeText(entryContent, document.getElementById("entry-content"), 10);
    }, 600);
  });
}
