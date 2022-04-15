var textWrapper = document.querySelector('.title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var textWrapper2 = document.querySelector('.text');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
anime.timeline()
.add({
    targets: '.title',
    opacity: 1,
    easing: "linear",
    duration: 1,
  })
  .add({
    targets: '.title .letter',
    scale: [2,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 300*i
  })
 
anime.timeline()
  .add({
    duration: 2500
  })
  .add({
    targets: '.text',
    opacity: 1,
    easing: "linear",
    duration: 1,
  })
  .add({
    targets: '.text .letter',
    translateY: [-50,0],
    easing: "linear",
    duration: 300,
    delay: (el, i) => 50 * i
  })
  .add({
    targets: '.underline',
    opacity: 1,
    easing: "linear",
    duration: 200
  })