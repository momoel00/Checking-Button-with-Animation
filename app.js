//momo itdeve

const bell = document.querySelector('#bell');
let soundTimer;
function toggleBtnAnimation(e) {
  e.currentTarget.classList.toggle('checked');
  e.currentTarget.querySelectorAll('.explosion').forEach((expl) => expl.classList.toggle('exploding'));
  if (e.currentTarget.classList.contains('checked')) {
    clearTimeout(soundTimer);
    bell.currentTime = 0;
    bell.volume = 0.4;
    soundTimer = setTimeout(() => bell.play(), 400)
  }
}
const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', toggleBtnAnimation));