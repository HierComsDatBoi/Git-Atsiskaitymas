// Menu buttons
document.querySelector('#introBtn')
.addEventListener('click', () => {
  document.querySelector('#mainPage').classList.add('hidden');
  document.querySelector('#introPage').classList.remove('hidden');
});

document.querySelector('#workBtn')
.addEventListener('click', () => {
  document.querySelector('#mainPage').classList.add('hidden');
  document.querySelector('#workPage').classList.remove('hidden');
});

document.querySelector('#aboutBtn')
.addEventListener('click', () => {
  document.querySelector('#mainPage').classList.add('hidden');
  document.querySelector('#aboutPage').classList.remove('hidden');
});

document.querySelector('#contactBtn')
.addEventListener('click', () => {
  document.querySelector('#mainPage').classList.add('hidden');
  document.querySelector('#contactPage').classList.remove('hidden');
});
// menu buttons end


//close buttons kiekvienai sekcijai
document.querySelector('#closeIntro')
.addEventListener('click', () =>{
  document.querySelector('#introPage').classList.add('hidden');
  document.querySelector('#mainPage').classList.remove('hidden');
});

document.querySelector('#closeWork')
.addEventListener('click', () =>{
  document.querySelector('#workPage').classList.add('hidden');
  document.querySelector('#mainPage').classList.remove('hidden');
});

document.querySelector('#closeAbout')
.addEventListener('click', () =>{
  document.querySelector('#aboutPage').classList.add('hidden');
  document.querySelector('#mainPage').classList.remove('hidden');
});

document.querySelector('#closeContact')
.addEventListener('click', () =>{
  document.querySelector('#contactPage').classList.add('hidden');
  document.querySelector('#mainPage').classList.remove('hidden');
});
