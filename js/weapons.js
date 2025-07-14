// weapons.js

function typeText(text, element, speed = 20, callback) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      callback();
    }
  }
  type();
}

window.onload = function () {
  const bootText = document.getElementById("boot-text");
  const bootMessages = [
    ">> LOADING WEAPON DATABASE...",
    ">> STABILIZING CONNECTION...",
    ">> GRANTED ACCESS TO COMBAT CACHE",
    ">> DISPLAYING AVAILABLE ARMAMENTS"
  ];

  typeText(bootMessages.join('\n'), bootText, 25, () => {
    setTimeout(() => {
      document.getElementById("boot-screen").style.display = "none";
      document.getElementById("main-ui").style.display = "block";
    }, 500);
  });
};
