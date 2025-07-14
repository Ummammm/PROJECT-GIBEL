const bootText = `
> SYSTEM BOOTING ████████
> LINKING TO OBSIDIAN ARCHIVE NODE_11
> ENCRYPTED ENTRY LOADED...
> INITIATING UNVEILING SEQUENCE...
`;

let bootIndex = 0;

function typeBootText(callback) {
  const screen = document.getElementById("boot-text");
  if (bootIndex < bootText.length) {
    screen.innerHTML += bootText.charAt(bootIndex);
    bootIndex++;
    setTimeout(() => typeBootText(callback), 25);
  } else {
    setTimeout(() => {
      document.getElementById("boot-screen").style.display = "none";
      document.getElementById("entry-ui").style.display = "block";
      if (callback) callback();
    }, 1000);
  }
}

function startMysteryEntry(data) {
  typeBootText(() => {
    const output = document.getElementById("entry-content");
    let index = 0;
    function typeLine() {
      if (index < data.length) {
        output.innerHTML += data.charAt(index);
        output.scrollTop = output.scrollHeight;
        index++;
        setTimeout(typeLine, 5);
      }
    }
    typeLine();
  });
}
