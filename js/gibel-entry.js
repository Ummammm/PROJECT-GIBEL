function typeWriter(element, text, speed = 10, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

function startGibelEntry(entryText) {
    const bootScreen = document.getElementById('boot-screen');
    const bootText = document.getElementById('boot-text');
    const entryUI = document.getElementById('entry-ui');
    const entryContent = document.getElementById('entry-content');

    const bootLog = `
>> BOOTING GIBEL DEVICE ARCHIVE INTERFACE...
>> INITIATING SIGIL-LOCK OVERRIDE...
>> ESTABLISHING MIND-LINKED STREAM...
>> DECRYPTION PROTOCOL: AUTHORIZED ███████
>> LOADING DATA PACKET... PLEASE STAND BY...

`;

    typeWriter(bootText, bootLog, 15, () => {
        setTimeout(() => {
            bootScreen.style.display = 'none';
            entryUI.style.display = 'block';
            typeWriter(entryContent, entryText, 8);
        }, 800);
    });
}
