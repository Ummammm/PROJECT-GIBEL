const bootText = document.getElementById("boot-text");
const mainUI = document.getElementById("main-ui");
const bootScreen = document.getElementById("boot-screen");

const bootLines = [

"[BOOT SEQUENCE INITIATED...]",
"[DEVICE ID: 09-FTRL-XH3-NSR | USER: “NIEMAND”]",
"[STATUS: SHIPCORE REACTIVATED]",
"...",
"[LOADING INTERFACE MODULES ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 13%]",
"[ERROR: HOLO-VIEW MODULE NOT FOUND – SKIPPING]",
"[LOADING JOURNAL STORAGE... OK]",
"[LOADING NAVIMAP OVERLAY... PARTIAL SYNC]",
"[DECRYPTING PERSONAL LOG SECTOR... DONE]",
"[RECONSTRUCTING UI FROM SALVAGED FILES...]",
"",
"✔ SYSTEM BOOT COMPLETE",
"✔ WELCOME BACK, TRAVELER.",
"",
"┌────────────────────────────────────────────┐",
"│      << NMD//ARCHIVUM//VERSION 2.1 >>      │",
"├────────────────────────────────────────────┤",
"│ “The stars whisper, but I write it down.”  │",
"│ ─ Niemand                                  │",
"└────────────────────────────────────────────┘",

];

let i = 0;
function typeBoot() {
  if (i < bootLines.length) {
    bootText.innerHTML += bootLines[i++] + "\n";
    setTimeout(typeBoot, 180);
  } else {
    setTimeout(() => {
      bootScreen.style.display = "none";
      mainUI.style.display = "block";
    }, 400);
  }
}

typeBoot();
