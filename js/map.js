// map.js

function typeText(text, element, speed = 5, callback) {
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

function startMapLog(entryContent) {
  const bootText = document.getElementById("boot-text");
  const bootMessages = [
    ">> INITIALIZING STAR CHART TERMINAL...",
    ">> ACCESS GRANTED: CARTOGRAPHER NEIMAND",
    ">> UPLOADING COORDINATES...",
    ">> STITCHING GALAXY THREADS...",
    ">> STAR MAP READY."
  ];

  const fullBootText = bootMessages.join('\n');

  typeText(fullBootText, bootText, 10, () => {
    setTimeout(() => {
      const bootScreen = document.getElementById("boot-screen");
      const entryUI = document.getElementById("entry-ui");
      const entryContentDiv = document.getElementById("entry-content");

      bootScreen.style.display = "none";
      entryUI.style.display = "block";
      entryContentDiv.textContent = entryContent;

      const image = document.querySelector('.map-image');
      if (image) {
        setTimeout(() => {
          image.classList.add('reveal');
        }, 1500);
      }
    }, 600);
  });
}

// 🔁 Animated map switching
function showTextMap() {
  const terminalMap = document.getElementById("terminal-map");
  const imageMap = document.getElementById("image-map");

  imageMap.classList.remove("active");
  setTimeout(() => {
    imageMap.style.display = "none";
    terminalMap.style.display = "block";
    setTimeout(() => {
      terminalMap.classList.add("active");
    }, 20);
  }, 300);
}

function showImageMap() {
  const terminalMap = document.getElementById("terminal-map");
  const imageMap = document.getElementById("image-map");

  terminalMap.classList.remove("active");
  setTimeout(() => {
    terminalMap.style.display = "none";
    imageMap.style.display = "block";
    setTimeout(() => {
      imageMap.classList.add("active");
    }, 20);
  }, 300);
}
