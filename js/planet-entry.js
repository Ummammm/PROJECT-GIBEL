function typeText(elementId, text, speed = 5) {
  const el = document.getElementById(elementId);
  let i = 0;

  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      el.scrollTop = el.scrollHeight; // auto-scroll
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}
