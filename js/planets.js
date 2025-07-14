// Typing effect for boot screen
function typeBootText(elementId, text, speed = 5, callback) {
  const el = document.getElementById(elementId);
  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      el.scrollTop = el.scrollHeight;
      i++;
      setTimeout(type, speed);
    } else {
      if (callback) callback();
    }
  }

  type();
}

// Boot screen text
const bootLines = `
LOADING PROTOCOL: GIBEL [ PLANETS INTERFACE MODULE ]...
> Establishing terminal handshake...
> Authenticating galactic routing ID...
> Fetching planetary archive indexes...
> Planetary grid interface stable...
>> WELCOME, GATE FINDER_013.
>> ACCESS LEVEL: PARTIAL_GRANTED
> Initializing interface...

[ PRESS ANY KEY TO CONTINUE ]
`;

document.addEventListener("DOMContentLoaded", () => {
  const bootScreen = document.getElementById("boot-screen");
  const mainUI = document.getElementById("main-ui");

  typeBootText("boot-text", bootLines, 5, () => {
    document.addEventListener("keydown", () => {
      bootScreen.style.display = "none";
      mainUI.style.display = "block";
      document.body.style.overflow = "auto";
    }, { once: true });
  });
});
