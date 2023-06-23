function veda_fn_d6da0381391c44c4ac3a05ba01af0815 () {
      
  if (window.veda_fn_d6da0381391c44c4ac3a05ba01af0815Cleanup === undefined) {
    window.veda_fn_d6da0381391c44c4ac3a05ba01af0815Cleanup = {
      listeners: [],
      push(listener) {
        this.listeners.push(listener);
      },
      cleanup() {
        this.listeners.forEach(listener => listener());
        this.listeners = [];
      }
    }
  }
  window.veda_fn_d6da0381391c44c4ac3a05ba01af0815Cleanup.cleanup();

      try {
        const uniqueId = "id_b5fb6ef8-49b8-406a-875d-7ad633774e3b";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const { modal } = veda.plugins;

const passwordForm = container.querySelector(".password-form-js");
const btnToggle = container.querySelector(".toggle-password-form-js");
const btnClose = container.querySelector(".password-close-js");
const overlayEl = container.querySelector(".overlay-password-js");
const isError = passwordForm.querySelector(".errors");

if (!!isError) {
  const instance = veda.plugins.modal({
    visible: true,
    trigger: [btnToggle, btnClose, overlayEl],
    content: passwordForm,
    portal: container,
  });
  window.veda_fn_d6da0381391c44c4ac3a05ba01af0815Cleanup.push(() => {
    instance.destroy();
  });
} else {
  const instance = veda.plugins.modal({
    trigger: [btnToggle, btnClose, overlayEl],
    content: passwordForm,
    portal: container,
  });
  window.veda_fn_d6da0381391c44c4ac3a05ba01af0815Cleanup.push(() => {
    instance.destroy();
  });
}
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_d6da0381391c44c4ac3a05ba01af0815();