const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const words = document.querySelectorAll('.word');

let index = 0;
let letterIndex = 0;

function animate() {
  const currentWord = words[index];
  const letters = currentWord.textContent.split('');

  if (letterIndex < letters.length) {
    currentWord.textContent = letters.slice(0, letterIndex + 1).join('');
    letterIndex++;
    setTimeout(animate, 80); // Adjust the delay as needed
  } else {
    index++;
    letterIndex = 0;
    if (index < words.length) {
      setTimeout(animate, 2000); // Adjust the delay between words
    }
  }
}

animate();