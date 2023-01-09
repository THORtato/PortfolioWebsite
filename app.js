const controls = document.querySelectorAll('.control');
const content = document.querySelector('.main-content');

const pageTransition = () => {
  controls.forEach(control => {
    control.addEventListener('click', e => {
      controls.forEach(e => {
        e.classList.remove('active-btn');
      });
      control.classList.add('active-btn');
    });
  });
};

pageTransition();
