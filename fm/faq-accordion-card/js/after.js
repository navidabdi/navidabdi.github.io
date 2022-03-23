const accListener = () => {
  const accs = document.querySelectorAll('.accordion-header');
  accs.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('active');
      const panel = e.currentTarget.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
};
const init = () => {
  accListener();
};
init();
