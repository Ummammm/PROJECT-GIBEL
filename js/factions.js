window.onload = () => {
    const bootText = document.getElementById("boot-text");
    const bootScreen = document.getElementById("boot-screen");
    const mainUI = document.getElementById("main-ui");

    const bootLines = [
        "> ACCESS POINT: CENTRAL FACTIONS ARCHIVE",

        "> USER AUTHENTICATION: CONFIRMED ",
        "[Credentials: Wayferrer Clearance | Omni Protocol: Active]",

        "> Initializing secure connection...",

        "> Retrieving factional index...  ",
        "[Status: SUCCESS]",

        "> Welcome, Seeker.  ",
        "All data within is protected under Interstellar Memory   Protocol 7.1.",

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
                mainUI.style.display = "block";
            }, 500);
        }
    }

    typeBoot();
};
