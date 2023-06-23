function veda_fn_c075c8bad4e44fcda4a4e5dbf9d13152 () {
      
  if (window.veda_fn_c075c8bad4e44fcda4a4e5dbf9d13152Cleanup === undefined) {
    window.veda_fn_c075c8bad4e44fcda4a4e5dbf9d13152Cleanup = {
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
  window.veda_fn_c075c8bad4e44fcda4a4e5dbf9d13152Cleanup.cleanup();

      try {
        const uniqueId = "id_ef9599d5-dd2a-462b-b79d-3adf79ab8b83";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const { select } = veda.plugins;

function currency() {
  const selectEls = container.querySelectorAll(".veda-select-currency");
  selectEls.forEach((selectEl) => {
    if (selectEl) {
      const formEl = container.querySelector(".currency_form");
      const currencyCodeEl = container.querySelector('[name="currency_code"]');
      const flagEl = selectEl.querySelector(".veda-select__view .flag");
      select(selectEl, {
        onChange(value) {
          flagEl.className = `mr:5px flag flag-round flag-md flag-${value}`;
          if (!builderMode) {
            currencyCodeEl.setAttribute("value", value);
            formEl.submit();
          }
        },
      });
    }
  });
}
currency();

function language() {
  const selectEls = container.querySelectorAll(".veda-select-lang");
  selectEls.forEach((selectEl) => {
    if (selectEl) {
      const formEl = container.querySelector(".localization_form");
      const localeCodeEl = container.querySelector('[name="locale_code"]');
      select(selectEl, {
        onChange(value) {
          if (!builderMode) {
            localeCodeEl.setAttribute("value", value);
            formEl.submit();
          }
        },
      });
    }
  });
}
language();
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_c075c8bad4e44fcda4a4e5dbf9d13152();