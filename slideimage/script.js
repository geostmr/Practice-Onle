const prev = document.getElementById('prev');
const next = document.getElementById('next');
const thumbnail = document.getElementById('thumbnail');
const hero = document.getElementById('hero');

const backgroundImg = [
    "./img/bg1.png",
    "./img/bg2.png",
    "./img/bg3.png",
    "./img/bg4.png",
    "./img/bg5.png"
];

let i = 0;

next.onclick = function() {
    i = (i + 1) % backgroundImg.length; // Increment and loop back to the start
    hero.style.backgroundImage = 'url("' + backgroundImg[i] + '")';
};

prev.onclick = function() {
    i = (i - 1 + backgroundImg.length) % backgroundImg.length; // Decrement and loop back
    hero.style.backgroundImage = 'url("' + backgroundImg[i] + '")';
};
