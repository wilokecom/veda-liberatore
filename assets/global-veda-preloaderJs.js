window.veda.plugins.preloader = function(containerEl) {
  window.addEventListener('load', () => {
    const el = document.querySelector('.veda-preloader');
    el.classList.add('veda-preloader--done');
  });
}
veda.plugins.preloader();