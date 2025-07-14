function startSpeciesEntry(logText) {
  const bootText = document.getElementById("boot-text");
  const entryUI = document.getElementById("entry-ui");
  const bootScreen = document.getElementById("boot-screen");
  const entryContent = document.getElementById("entry-content");

  const bootLines = [
    ">> SYNCING BIOSIGNATURE...",
    ">> UPLINKING ETHNO-LINGUISTIC RECORDS...",
    ">> VALIDATION: OPEN-CLEARANCE APPROVED...",
    ">> LOADING SPECIES DATA...\n\n"
  ];

  let i = 0;
  function typeBoot() {
    if (i < bootLines.length) {
      bootText.innerHTML += bootLines[i++] + "\n";
      setTimeout(typeBoot, 200);
    } else {
      setTimeout(() => {
        bootScreen.style.display = 'none';
        entryUI.style.display = 'block';
        typeEntry();
      }, 400);
    }
  }

  let j = 0;
  function typeEntry() {
    const lines = logText.split("\n");
    if (j < lines.length) {
      entryContent.innerHTML += lines[j++] + "\n";
      entryContent.scrollTop = entryContent.scrollHeight;
      setTimeout(typeEntry, 50);
    }
  }

  typeBoot();
}
