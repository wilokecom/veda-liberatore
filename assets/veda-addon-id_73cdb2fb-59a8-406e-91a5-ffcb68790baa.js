function veda_fn_id_73cdb2fb59a8406e91a5ffcb68790baa() {
    
    try {
      const uniqueId = /* _____Start/Id_____ */"id_73cdb2fb-59a8-406e-91a5-ffcb68790baa"/* _____End/Id_____ */;
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]:not(addons, megamenu)`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        /* _____Start/Content_____ */
        const {
  productCompare,
  productWishList,
  cart,
  productQuickView,
  message,
  select,
} = veda.plugins;
const { store, debounce, objectParse, formatMoney, storage, findAtomicCss } =
  veda.utils;
let initialSubscribeCart = false;
let initialSubscribeVisibleCart = false;
let loadingCalculateShipping = false;
store.create("@visibleCart", {
  initialState: false,
});
store.create("@visibleLoading", {
  initialState: false,
});
store.create("@visibleNote", {
  initialState: false,
});
store.create("@visibleShipping", {
  initialState: false,
});

store.create("@visibleDiscount", {
  initialState: false,
});

store.set("@visibleNote", () => false);
store.set("@visibleShipping", () => false);
store.set("@visibleDiscount", () => false);

let unsubscribeVisibleCart = () => {};
let unsubscribeLoading = () => {};
let unsubscribeNote = () => {};
let unsubscribeShipping = () => {};
let unsubscribeDiscount = () => {};

function getFormatMoney(price) {
  const moneyFormatEl = container.querySelector(".shipping-money-format-js");
  const currentMoneyFormat = moneyFormatEl.textContent
    .trim()
    .replace(/\d+/g, "{{amount_no_decimals}}");
  return formatMoney({ cents: price, format: currentMoneyFormat });
}

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

function countryProvinceSelector(
  el,
  countrySelector,
  provinceSelector,
  options
) {
  const countryEl = el.querySelector(countrySelector);
  const provinceEl = el.querySelector(provinceSelector);
  const provinceContainer = el.querySelector(
    options["hideElement"] || provinceSelector
  );
  const handleChange = () => {
    countryHandler(countryEl, provinceEl, provinceContainer);
  };
  countryEl.addEventListener("change", handleChange);
  onCleanup(() => {
    countryEl.removeEventListener("change", handleChange);
  });
  initCountry(countryEl, provinceEl, provinceContainer);
  initProvince(provinceEl);
}

function handleSelectContryProvince(el) {
  countryProvinceSelector(
    el,
    ".address-country-shipping",
    ".address-province-shipping",
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
    if (res.status !== 200) {
      const data = await res.json();
      return data;
      // throw new Error(res.statusText);
    } else {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function handleNote(el) {
  const btnNote = el.querySelector(".mini-cart-btn-note-js");
  const overlayEl = el.querySelector(".mini-cart-overlay-js");
  const btnSaveNoteEl = el.querySelector(".mini-cart-btn-save-note-js");
  const btnCancelEls = el.querySelectorAll(".mini-cart-btn-cancel-action-js");
  const txtNoteEl = el.querySelector("textarea[name='note']");
  if (!!btnNote) {
    unsubscribeNote();
    unsubscribeNote = store.subscribe("@visibleNote", (state) => {
      const noteContent = el.querySelector(".mini-cart-slide-in-note-js");
      if (!state) {
        noteContent.classList.remove("trf:translateY(0)");
        noteContent.classList.add("trf:translateY(100%)");
        overlayEl.classList.remove("op:0.4", "pe:auto");
        overlayEl.classList.add("op:0", "pe:none");
      } else {
        noteContent.classList.remove("trf:translateY(100%)");
        noteContent.classList.add("trf:translateY(0)");
        overlayEl.classList.remove("op:0", "pe:none");
        overlayEl.classList.add("op:0.4", "pe:auto");
      }
    });
    const handleClick = () => {
      store.set("@visibleNote", (state) => !state);
    };
    btnNote.addEventListener("click", handleClick);
    onCleanup(() => {
      unsubscribeNote();
      btnNote.removeEventListener("click", handleClick);
    });
  }
  const handleClickOverlay = () => {
    store.set("@visibleNote", () => false);
    store.set("@visibleShipping", () => false);
    store.set("@visibleDiscount", () => false);
  };
  overlayEl.addEventListener("click", handleClickOverlay);
  onCleanup(() => {
    overlayEl.removeEventListener("click", handleClickOverlay);
  });
  btnCancelEls.forEach((btnCancelEl) => {
    const handleClickCancel = () => {
      store.set("@visibleNote", () => false);
      store.set("@visibleShipping", () => false);
      store.set("@visibleDiscount", () => false);
    };
    btnCancelEl.addEventListener("click", handleClickCancel);
    onCleanup(() => {
      btnCancelEl.removeEventListener("click", handleClickCancel);
    });
  });
  const handleClickSave = async () => {
    store.set("@visibleNote", (state) => !state);
    if (!builderMode) {
      await updateNote(txtNoteEl.value);
      updateCart();
    }
  };
  btnSaveNoteEl.addEventListener("click", handleClickSave);
  onCleanup(() => {
    btnSaveNoteEl.removeEventListener("click", handleClickSave);
  });
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
              <div>${rate.name}: ${getFormatMoney(rate.price)}</div>
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
  const overlayEl = el.querySelector(".mini-cart-overlay-js");
  if (!!btnShipping) {
    unsubscribeShipping();
    unsubscribeShipping = store.subscribe("@visibleShipping", (state) => {
      const shippingContent = el.querySelector(
        ".mini-cart-slide-in-shipping-js"
      );
      if (!state) {
        shippingContent.classList.remove("trf:translateY(0)");
        shippingContent.classList.add("trf:translateY(100%)");
        overlayEl.classList.remove("op:0.4", "pe:auto");
        overlayEl.classList.add("op:0", "pe:none");
      } else {
        shippingContent.classList.remove("trf:translateY(100%)");
        shippingContent.classList.add("trf:translateY(0)");
        overlayEl.classList.remove("op:0", "pe:none");
        overlayEl.classList.add("op:0.4", "pe:auto");
      }
    });
    const handleClickShip = () => {
      store.set("@visibleNote", () => false);
      store.set("@visibleDiscount", () => false);
      store.set("@visibleShipping", (state) => !state);
    };
    btnShipping.addEventListener("click", handleClickShip);
    onCleanup(() => {
      unsubscribeShipping();
      btnShipping.removeEventListener("click", handleClickShip);
    });
    handleSelectContryProvince(el);
  }
  const handleSubmit = async () => {
    if (!loadingCalculateShipping) {
      loadingCalculateShipping = true;
      const countryEl = el.querySelector(".address-country-shipping");
      const provinceEl = el.querySelector(".address-province-shipping");
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
        const id = setTimeout(() => {
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
                delivery_date: null,
                delivery_range: null,
                delivery_days: [],
                compare_price: null,
                phone_required: false,
                currency: "USD",
                carrier_identifier: null,
                delivery_category: null,
                using_merchant_account: null,
                carrier_service_id: null,
                description: null,
                additional_data: null,
                api_client_id: null,
                requested_fulfillment_service_id: null,
                shipment_options: null,
                charge_items: null,
                has_restrictions: null,
                rating_classification: null,
                accepts_instructions: false,
              },
            ],
          };
          renderResultShipping(calculateData, resultCaculateEl);
          clearTimeout(id);
        }, 1000);
      }
    }
  };
  btnSubmitShippingEl.addEventListener("click", handleSubmit);
  onCleanup(() => {
    btnSubmitShippingEl.removeEventListener("click", handleSubmit);
  });
}

async function handleDiscount(el) {
  const btnDiscount = el.querySelector(".mini-cart-btn-discount-js");
  const overlayEl = el.querySelector(".mini-cart-overlay-js");
  const btnSaveDiscountEl = el.querySelector(".mini-cart-btn-save-discount-js");
  const txtDiscountEl = el.querySelector("input[name='discount']");
  const currentCode = storage.getItem("@discountCode");
  if (!!currentCode) {
    txtDiscountEl.value = currentCode;
  }
  if (!!btnDiscount) {
    unsubscribeDiscount();
    unsubscribeDiscount = store.subscribe("@visibleDiscount", (state) => {
      const discountContent = el.querySelector(
        ".mini-cart-slide-in-discount-js"
      );
      if (!state) {
        discountContent.classList.remove("trf:translateY(0)");
        discountContent.classList.add("trf:translateY(100%)");
        overlayEl.classList.remove("op:0.4", "pe:auto");
        overlayEl.classList.add("op:0", "pe:none");
      } else {
        discountContent.classList.remove("trf:translateY(100%)");
        discountContent.classList.add("trf:translateY(0)");
        overlayEl.classList.remove("op:0", "pe:none");
        overlayEl.classList.add("op:0.4", "pe:auto");
      }
    });
    const handleClick = () => {
      store.set("@visibleNote", () => false);
      store.set("@visibleShipping", () => false);
      store.set("@visibleDiscount", (state) => !state);
    };
    btnDiscount.addEventListener("click", handleClick);
    onCleanup(() => {
      btnDiscount.removeEventListener("click", handleClick);
      unsubscribeDiscount();
    });
  }
  const handleClickSave = async () => {
    storage.setItem("@discountCode", txtDiscountEl.value);
    store.set("@visibleDiscount", (state) => !state);
  };
  btnSaveDiscountEl.addEventListener("click", handleClickSave);
  onCleanup(() => {
    btnSaveDiscountEl.removeEventListener("click", handleClickSave);
  });
}

async function updateCart() {
  try {
    const res = await fetch(`${window.location.href}`);
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const el = doc.querySelector("[data-id='mini-cart-js']");
    const miniCartContainer = el.querySelector(".mini-cart-container-js");
    const cartCount = Number(
      miniCartContainer.querySelector(".veda-cart-count-js").textContent
    );
    const newHtml = el.innerHTML;
    const realEl = container.querySelector("[data-id='mini-cart-js']");
    realEl.innerHTML = newHtml;
    findAtomicCss(newHtml);
    const badgeCart = container.querySelector(".veda-cart-badge-js");
    if (!!badgeCart) {
      if (cartCount > 0) {
        badgeCart.textContent = `${cartCount}`;
      } else {
        badgeCart.textContent = "";
      }
    }
  } catch (e) {
    console.log(e);
  }
}

async function handleClickDraw() {
  if (builderMode) {
    const miniCart = container.querySelector(".mini-cart-js");
    store.set("@visibleCart", true);
    handleUpdateJsCart(miniCart);
  } else {
    store.set("@visibleCart", true);
  }
}

function onChangeQuantity() {
  return function (event) {
    const dataId = event.target
      .closest(".veda-counter")
      .getAttribute("data-id");
    const quantityEl = event.target
      .closest(".veda-counter")
      .querySelector(".veda-counter__input");
    const quantityValue = Number(quantityEl.value);
    store.set("@visibleLoading", true);
    if (quantityValue > 0) {
      cart.updateCart(Number(dataId), quantityValue);
    } else {
      cart.removeCart(Number(dataId));
    }
  };
}

function handleUpdateJsCart(el) {
  const btnCartCloseEls = el.querySelectorAll(".mini-cart-close-cart-js");
  btnCartCloseEls.forEach((btnCartCloseEl) => {
    const handleClickClose = () => {
      store.set("@visibleCart", false);
    };
    btnCartCloseEl.addEventListener("click", handleClickClose);
    onCleanup(() => {
      btnCartCloseEl.removeEventListener("click", handleClickClose);
    });
  });
  veda.plugins.counter(el, {
    min: 0,
    max: 20,
    step: 1,
    value: 0,
    onChange: (value) => {},
  });
  const btnDecrementEls = el.querySelectorAll(".veda-counter__decrement");
  btnDecrementEls.forEach((btnDecrementEl) => {
    btnDecrementEl.addEventListener("click", debounce(onChangeQuantity()));
    onCleanup(() => {
      btnDecrementEl.removeEventListener("click", debounce(onChangeQuantity()));
    });
  });

  const btnIncrementEls = el.querySelectorAll(".veda-counter__increment");
  btnIncrementEls.forEach((btnIncrementEl) => {
    btnIncrementEl.addEventListener("click", debounce(onChangeQuantity()));
    onCleanup(() => {
      btnIncrementEl.removeEventListener("click", debounce(onChangeQuantity()));
    });
  });

  const inputCounterEls = el.querySelectorAll(".veda-counter__input");
  inputCounterEls.forEach((inputCounterEl) => {
    inputCounterEl.addEventListener("change", debounce(onChangeQuantity()));
    onCleanup(() => {
      inputCounterEl.removeEventListener(
        "change",
        debounce(onChangeQuantity())
      );
    });
  });

  const btnRemoveEls = el.querySelectorAll(".mini-cart-btn-remove-item-js");
  btnRemoveEls.forEach((btnRemoveEl) => {
    const variantId = btnRemoveEl.getAttribute("data-id");
    const handleRemove = () => {
      store.set("@visibleLoading", true);
      cart.removeCart(Number(variantId));
    };
    btnRemoveEl.addEventListener("click", handleRemove);
    onCleanup(() => {
      btnRemoveEl.removeEventListener("click", handleRemove);
    });
  });
}

function handleTestingToggle() {
  const testing = container.getAttribute("data-testing");
  if (testing === "true") {
    store.set("@visibleCart", true);
  } else {
    store.set("@visibleCart", false);
  }
}

async function renderCart() {
  const btnCartEl = container.querySelector(".veda-cart-toggle-js");
  if (!btnCartEl) {
    return;
  }

  if (builderMode) {
    const miniCart = container.querySelector(".mini-cart-js");
    const unsubscribeCart = store.subscribe("@visibleCart", (visible) => {
      if (initialSubscribeCart) {
        if (visible) {
          const cartContaierEls = miniCart.querySelectorAll(
            ".mini-cart-container-js"
          );
          const cartContaierOverlayEl = miniCart.querySelector(
            ".mini-cart-container-overlay-js"
          );
          cartContaierOverlayEl.classList.remove("pe:none", "op:0");
          cartContaierEls.forEach((cartContaier) =>
            cartContaier.classList.add("veda-mini-cart-draw-active")
          );
        } else {
          const cartContaierEls = miniCart.querySelectorAll(
            ".mini-cart-container-js"
          );
          const cartContaierOverlayEl = miniCart.querySelector(
            ".mini-cart-container-overlay-js"
          );
          if (!cartContaierOverlayEl.classList.contains("pe:none")) {
            cartContaierOverlayEl.classList.add("pe:none", "op:0");
          }
          cartContaierEls.forEach((cartContaier) => {
            cartContaier.classList.remove("veda-mini-cart-draw-active");
            store.set("@visibleNote", () => false);
            store.set("@visibleShipping", false);
            store.set("@visibleDiscount", () => false);
          });
        }
      } else {
        initialSubscribeCart = true;
      }
    });
    handleTestingToggle();
    veda.plugins.counter(container, {
      min: 0,
      max: 20,
      step: 1,
      value: 0,
      onChange: (value) => {},
    });
    onCleanup(() => {
      unsubscribeCart();
    });
    handleNote(container);
    handleShipping(container);
    handleDiscount(container);
  } else {
    const cartInitialized = document.querySelector(".mini-cart-draw-js");
    if (!cartInitialized) {
      const contentCart = document.createElement("div");
      contentCart.classList.add("mini-cart-draw-js", "pos:relative", "z:999");
      const cartContentEl = container.querySelector(".mini-cart-js");
      contentCart.innerHTML = cartContentEl.innerHTML;
      const body = document.querySelector("body");
      body.append(contentCart);
      unsubscribeVisibleCart = store.subscribe("@visibleCart", (visible) => {
        if (initialSubscribeVisibleCart) {
          if (visible) {
            const contentCartEl = document.querySelector(".mini-cart-draw-js");
            const cartContaierEls = contentCartEl.querySelectorAll(
              ".mini-cart-container-js"
            );
            const cartContaierOverlayEl = contentCartEl.querySelector(
              ".mini-cart-container-overlay-js"
            );
            cartContaierOverlayEl.classList.remove("pe:none", "op:0");
            cartContaierEls.forEach((cartContaier) => {
              if (
                !cartContaier.classList.contains("veda-mini-cart-draw-active")
              ) {
                cartContaier.classList.add("veda-mini-cart-draw-active");
              }
            });
          } else {
            const contentCartEl = document.querySelector(".mini-cart-draw-js");
            const cartContaierEls = contentCartEl.querySelectorAll(
              ".mini-cart-container-js"
            );
            const cartContaierOverlayEl = contentCartEl.querySelector(
              ".mini-cart-container-overlay-js"
            );
            if (!cartContaierOverlayEl.classList.contains("pe:none")) {
              cartContaierOverlayEl.classList.add("pe:none", "op:0");
            }
            cartContaierEls.forEach((cartContaier) => {
              cartContaier.classList.remove("veda-mini-cart-draw-active");
              store.set("@visibleNote", () => false);
              store.set("@visibleShipping", false);
              store.set("@visibleDiscount", () => false);
            });
          }
        } else {
          initialSubscribeVisibleCart = true;
        }
      });
      contentCart.innerHTML = cartContentEl.innerHTML;
      store.set("@visibleLoading", false);
      handleUpdateJsCart(contentCart);
      handleNote(contentCart);
      handleShipping(contentCart);
      handleDiscount(contentCart);
    }
    unsubscribeLoading();
    unsubscribeLoading = store.subscribe("@visibleLoading", (state) => {
      if (!builderMode) {
        const cartContent = document.querySelector(".mini-cart-draw-js");
        const loadingOverlayEl = cartContent.querySelector(
          ".mini-cart-loading-js"
        );
        if (!state) {
          loadingOverlayEl.classList.remove("op:1", "pe:auto");
          loadingOverlayEl.classList.add("op:0", "pe:none");
        } else {
          loadingOverlayEl.classList.remove("op:0", "pe:none");
          loadingOverlayEl.classList.add("op:1", "pe:auto");
        }
      }
    });

    onCleanup(() => {
      unsubscribeVisibleCart();
      unsubscribeLoading();
    });
  }
  btnCartEl.addEventListener("click", () => handleClickDraw());
  onCleanup(() => {
    btnCartEl.removeEventListener("click", () => handleClickDraw());
  });
}

async function listenAddCart() {
  const cartInitialized = document.querySelector(".mini-cart-draw-js");
  if (!!cartInitialized) {
    await updateCart();
    const cartContent = document.querySelector(".mini-cart-draw-js");
    const cartContentEl = container.querySelector(".mini-cart-js");
    cartContent.innerHTML = cartContentEl.innerHTML;
    store.set("@visibleLoading", false);
    if (store.get("@visibleCart")) {
      const cartContaierEls = cartContent.querySelectorAll(
        ".mini-cart-container-js"
      );
      const cartContaierOverlayEl = cartContent.querySelector(
        ".mini-cart-container-overlay-js"
      );
      cartContaierOverlayEl.classList.remove("pe:none", "op:0");
      cartContaierEls.forEach((cartContaier) => {
        if (!cartContaier.classList.contains("veda-mini-cart-draw-active")) {
          cartContaier.classList.add("veda-mini-cart-draw-active");
        }
      });
    } else {
      if (!location.pathname.includes("cart")) {
        setTimeout(() => {
          store.set("@visibleCart", true);
        }, 100);
      }
    }

    handleUpdateJsCart(cartContent);
    handleNote(cartContent);
    handleShipping(cartContent);
    handleDiscount(cartContent);
  }
}

const ShopifyCartURLs = [
  "/cart/add",
  "/cart/update",
  "/cart/change",
  "/cart/clear",
  "/cart/add.js",
  "/cart/update.js",
  "/cart/change.js",
  "/cart/clear.js",
];

function isShopifyCartURL(url) {
  if (!url || typeof url != "string") return false;
  const path = url.split("/").pop();
  return ShopifyCartURLs.includes(`/cart/${path}`);
}

function fetchOverride() {
  if (!window.fetch || typeof window.fetch !== "function") return;
  const originalFetch = window.fetch;
  window.fetch = async function () {
    const response = originalFetch.apply(this, arguments);

    if (isShopifyCartURL(arguments[0])) {
      await response.then((res) => {
        res.clone().json();
      });
      listenAddCart();
    }

    return response;
  };
}

const badgeCart = container.querySelector(".veda-cart-badge-js");
const cartCount = Number(badgeCart.textContent.trim());
if (!!badgeCart) {
  if (cartCount > 0) {
    badgeCart.textContent = `${cartCount}`;
  } else {
    badgeCart.textContent = "";
  }
}

renderCart();
fetchOverride();

        /* _____End/Content_____ */
      });
    } catch (error) {
      console.log(error);
    }
  };
veda_fn_id_73cdb2fb59a8406e91a5ffcb68790baa();
