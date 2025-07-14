function startCorpEntry(data) {
  const bootText = document.getElementById("boot-text");
  const bootScreen = document.getElementById("boot-screen");
  const entryUI = document.getElementById("entry-ui");
  const entryContent = document.getElementById("entry-content");

  const bootLines = [
    ">> CONNECTING TO CORPORATE DATAVAULT...",
    ">> HANDSHAKE INITIATED...",
    ">> DECRYPTION SEQUENCE COMPLETE...",
    ">> ACCESS GRANTED. BOOTING LOG VIEWER...",
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
        entryUI.style.display = "block";
        typeEntry();
      }, 400);
    }
  }

  let j = 0;
  function typeEntry() {
    const lines = data.split("\n");
    if (j < lines.length) {
      entryContent.innerHTML += lines[j] + "\n";
      entryContent.scrollTop = entryContent.scrollHeight;
      j++;
      setTimeout(typeEntry, 50);
    }
  }

  typeBoot();
}
