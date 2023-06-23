function veda_fn_veda_main_cart () {
      
  if (window.veda_fn_veda_main_cartCleanup === undefined) {
    window.veda_fn_veda_main_cartCleanup = {
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
  window.veda_fn_veda_main_cartCleanup.cleanup();

      const uniqueId = "veda-main-cart-uniqueId";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const { debounce, objectParse, store, formatMoney, storage, money } =
  veda.utils;
const { cart, replaceSectionElement, message, select, selectCountryProvince } =
  veda.plugins;
let initialSubscribeCart = false;
let renderLoadingCart = false;
let loadingCalculateShipping = false;

store.create("@@productCart", {
  initialState: {},
  useStorage: true,
});

storage.setItem("@discountCode", "");
store.create("@visibleNoteCart", {
  initialState: false,
});

store.create("@visibleShippingCart", {
  initialState: false,
});

store.create("@visibleDiscountCart", {
  initialState: false,
});

store.set("@visibleNoteCart", () => false);
store.set("@visibleShippingCart", () => false);
store.set("@visibleDiscountCart", () => false);

let unsubscribeNote = () => {};
let unsubscribeShipping = () => {};
let unsubscribeDiscount = () => {};

function handleSelectContryProvince() {
  selectCountryProvince(
    container,
    "#address-country-shipping",
    "#address-province-shipping",
    {
      hideElement: ".address-province-container-shipping",
    }
  );
}

async function updateNote(note) {
  try {
    const res = await fetch(`${window.Shopify.routes.root}cart/update.js`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        note: `${note}`,
      }),
    });
    if (res.status !== 200) {
      throw new Error(res.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

async function calculateShipping(country, state, zip) {
  try {
    const res = await fetch(
      `${window.Shopify.routes.root}cart/shipping_rates.json?shipping_address%5Bzip%5D=${zip}&shipping_address%5Bcountry%5D=${country}&shipping_address%5Bprovince%5D=${state}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function handleNote(el) {
  const btnNote = el.querySelector(".mini-cart-btn-note-js");
  const btnSaveNoteEl = el.querySelector(".mini-cart-btn-save-note-js");
  const btnCancelEls = el.querySelectorAll(".mini-cart-btn-cancel-action-js");
  const txtNoteEl = el.querySelector("textarea[name='note']");
  if (!!btnNote) {
    unsubscribeNote();
    unsubscribeNote = store.subscribe("@visibleNoteCart", (state) => {
      const noteContent = el.querySelector(".mini-cart-note-js");
      if (!state) {
        noteContent.classList.remove("d:block");
        noteContent.classList.add("d:none");
      } else {
        noteContent.classList.remove("d:none");
        noteContent.classList.add("d:block");
      }
    });
    const handleClick = () => {
      store.set("@visibleShippingCart", (state) => false);
      store.set("@visibleDiscountCart", () => false);
      store.set("@visibleNoteCart", (state) => !state);
    };
    btnNote.addEventListener("click", handleClick);
    window.veda_fn_veda_main_cartCleanup.push(() => {
      unsubscribeNote();
      btnNote.removeEventListener("click", handleClick);
    });
  }
  btnCancelEls.forEach((btnCancelEl) => {
    const handleClickCancel = () => {
      store.set("@visibleNoteCart", () => false);
      store.set("@visibleShippingCart", () => false);
      store.set("@visibleDiscountCart", () => false);
    };
    btnCancelEl.addEventListener("click", handleClickCancel);
    window.veda_fn_veda_main_cartCleanup.push(() => {
      btnCancelEl.removeEventListener("click", handleClickCancel);
    });
  });
  const handleClickSave = () => {
    store.set("@visibleNoteCart", (state) => !state);
    store.set("@visibleShippingCart", () => false);
    store.set("@visibleDiscountCart", () => false);
    if (!builderMode) {
      updateNote(txtNoteEl.value);
    }
  };
  if(!!btnSaveNoteEl) {
    btnSaveNoteEl.addEventListener("click", handleClickSave);
    window.veda_fn_veda_main_cartCleanup.push(() => {
      btnSaveNoteEl.removeEventListener("click", handleClickSave);
    });
  }
}

function renderResultShipping(calculateData, resultCaculateEl) {
  const shippingRatesResult =
    "We found {{count}} shipping rate(s) for your address";
  const noShippingRate = "Not found shipping rate";
  if (!!calculateData.shipping_rates) {
    const { shipping_rates } = calculateData;
    if (shipping_rates.length > 0) {
      resultCaculateEl.textContent = "";
      resultCaculateEl.insertAdjacentHTML(
        "afterbegin",
        `
            <div>
              ${shippingRatesResult.replace(
                "{{count}}",
                shipping_rates.length
              )} :
            </div>
            ${shipping_rates
              .map(
                (rate) => `
              <div>${rate.name}: ${money(rate.price)}</div>
            `
              )
              .join(" ")}
          `
      );
    } else {
      resultCaculateEl.innerHTML = `
        ${noShippingRate}
      `;
    }
  } else {
    resultCaculateEl.innerHTML = "";
    Object.entries(calculateData).map((error) => {
      console.log(error, "error");
      if (!!error[1][0]) {
        message.error(error[1][0]);
      }
      resultCaculateEl.insertAdjacentHTML(
        "afterbegin",
        `
          <div
            class="d:flex ai:center fz:14px p:10px m:10px_0 bgc:color-error.1 c:color-error ls:none*ul p:0*ul m:0*ul"
          >
            <span><i class="far fa-exclamation-circle mr:10px"></i></span>
            <div class="errors">${error[1][0]}</div>
          </div>
        `
      );
    });
  }
}

async function handleShipping(el) {
  const btnShipping = el.querySelector(".mini-cart-btn-shipping-js");
  const txtZipEl = el.querySelector("input[name='address[zip]']");
  const resultCaculateEl = el.querySelector(".mini-cart-shipping-value");
  const btnSubmitShippingEl = el.querySelector(
    ".mini-cart-btn-submit-shipping-js"
  );
  if (!!btnShipping) {
    unsubscribeShipping();
    unsubscribeShipping = store.subscribe("@visibleShippingCart", (state) => {
      const shippingContent = el.querySelector(".mini-cart-shipping-js");
      if (!state) {
        shippingContent.classList.remove("d:block");
        shippingContent.classList.add("d:none");
      } else {
        shippingContent.classList.remove("d:none");
        shippingContent.classList.add("d:block");
      }
    });

    const handleClickShip = () => {
      store.set("@visibleShippingCart", (state) => !state);
      store.set("@visibleNoteCart", () => false);
      store.set("@visibleDiscountCart", () => false);
    };
    if(!!btnShipping) {
      btnShipping.addEventListener("click", handleClickShip);
      window.veda_fn_veda_main_cartCleanup.push(() => {
        unsubscribeShipping();
        btnShipping.removeEventListener("click", handleClickShip);
      });
    }
    handleSelectContryProvince();
  }
  const handleClickSubmit = async () => {
    if (!loadingCalculateShipping) {
      loadingCalculateShipping = true;
      const countryEl = container.querySelector("#address-country-shipping");
      const provinceEl = container.querySelector("#address-province-shipping");
      let calculateData;
      const spinner =
        "<div class='veda-spinner bdw:2px mr:10px' style='--spinner-color: var(--color-secondary); --spinner-size: 14px'></div>";
      btnSubmitShippingEl.insertAdjacentHTML("afterbegin", spinner);
      if (!builderMode) {
        calculateData = await calculateShipping(
          countryEl.value,
          provinceEl.value,
          txtZipEl.value
        );
        const currentSpinner =
          btnSubmitShippingEl.querySelector(".veda-spinner");
        currentSpinner.remove();
        loadingCalculateShipping = false;
        renderResultShipping(calculateData, resultCaculateEl);
      } else {
        setTimeout(() => {
          const currentSpinner =
            btnSubmitShippingEl.querySelector(".veda-spinner");
          currentSpinner.remove();
          loadingCalculateShipping = false;
          calculateData = {
            shipping_rates: [
              {
                name: "Standard",
                presentment_name: "Standard",
                code: "Standard",
                price: "0.00",
                markup: "0.00",
                source: "shopify",
                currency: "USD",
              },
            ],
          };
          renderResultShipping(calculateData, resultCaculateEl);
        }, 1000);
      }
    }
  };
  if(!!btnSubmitShippingEl) {
    btnSubmitShippingEl.addEventListener("click", handleClickSubmit);
    window.veda_fn_veda_main_cartCleanup.push(() => {
      btnSubmitShippingEl.removeEventListener("click", handleClickSubmit);
    });
  }
}

async function handleDiscount(el) {
  const btnDiscount = el.querySelector(".mini-cart-btn-discount-js");
  const btnSaveDiscountEl = el.querySelector(".mini-cart-btn-save-discount-js");
  const txtDiscountEl = el.querySelector("input[name='discount']");
  const currentCode = storage.getItem("@discountCode");
  if (!!currentCode) {
    txtDiscountEl.value = currentCode;
  }
  if (!!btnDiscount) {
    unsubscribeDiscount();
    unsubscribeDiscount = store.subscribe("@visibleDiscountCart", (state) => {
      const discountContent = el.querySelector(".mini-cart-discount-js");
      if (!state) {
        discountContent.classList.remove("d:block");
        discountContent.classList.add("d:none");
      } else {
        discountContent.classList.remove("d:none");
        discountContent.classList.add("d:block");
      }
    });
    const handleClick = () => {
      store.set("@visibleDiscountCart", (state) => !state);
      store.set("@visibleNoteCart", () => false);
      store.set("@visibleShippingCart", () => false);
    };
    if(!!btnDiscount) {
      btnDiscount.addEventListener("click", handleClick);
      window.veda_fn_veda_main_cartCleanup.push(() => {
        unsubscribeDiscount();
        btnDiscount.removeEventListener("click", handleClick);
      });
    }
  }
  const handleClickSave = async () => {
    storage.setItem("@discountCode", txtDiscountEl.value);
    store.set("@visibleDiscountCart", (state) => !state);
  };
  if(!!btnSaveDiscountEl) {
    btnSaveDiscountEl.addEventListener("click", handleClickSave);
    window.veda_fn_veda_main_cartCleanup.push(() => {
      btnSaveDiscountEl.removeEventListener("click", handleClickSave);
    });
  }
}

function onChangeQuantity() {
  return async function (event) {
    const dataId = event.target
      .closest(".veda-counter")
      .getAttribute("data-id");
    const quantityEl = event.target
      .closest(".veda-counter")
      .querySelector(".veda-counter__input");
    const quantityValue = quantityEl.value;
    if (!builderMode) {
      renderLoading();
    }
    cart.updateCart(Number(dataId), Number(quantityValue));
  };
}

function handleRemoveCartItem() {
  const removeCartEls = container.querySelectorAll(".cart-remove-item-js");
  removeCartEls.forEach((removeCartEl) => {
    const id = removeCartEl.getAttribute("data-id");
    const handleClick = async () => {
      cart.removeCart(id);
    };
    removeCartEl.addEventListener("click", handleClick);
    window.veda_fn_veda_main_cartCleanup.push(() => {
      removeCartEl.removeEventListener("click", handleClick);
    });
  });
}

function handleInitCounter() {
  veda.plugins.counter(container, {
    min: 0,
    max: Infinity,
    step: 1,
    value: 0,
    onChange: (value) => {},
  });

  const btnDecrementEls = container.querySelectorAll(
    ".veda-counter__decrement"
  );
  btnDecrementEls.forEach((btnDecrementEl) => {
    btnDecrementEl.addEventListener("click", debounce(onChangeQuantity()));
    window.veda_fn_veda_main_cartCleanup.push(() => {
      btnDecrementEl.removeEventListener("click", debounce(onChangeQuantity()));
    });
  });

  const btnIncrementEls = container.querySelectorAll(
    ".veda-counter__increment"
  );
  btnIncrementEls.forEach((btnIncrementEl) => {
    btnIncrementEl.addEventListener("click", debounce(onChangeQuantity()));
    window.veda_fn_veda_main_cartCleanup.push(() => {
      btnIncrementEl.removeEventListener("click", debounce(onChangeQuantity()));
    });
  });

  const inputCounterEls = container.querySelectorAll(".veda-counter__input");
  inputCounterEls.forEach((inputCounterEl) => {
    inputCounterEl.addEventListener("change", debounce(onChangeQuantity()));
    window.veda_fn_veda_main_cartCleanup.push(() => {
      inputCounterEl.removeEventListener(
        "change",
        debounce(onChangeQuantity())
      );
    });
  });
}

function forceUpdate(actions) {
  return replaceSectionElement({
    selector: "[data-id='cartcontainer']",
    requestUrl: "/cart",
    ...actions,
    onSuccess() {
      actions.onSuccess?.();
      handleUpdateJsCart();
    },
    onFailure() {
      actions.onFailure?.();
    },
  });
}

function renderLoading() {
  if (!renderLoadingCart) {
    renderLoadingCart = true;
    const loadingContainer = document.createElement("div");
    loadingContainer.className = "cart-loading-container";
    loadingContainer.innerHTML = `
      <div class="pos:fixed t:0 l:0 w:100vw h:100vh z:999999">
        <div class="pos:absolute t:0 l:0 w:100% h:100% z:-1 bgc:color-gray9.4"></div>
        <div class="w:100% h:100% d:flex jc:center ai:center">
          <div class='veda-spinner' style='--spinner-color:var(--color-light);--spinner-size:30px'></div>
        </div>
      </div>
    `;
    document.body.append(loadingContainer);
  }
}

async function updateCart() {
  forceUpdate({
    onSuccess() {
      const cartLoadingEl = document.querySelector(".cart-loading-container");
      if (cartLoadingEl) {
        cartLoadingEl.remove();
      }
      renderLoadingCart = false;
      console.log("updateCart Success");
    },
    onFailure() {
      const cartLoadingEl = document.querySelector(".cart-loading-container");
      if (cartLoadingEl) {
        cartLoadingEl.remove();
      }
      renderLoadingCart = false;
      console.log("updateCart Failure");
    },
  });
}

function handleUpdateJsCart() {
  handleInitCounter();
  handleRemoveCartItem();
  handleNote(container);
  handleShipping(container);
  handleDiscount(container);
}

handleUpdateJsCart();

if (!builderMode) {
  const unSubCart = cart.subscribe(async (state) => {
    if (initialSubscribeCart) {
      renderLoading();
      await updateCart();
    } else {
      initialSubscribeCart = true;
    }
  });
  window.veda_fn_veda_main_cartCleanup.push(() => {
    unSubCart();
  });
}
      });
    }
veda_fn_veda_main_cart();