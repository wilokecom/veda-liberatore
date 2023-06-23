function veda_fn_main_address() {
      
  if (window.veda_fn_main_addressCleanup === undefined) {
    window.veda_fn_main_addressCleanup = {
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
window.veda_fn_main_addressCleanup.cleanup();
  const uniqueId = "veda-main-address";
  const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
  containers.forEach(container => {
    if (!container) {
      return;
    }
    const btnEditEls = container.querySelectorAll(".btn-edit-address-js");
    const btnAddEls = container.querySelectorAll(".btn-add-address-js");
    const btnDelEls = container.querySelectorAll(".btn-del-address-js");
    let visibleAdd = false;

    function setSelectorByValue(selector, value) {
      for (var i = 0, count = selector.options.length; i < count; i++) {
        var option = selector.options[i];
        if (value == option.value || value == option.innerHTML) {
          selector.selectedIndex = i;
          return i;
        }
      }
    }

    function clearOptions(selector) {
      while (selector.firstChild) {
        selector.removeChild(selector.firstChild);
      }
    }

    function countryHandler(countryEl, provinceEl, provinceContainer) {
      var opt = countryEl.options[countryEl.selectedIndex];
      var raw = opt.getAttribute("data-provinces");
      var provinces = JSON.parse(raw);
      clearOptions(provinceEl);
      if (provinces && provinces.length == 0) {
        provinceContainer.style.display = "none";
      } else {
        for (var i = 0; i < provinces.length; i++) {
          var opt = document.createElement("option");
          opt.value = provinces[i][0];
          opt.innerHTML = provinces[i][1];
          provinceEl.appendChild(opt);
        }

        provinceContainer.style.display = "";
      }
    }

    function initCountry(countryEl, provinceEl, provinceContainer) {
      const value = countryEl.getAttribute("data-default");
      setSelectorByValue(countryEl, value);
      countryHandler(countryEl, provinceEl, provinceContainer);
    }

    function initProvince(provinceEl) {
      const value = provinceEl.getAttribute("data-default");
      if (value && provinceEl.options.length > 0) {
        setSelectorByValue(provinceEl, value);
      }
    }

    function countryProvinceSelector(countrySelector, provinceSelector, options) {
      const countryEl = container.querySelector(countrySelector);
      const provinceEl = container.querySelector(provinceSelector);
      const provinceContainer = container.querySelector(
        options["hideElement"] || provinceSelector
      );
      const handleChange = () => {
        countryHandler(countryEl, provinceEl, provinceContainer);
      };
      countryEl.addEventListener("change", handleChange);
      window.veda_fn_main_addressCleanup.push(() => {
        countryEl.removeEventListener("change", handleChange);
      });
      initCountry(countryEl, provinceEl, provinceContainer);
      initProvince(provinceEl);
    }

    function handleSelectContryProvince() {
      countryProvinceSelector("#address-country-new", "#address-province-new", {
        hideElement: ".address-province-container-new",
      });
      const countrySelects = container.querySelectorAll(
        "[data-address-country-select]"
      );

      countrySelects.forEach((select) => {
        const formId = select.getAttribute("data-form-id");
        countryProvinceSelector(
          `#address-country-${formId}`,
          `#address-province-${formId}`,
          {
            hideElement: `.address-province-container-${formId}`,
          }
        );
      });
    }

    if (!builderMode) {
      handleSelectContryProvince();
    }

    btnEditEls.forEach((btnEdit) => {
      const handleClick = (event) => {
        const currentButton = event.currentTarget;
        const formEdits = container.querySelectorAll(".form-update-address-js");
        const visible = currentButton.getAttribute("data-form-active");
        const index = Number(currentButton.getAttribute("data-index"));
        if (visible == "true") {
          formEdits[index - 1].style.display = "none";
          currentButton.setAttribute("data-form-active", "false");
        } else {
          formEdits[index - 1].style.display = "block";
          currentButton.setAttribute("data-form-active", "true");
        }
      };
      btnEdit.addEventListener("click", handleClick);
      window.veda_fn_main_addressCleanup.push(() => {
        btnEdit.removeEventListener("click", handleClick);
      });
    });
    btnAddEls.forEach((btnAdd) => {
      const handleClick = () => {
        const formAdd = container.querySelector(".form-add_address-js");
        if (visibleAdd) {
          formAdd.style.display = "none";
          visibleAdd = false;
        } else {
          formAdd.style.display = "block";
          visibleAdd = true;
        }
      };
      btnAdd.addEventListener("click", handleClick);
      window.veda_fn_main_addressCleanup.push(() => {
        btnAdd.removeEventListener("click", handleClick);
      });
    });

    btnDelEls.forEach((btnDel) => {
      const handleClick = () => {
        const message = btnDel.getAttribute("data-confirm-message");
        confirm(message);
      };
      btnDel.addEventListener("click", handleClick);
      window.veda_fn_main_addressCleanup.push(() => {
        btnDel.removeEventListener("click", handleClick);
      });
    });
  });
}
veda_fn_main_address();