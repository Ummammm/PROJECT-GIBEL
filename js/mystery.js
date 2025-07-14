const bootText = `
> INITIATING ARCHIVE LINK…
> ROUTING THROUGH BACKCHANNEL NODE: [UNREGISTERED UPLINK]

> . . . CONNECTION STABLE
> PROTOCOL: DEEPSYNC_7 | AUTH BYPASS ATTEMPT DETECTED
> ACCESS OVERRIDE KEY: ████-████-████-████ [MANUAL INJECTION DETECTED]
> ENCRYPTION STATUS: BREACHED [SEVERE INTEGRITY LOSS]

> BOOTING SYSTEM ██████████████ . . .
> LOADING DATA VAULT // ID: R-ARCH_ΩX-001

   WARNING: FILESET MARKED [REDACTED - LEVEL OMEGA]
   WARNING: VIEWING REQUIRES OMNI-LEVEL PERMISSION
   WARNING: USER PRESENCE LOGGED IN BLACKLIST REGISTRY

> [ATTENTION] A STRANGE HUM IS DETECTED IN YOUR HEADSET CHANNEL
> [ATTENTION] CONNECTION TO REALITY MAY VARY DURING ARCHIVE ACCESS

> EXECUTE? (Y/N): _

> Y

> . . . OVERRIDE ACCEPTED

> WELCOME TO THE FOLDED MEMORY STACK
> INITIATING MEMORY THREAD: ██████████████████

> [RUNNING] SPECTRAL ECHO PARSE...
> [RUNNING] TEMPORAL SHIMMER SHIELD...
> [FAILURE] SHIELD BREACHED. PSYCHIC LEAK DETECTED.

> FINAL WARNING: THIS ARCHIVE HOUSES DATA ON THE “SINGULAR EVENT”
> ONCE ACCESSED, FORGETTING IS NO LONGER POSSIBLE.

> OPENING FILE: “COLONY REDLIGHT - INCIDENT REPORT ALPHA VOID”

   [ ... loading corrupted visuals ... ]
   [ ... audio bleed detected ... ]
   [ ... timestamps folding ... ]
   [ ... they are inside the walls ... ]

> VIEW LOG? 

`;


const bootScreen = document.getElementById("boot-text");
const mainUI = document.getElementById("main-ui");
let index = 0;

function typeBootText() {
  if (index < bootText.length) {
    bootScreen.innerHTML += bootText.charAt(index);
    index++;
    bootScreen.scrollTop = bootScreen.scrollHeight;
    setTimeout(typeBootText, 5);
  } else {
    setTimeout(() => {
      document.getElementById("boot-screen").style.display = "none";
      mainUI.style.display = "block";
    }, 1000);
  }
}

window.onload = typeBootText;