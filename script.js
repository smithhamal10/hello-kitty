// Typing effect
const text = "You are my cutest Hello Kitty Malika ❤️";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();

// Smooth scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Floating hearts animation
const heartsContainer = document.querySelector('.hearts-container');
setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 3 + Math.random() * 3 + 's';
    heart.style.width = heart.style.height = 10 + Math.random() * 20 + 'px';
    heartsContainer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 6000);
}, 500);