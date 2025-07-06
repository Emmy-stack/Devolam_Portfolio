const sentences = [
  "Self-motivated and detail-oriented software developer with a strong foundation in front-end technologies.",
  "Passionate about building efficient, user-friendly applications and continuously expanding technical expertise.",
  "Proficient in modern web technologies and capable of working independently or collaboratively in team environments.",
  "Seeking opportunities to contribute to impactful projects while advancing toward a senior full-stack developer role.",
];

const speed = 100; // typing speed (ms)
const delayBetweenSentences = 1000; // pause between sentences (ms)
let sentenceIndex = 0;
let charIndex = 0;

function typeSentence() {
  const currentSentence = sentences[sentenceIndex];
  const autotypeDiv = document.getElementById("autotype");

  if (charIndex < currentSentence.length) {
    autotypeDiv.textContent += currentSentence.charAt(charIndex);
    charIndex++;
    setTimeout(typeSentence, speed);
  } else {
    // Done with this sentence
    setTimeout(() => {
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
      charIndex = 0;
      autotypeDiv.textContent = "";
      typeSentence();
    }, delayBetweenSentences);
  }
}

window.onload = typeSentence;

//Resume popup
function resumePopup() {
  const iframe = document.getElementById("resume");
  const content = document.getElementById("main-content");
  iframe.style.display = "block";
  content.classList.add("blur");
}

// ❌ Optional: close popup and remove blur
function closeResumePopup() {
  const iframe = document.getElementById("resume");
  const content = document.getElementById("main-content");
  iframe.style.display = "none";
  content.classList.remove("blur");
}

function goToBody() {
  const iframe = document.getElementById("body");
  const content = document.getElementById("main-content");
  iframe.style.display = "block";
  content.classList.add("blur");
}
