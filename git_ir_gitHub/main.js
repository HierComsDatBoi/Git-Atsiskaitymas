// Menu buttons
document.querySelector('#introBtn')
.addEventListener('click', e => {
e.preventDefault();
  document.querySelector('#mainPage').classList.add('hidden');
  document.querySelector('#introPage').classList.remove('hidden');
});

document.querySelector('#workBtn')
.addEventListener('click', e => {
e.preventDefault();
  document.querySelector('#mainPage').classList.add('hidden');
  document.querySelector('#workPage').classList.remove('hidden');
});

document.querySelector('#aboutBtn')
.addEventListener('click', e => {
e.preventDefault();
  document.querySelector('#mainPage').classList.add('hidden');
  document.querySelector('#aboutPage').classList.remove('hidden');
});

document.querySelector('#contactBtn')
.addEventListener('click', e => {
e.preventDefault();
  document.querySelector('#mainPage').classList.add('hidden');
  document.querySelector('#contactPage').classList.remove('hidden');
});
// menu buttons end