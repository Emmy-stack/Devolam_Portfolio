function closeResumePopup() {
  const iframe = document.getElementById("resume");
  const content = document.getElementById("main-content");
  iframe.style.display = "none";
  content.style.display = "none";
}
