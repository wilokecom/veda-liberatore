function veda_fn_main_login() {
      
  if (window.veda_fn_main_loginCleanup === undefined) {
    window.veda_fn_main_loginCleanup = {
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
window.veda_fn_main_loginCleanup.cleanup();
  const uniqueId = "veda-main-login";
  const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
  containers.forEach(container => {
    if (!container) {
      return;
    }
    const loginForm = container.querySelector(".login-form-js");
    const recoverForm = container.querySelector(".recover-form-js");
    const btnRecover = container.querySelector(".btn-recover-password-js");
    const btnCancel = container.querySelector(".btn-recover-password-cancel-js");
    const btnLoginToRecover = container.querySelector(".btn-login-to-recover-js");

    function visibleLogin() {
      loginForm.style.display = "block";
      recoverForm.style.display = "none";
    }

    function visibleRecover() {
      loginForm.style.display = "none";
      recoverForm.style.display = "block";
    }

    function loadVisibleForm() {
      if (!builderMode && location.hash === "#recover") {
        visibleRecover();
      } else {
        visibleLogin();
      }
    }
    btnRecover.addEventListener("click", visibleLogin);
    btnCancel.addEventListener("click", visibleLogin);
    btnLoginToRecover.addEventListener("click", visibleRecover);
    window.addEventListener("load", loadVisibleForm);

    window.veda_fn_main_loginCleanup.push(() => {
      btnRecover.removeEventListener("click", visibleLogin);
      btnCancel.removeEventListener("click", visibleLogin);
      btnLoginToRecover.removeEventListener("click", visibleRecover);
      window.removeEventListener("load", loadVisibleForm);
    });
  });
}
veda_fn_main_login();