function veda_fn_f815420a65d441918764435a48607c91 () {
      
  if (window.veda_fn_f815420a65d441918764435a48607c91Cleanup === undefined) {
    window.veda_fn_f815420a65d441918764435a48607c91Cleanup = {
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
  window.veda_fn_f815420a65d441918764435a48607c91Cleanup.cleanup();

      try {
        const uniqueId = "id_9a05ff5d-097b-4fef-817b-da1af258097b";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_f815420a65d441918764435a48607c91();
function veda_fn_feebb53d49944e0eb642ab7078f23eb3 () {
      
  if (window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup === undefined) {
    window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup = {
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
  window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup.cleanup();

      try {
        const uniqueId = "id_bea0951a-6e3f-402d-8907-026e2ff0d4ad";
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
    window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup.push(() => {
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
    window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup.push(() => {
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
  btnSaveNoteEl.addEventListener("click", handleClickSave);
  window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup.push(() => {
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
    btnShipping.addEventListener("click", handleClickShip);
    window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup.push(() => {
      unsubscribeShipping();
      btnShipping.removeEventListener("click", handleClickShip);
    });
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
  btnSubmitShippingEl.addEventListener("click", handleClickSubmit);
  window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup.push(() => {
    btnSubmitShippingEl.removeEventListener("click", handleClickSubmit);
  });
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
    btnDiscount.addEventListener("click", handleClick);
    window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup.push(() => {
      unsubscribeDiscount();
      btnDiscount.removeEventListener("click", handleClick);
    });
  }
  const handleClickSave = async () => {
    storage.setItem("@discountCode", txtDiscountEl.value);
    store.set("@visibleDiscountCart", (state) => !state);
  };
  btnSaveDiscountEl.addEventListener("click", handleClickSave);
  window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup.push(() => {
    btnSaveDiscountEl.removeEventListener("click", handleClickSave);
  });
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
    window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup.push(() => {
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
    window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup.push(() => {
      btnDecrementEl.removeEventListener("click", debounce(onChangeQuantity()));
    });
  });

  const btnIncrementEls = container.querySelectorAll(
    ".veda-counter__increment"
  );
  btnIncrementEls.forEach((btnIncrementEl) => {
    btnIncrementEl.addEventListener("click", debounce(onChangeQuantity()));
    window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup.push(() => {
      btnIncrementEl.removeEventListener("click", debounce(onChangeQuantity()));
    });
  });

  const inputCounterEls = container.querySelectorAll(".veda-counter__input");
  inputCounterEls.forEach((inputCounterEl) => {
    inputCounterEl.addEventListener("change", debounce(onChangeQuantity()));
    window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup.push(() => {
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
  window.veda_fn_feebb53d49944e0eb642ab7078f23eb3Cleanup.push(() => {
    unSubCart();
  });
}
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_feebb53d49944e0eb642ab7078f23eb3();
function veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3 () {
      
  if (window.veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3Cleanup === undefined) {
    window.veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3Cleanup = {
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
  window.veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3Cleanup.cleanup();

      try {
        const uniqueId = "id_9d0ae978-da05-4fd1-899d-053d88a87004";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const {
  message,
  productCompare,
  productWishList,
  productQuickView,
  productColor,
  cart,
  swiper,
} = veda.plugins;
const { objectParse, imageUrl, getObjectAttributes } = veda.utils;
let loading = false;

function checkHasItem(productData, storeData) {
  return storeData?.some((item) => item.id === productData.id);
}

let iconType = "";
function changeStatus(el, hasItem) {
  if (!el) {
    return;
  }
  /** @type HTMLElement */
  const iconEl = el.querySelector('i[class^="fa"]');
  if (!iconType) {
    iconType = Array.from(iconEl.classList).find((className) =>
      /fa\w/g.test(className)
    );
  }
  if (hasItem()) {
    el.setAttribute("data-tooltip-active", true);
    el.style.setProperty("color", "var(--color-primary)", "important");
    if (iconType.includes("fa")) {
      iconEl.classList.remove(iconType);
      iconEl.classList.add("fas");
    }
  } else {
    el.setAttribute("data-tooltip-active", false);
    el.style.removeProperty("color");
    if (iconType.includes("fa")) {
      iconEl.classList.remove("fas");
      iconEl.classList.add(iconType);
    }
  }
  return hasItem;
}

function handleCompare() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnCompareEl = card.querySelector(".compare-toggle-js");
    const ratingCustom = card.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productCompare.getData());
    changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const tooltipText = btnCompareEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnCompareEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    window.veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3Cleanup.push(() => {
      btnCompareEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeCompare = productCompare.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const compareDataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const btnCompareEl = card.querySelector(".compare-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnCompareEl, hasItem);
    });
  });
  window.veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3Cleanup.push(() => {
    unsubscribeCompare();
  });
}

function handleWishList() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnWishListEl = card.querySelector(".wishlist-toggle-js");
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productWishList.getData());
    changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      productWishList.toggleWishList(productData);
      const tooltipText = btnWishListEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnWishListEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    window.veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3Cleanup.push(() => {
      btnWishListEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeWishList = productWishList.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const dataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(dataEl.textContent);
      const btnWishList = card.querySelector(".wishlist-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnWishList, hasItem);
    });
  });
  window.veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3Cleanup.push(() => {
    unsubscribeWishList();
  });
}

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px mr:5px bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
  el.insertAdjacentHTML("afterbegin", check);
  const id = setTimeout(() => {
    const checkEl = el.querySelector(".checkmark");
    const iconEl = el.querySelector(".product-cart-add-icon-js");
    if (!!checkEl) {
      checkEl.remove();
      iconEl.style.removeProperty("display");
    }
    loading = false;
    clearTimeout(id);
  }, 2000);
  window.veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3Cleanup.push(() => {
    clearTimeout(id);
  });
}

function handleCart() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const btnAddCartEls = card.querySelectorAll(".product-card-add-js");
    if (!btnAddCartEls) {
      return;
    }
    btnAddCartEls.forEach((btnAddCartEl) => {
      const iconEl = btnAddCartEl.querySelector(".product-cart-add-icon-js");
      const currentVariantIdEl = btnAddCartEl
        .closest(".product-card-js")
        .querySelector(".current-variant-id");
      const handleClick = async (event) => {
        event.preventDefault();
        if (!loading) {
          loading = true;
          const spinner =
            "<div class='veda-spinner bdw:2px' style='--spinner-color: var(--color-gray9); --spinner-size: 14px'></div>";
          btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
          iconEl.style.display = "none";
          if (builderMode) {
            const id = setTimeout(() => {
              const currentSpinner =
                btnAddCartEl.querySelector(".veda-spinner");
              currentSpinner.remove();
              addCartSuccess(btnAddCartEl);
              clearTimeout(id);
            }, 2000);
            window.veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3Cleanup.push(() => {
              clearTimeout(id);
            });
          } else {
            cart
              .addToCart(Number(currentVariantIdEl.textContent.trim()), 1)
              .then(() => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                addCartSuccess(btnAddCartEl);
              })
              .catch((err) => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                loading = false;
                message.error(err.toString());
              });
          }
        }
      };
      btnAddCartEl.addEventListener("click", handleClick);
      window.veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3Cleanup.push(() => {
        btnAddCartEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleQuickView() {
  const listCard = container.querySelectorAll(".product-card-js");
  const quickViewDataEl = container.querySelector(".quickview-data-js");
  if (!!quickViewDataEl) {
    const quickViewData = objectParse(quickViewDataEl.textContent);
    productQuickView.customQuickView(quickViewData);
  }
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const btnQuickViewEls = card.querySelectorAll(".quickview-toggle-js");
    if (!btnQuickViewEls) {
      return;
    }
    btnQuickViewEls.forEach((btnQuickViewEl) => {
      const handleClick = () => {
        productQuickView.togglePopup({
          ...productData,
        });
      };
      btnQuickViewEl.addEventListener("click", handleClick);
      window.veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3Cleanup.push(() => {
        btnQuickViewEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleColor() {
  const listCard = container.querySelectorAll(".product-card-js");
  productColor.init({
    onChange: (_color, image, currentEl, _, variant) => {
      const currentPriceEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-content-price-js");
      const currentVariantIdEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".current-variant-id");
      const quickViewDataEl = container.querySelector(".quickview-data-js");
      const quickViewData = objectParse(quickViewDataEl.textContent);
      console.log(quickViewDataEl, quickViewData);
      const availableEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".available-product-js");
      if (!!currentVariantIdEl) {
        currentVariantIdEl.textContent = variant.id;
      }
      if (!!currentPriceEl) {
        const onSaleEl = currentPriceEl.querySelector(
          ".product-price-on-sale-js"
        );
        const notSaleEl = currentPriceEl.querySelector(
          ".product-price-not-sale-js"
        );
        if (variant.compare_at_price > variant.price) {
          const regularPrice = onSaleEl.querySelector("ins");
          const salePrice = onSaleEl.querySelector("del");
          onSaleEl.classList.remove("d:none");
          if (!notSaleEl.classList.contains("d:none")) {
            notSaleEl.classList.add("d:none");
          }
          regularPrice.textContent = variant.price;
          salePrice.textContent = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.textContent = variant.price;
        }
      }
      if (!!availableEl) {
        if (variant.available) {
          if (variant.inventory_quantity > 1) {
            const inStockText = quickViewData.in_stock.replace(
              /\d/g,
              variant.inventory_quantity
            );
            const availableCss =
              availableEl.parentNode.getAttribute("data-instock");
            availableEl.textContent = inStockText;
            availableEl.parentNode.classList.remove(
              ..."c:#139f62 c:#e4a72d c:#eb4747".split(" ")
            );
            availableEl.parentNode.classList.add("c:#139f62");
            if (!!availableCss) {
              availableEl.parentNode.setAttribute(
                "data-css",
                getObjectAttributes(availableCss)["data-css"]
              );
            }
          } else {
            const availableCss = availableEl.getAttribute("data-available-one");
            availableEl.textContent = `${quickViewData.only}`;
            availableEl.parentNode.classList.remove(
              ..."c:#139f62 c:#e4a72d c:#eb4747".split(" ")
            );
            availableEl.parentNode.classList.add("c:#e4a72d");
            if (!!availableCss) {
              availableEl.parentNode.setAttribute(
                "data-css",
                getObjectAttributes(availableCss)["data-css"]
              );
            }
          }
        } else {
          const availableCss = availableEl.getAttribute("data-outofstock");
          availableEl.textContent = `${quickViewData.out_of_stock}`;
          availableEl.parentNode.classList.remove(
            ..."c:#139f62 c:#e4a72d c:#eb4747".split(" ")
          );
          availableEl.parentNode.classList.add("c:#eb4747");
          if (!!availableCss) {
            availableEl.setAttribute(
              "data-css",
              getObjectAttributes(availableCss)["data-css"]
            );
          }
        }
      }
      const currentImage = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      currentImage.src = imageUrl(image, 10);
    },
    onMouseEnter: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.setProperty("opacity", "1");
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "opacity",
          "0"
        );
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "left",
          "-10000px"
        );
      }
    },
    onMouseLeave: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.removeProperty("opacity");
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "opacity"
        );
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "left"
        );
      }
    },
  });
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const colorWrapper = card.querySelector(".product-card-colors-js");
    if (!colorWrapper) {
      return;
    }
    productColor.render(colorWrapper, productData);
  });
}

function handleSwiper() {
  const id = setTimeout(() => {
    const swiperInstance = swiper(container);
    const el = container.querySelector(".swiper-wrapper");
    el.style.alignItems = "stretch";
    window.veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3Cleanup.push(() => {
      swiperInstance.destroy();
    });
    clearTimeout(id);
  }, 0);
  window.veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3Cleanup.push(() => {
    clearTimeout(id);
  });
}

handleCompare();
handleWishList();
handleQuickView();
handleCart();
handleColor();
handleSwiper();
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_5c7ac08bb2dd4ce7b039de9ad9f708b3();