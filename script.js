const words = [
  "AWS Learner",
  "DevOps Learner",
  "Business Analytics Student",
  "Future Business Analyst"
];

let i = 0; // index of current word
let j = 0; // index of current letter
let current = "";
let deleting = false;

function typing() {
  const typingElement = document.getElementById("typing");

  if (!deleting) {
    current = words[i].substring(0, j++);
    typingElement.textContent = current;

    if (j > words[i].length) {
      deleting = true;
      setTimeout(typing, 1000); // pause before deleting
      return;
    }
  } else {
    current = words[i].substring(0, j--);
    typingElement.textContent = current;

    if (j === 0) {
      deleting = false;
      i++;
      if (i === words.length) i = 0; // loop back to first word
    }
  }

  const speed = deleting ? 80 : 120; // faster delete
  setTimeout(typing, speed);
}

typing();
