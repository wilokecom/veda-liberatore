function veda_fn_b116858d2a13468d9bacf6c8e1c528f7 () {
      
  if (window.veda_fn_b116858d2a13468d9bacf6c8e1c528f7Cleanup === undefined) {
    window.veda_fn_b116858d2a13468d9bacf6c8e1c528f7Cleanup = {
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
  window.veda_fn_b116858d2a13468d9bacf6c8e1c528f7Cleanup.cleanup();

      try {
        const uniqueId = "id_0a38702f-e6d3-43d2-a92a-1ef70791cd60";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const { animatedSlider, mobileMenu } = veda.plugins;

const slider = animatedSlider(container.querySelector(".veda-animated-slider"));

window.veda_fn_b116858d2a13468d9bacf6c8e1c528f7Cleanup.push(() => {
  slider.destroy();
});

function navigation() {
  const menu = mobileMenu(container, {
    backClassName: "p:15px c:color-gray9 bdb:1px_solid_color-gray2",
    closeClassName: "w:100% p:8px_15px c:color-gray9 bdb:1px_solid_color-gray2",
    onActive: (active) => {
      if (active) {
        container.style.zIndex = "999";
      } else {
        const id = setTimeout(() => {
          container.style.removeProperty("z-index");
          clearTimeout(id);
        }, 300);
        window.veda_fn_b116858d2a13468d9bacf6c8e1c528f7Cleanup.push(() => {
          clearTimeout(id);
        });
      }
    },
  });

  function checkResponsive() {
    if (window.innerWidth > 992) {
      menu.destroy();
    } else {
      menu.init();
    }
  }
  checkResponsive();
  window.addEventListener("resize", checkResponsive);
}
navigation();
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_b116858d2a13468d9bacf6c8e1c528f7();
function veda_fn_2e1b6d83289f4625857b7c720adced53 () {
        
  if (window.veda_fn_2e1b6d83289f4625857b7c720adced53Cleanup === undefined) {
    window.veda_fn_2e1b6d83289f4625857b7c720adced53Cleanup = {
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
  window.veda_fn_2e1b6d83289f4625857b7c720adced53Cleanup.cleanup();

        try {
          const uniqueIds = ["id_4c260b3a-9d5b-4e7f-a204-5aed97095af3","id_b3960ba0-d6ea-48f5-a5bb-fd1227ec91c5","id_82abb6c3-81c9-4809-81f8-863fa0316d56","id_2f2a2abb-1d19-4101-990d-2908be21889a"];
          uniqueIds.forEach(uniqueId => {
            const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
            containers.forEach(container => {
              if (!container) {
                return;
              }
              veda.plugins.videoCover(container);
              
            });
          });
        } catch(error) {
          console.error(error);
        }
      }
veda_fn_2e1b6d83289f4625857b7c720adced53();
function veda_fn_8e0aece40f7f4a9a98033ec1100d8900 () {
      
  if (window.veda_fn_8e0aece40f7f4a9a98033ec1100d8900Cleanup === undefined) {
    window.veda_fn_8e0aece40f7f4a9a98033ec1100d8900Cleanup = {
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
  window.veda_fn_8e0aece40f7f4a9a98033ec1100d8900Cleanup.cleanup();

      try {
        const uniqueId = "id_900e7b37-28d4-4a6a-84ba-e1f31316766a";
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
    window.veda_fn_8e0aece40f7f4a9a98033ec1100d8900Cleanup.push(() => {
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
  window.veda_fn_8e0aece40f7f4a9a98033ec1100d8900Cleanup.push(() => {
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
    window.veda_fn_8e0aece40f7f4a9a98033ec1100d8900Cleanup.push(() => {
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
  window.veda_fn_8e0aece40f7f4a9a98033ec1100d8900Cleanup.push(() => {
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
  window.veda_fn_8e0aece40f7f4a9a98033ec1100d8900Cleanup.push(() => {
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
            window.veda_fn_8e0aece40f7f4a9a98033ec1100d8900Cleanup.push(() => {
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
      window.veda_fn_8e0aece40f7f4a9a98033ec1100d8900Cleanup.push(() => {
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
      window.veda_fn_8e0aece40f7f4a9a98033ec1100d8900Cleanup.push(() => {
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
          regularPrice.innerHTML = variant.price;
          salePrice.innerHTML = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.innerHTML = variant.price;
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
    window.veda_fn_8e0aece40f7f4a9a98033ec1100d8900Cleanup.push(() => {
      swiperInstance.destroy();
    });
    clearTimeout(id);
  }, 0);
  window.veda_fn_8e0aece40f7f4a9a98033ec1100d8900Cleanup.push(() => {
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
veda_fn_8e0aece40f7f4a9a98033ec1100d8900();
function veda_fn_ff8ef80d5012473383d07bbfcbdae155 () {
      
  if (window.veda_fn_ff8ef80d5012473383d07bbfcbdae155Cleanup === undefined) {
    window.veda_fn_ff8ef80d5012473383d07bbfcbdae155Cleanup = {
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
  window.veda_fn_ff8ef80d5012473383d07bbfcbdae155Cleanup.cleanup();

      try {
        const uniqueId = "id_90015246-659c-411e-8f06-aeca9902ceea";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const { countdown, textfit } = veda.plugins;
const countdownEls = container.querySelectorAll(".veda-countdown");
const videoButtonEls = container.querySelectorAll(".veda-video-button-js");
const videosEl = document.querySelector(`.veda-videos-${uniqueId}-js`);
const videoEls = videosEl.querySelectorAll(".veda-video-js");
const videoCloseEls = videosEl.querySelectorAll(
  ".veda-video-close-js, .veda-video-overlay-js"
);

countdownEls.forEach((countdownEl) => {
  const destroy = countdown(countdownEl);
  window.veda_fn_ff8ef80d5012473383d07bbfcbdae155Cleanup.push(() => {
    destroy();
  });
});

function handleTransformableTextFit() {
  const fitTextEls = container.querySelectorAll(
    ".veda-transformable > .veda-textfit"
  );
  fitTextEls.forEach((el) => {
    textfit(el, { min: 5, max: 300 });
  });
}

function handleCountdownTextFit() {
  countdownEls.forEach((countdownEl) => {
    const countdownTextFitEls = countdownEl.querySelectorAll(".veda-textfit");

    countdownTextFitEls.forEach((el) => {
      textfit(el, {
        min: 5,
        max: 300,
      });
    });
  });
}

function init() {
  handleTransformableTextFit();
  handleCountdownTextFit();
}

if (builderMode) {
  init();
} else {
  if (/comp|inter/.test(document.readyState)) {
    init();
  } else {
    window.addEventListener("DOMContentLoaded", init);
  }
}
window.addEventListener("resize", init);

countdownEls.forEach((countdownEl) => {
  const mutationObserver = new MutationObserver(() => {
    handleCountdownTextFit();
  });
  mutationObserver.observe(countdownEl.parentElement, { attributes: true });
  window.veda_fn_ff8ef80d5012473383d07bbfcbdae155Cleanup.push(() => {
    mutationObserver.disconnect();
  });
});

window.veda_fn_ff8ef80d5012473383d07bbfcbdae155Cleanup.push(() => {
  window.removeEventListener("DOMContentLoaded", init);
  window.removeEventListener("resize", init);
});

videoButtonEls.forEach((videoButtonEl) => {
  function handleClick() {
    const id = videoButtonEl.getAttribute("data-button-video-id");
    const videoEl = videosEl.querySelector(`[data-video-id="${id}"`);
    if (videoEl) {
      const videoContentEl = videoEl.querySelector(".veda-video-content-js");
      const embedEl = videoEl.querySelector(".veda-embed-js");
      const src = embedEl.getAttribute("data-src");
      embedEl.innerHTML = `<iframe src="${src}" frameborder="0"></iframe>`;
      videoEl.style.visibility = "visible";
      videoContentEl.style.opacity = 1;
      videoContentEl.style.transform = "scale(1)";
    }
  }
  videoButtonEl.addEventListener("click", handleClick);
  window.veda_fn_ff8ef80d5012473383d07bbfcbdae155Cleanup.push(() => {
    videoButtonEl.removeEventListener("click", handleClick);
  });
});

videoCloseEls.forEach((videoCloseEl) => {
  function handleClose() {
    const videoEl = videoCloseEl.closest(".veda-video-js");
    const videoContentEl = videoEl.querySelector(".veda-video-content-js");
    const embedEl = videoEl.querySelector(".veda-embed-js");
    videoEl.style.removeProperty("visibility");
    videoContentEl.style.removeProperty("opacity");
    videoContentEl.style.removeProperty("transform");
    embedEl.innerHTML = "";
  }

  videoCloseEl.addEventListener("click", handleClose);

  window.veda_fn_ff8ef80d5012473383d07bbfcbdae155Cleanup.push(() => {
    videoCloseEl.removeEventListener("click", handleClose);
  });
});
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_ff8ef80d5012473383d07bbfcbdae155();
function veda_fn_3e720d0a1d90429a8654e914ea8fd990 () {
      
  if (window.veda_fn_3e720d0a1d90429a8654e914ea8fd990Cleanup === undefined) {
    window.veda_fn_3e720d0a1d90429a8654e914ea8fd990Cleanup = {
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
  window.veda_fn_3e720d0a1d90429a8654e914ea8fd990Cleanup.cleanup();

      try {
        const uniqueId = "id_b59cff6b-a3cb-446b-8f09-b078aa2ba0eb";
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
    window.veda_fn_3e720d0a1d90429a8654e914ea8fd990Cleanup.push(() => {
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
  window.veda_fn_3e720d0a1d90429a8654e914ea8fd990Cleanup.push(() => {
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
    window.veda_fn_3e720d0a1d90429a8654e914ea8fd990Cleanup.push(() => {
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
  window.veda_fn_3e720d0a1d90429a8654e914ea8fd990Cleanup.push(() => {
    unsubscribeWishList();
  });
}

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
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
  window.veda_fn_3e720d0a1d90429a8654e914ea8fd990Cleanup.push(() => {
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
            window.veda_fn_3e720d0a1d90429a8654e914ea8fd990Cleanup.push(() => {
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
      window.veda_fn_3e720d0a1d90429a8654e914ea8fd990Cleanup.push(() => {
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
      window.veda_fn_3e720d0a1d90429a8654e914ea8fd990Cleanup.push(() => {
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

function handleTabs() {
  const tabEl = container.querySelector(".veda-tabs");
  const cssLink = getObjectAttributes(tabEl.getAttribute("tabs-data-css"));
  const cssActiveLink = getObjectAttributes(
    tabEl.getAttribute("tabs-data-css-active")
  );
  const tabLinkEls = tabEl.querySelectorAll(".veda-tabs__link");
  const buttonViewAllTopEl = container.querySelector(
    ".product-tab-button-view-all"
  );
  const viewAllLinkEl = container.querySelector(".tab-vendor-link");
  const viewAllLinkData = objectParse(viewAllLinkEl.textContent);
  const instance = veda.plugins.tabs(tabEl, {
    activeIndex: 0,
    addClassName: "",
    removeClassName: "",
    onChange: (activeIndex) => {
      const activeButtonViewAll = container.querySelector(
        `.button-view-all-top[data-index="${activeIndex}"]`
      );
      tabLinkEls.forEach((tabLinkEl, index) => {
        if (index != activeIndex) {
          tabLinkEl.setAttribute("data-css", cssLink["data-css"]);
        }
      });
      if (!!buttonViewAllTopEl) {
        buttonViewAllTopEl.href = viewAllLinkData[activeIndex];
      }
      tabLinkEls[activeIndex].setAttribute(
        "data-css",
        cssActiveLink["data-css"]
      );
      if (!!activeButtonViewAll) {
        activeButtonViewAll.classList.remove("d:none");
        activeButtonViewAll.classList.add("d:inline-flex");
      }
    },
  });
  window.veda_fn_3e720d0a1d90429a8654e914ea8fd990Cleanup.push(() => {
    instance.destroy()
  })
}

handleCompare();
handleWishList();
handleQuickView();
handleCart();
handleColor();
handleTabs();
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_3e720d0a1d90429a8654e914ea8fd990();
function veda_fn_87a1d5762b3c40cbbd5c2960f4b5bb94 () {
      
  if (window.veda_fn_87a1d5762b3c40cbbd5c2960f4b5bb94Cleanup === undefined) {
    window.veda_fn_87a1d5762b3c40cbbd5c2960f4b5bb94Cleanup = {
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
  window.veda_fn_87a1d5762b3c40cbbd5c2960f4b5bb94Cleanup.cleanup();

      try {
        const uniqueId = "id_9261593f-2053-4cfe-b8aa-8c4c76b1b9d4";
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
  sticky,
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
    window.veda_fn_87a1d5762b3c40cbbd5c2960f4b5bb94Cleanup.push(() => {
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
  window.veda_fn_87a1d5762b3c40cbbd5c2960f4b5bb94Cleanup.push(() => {
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
    window.veda_fn_87a1d5762b3c40cbbd5c2960f4b5bb94Cleanup.push(() => {
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
  window.veda_fn_87a1d5762b3c40cbbd5c2960f4b5bb94Cleanup.push(() => {
    unsubscribeWishList();
  });
}

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
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
  window.veda_fn_87a1d5762b3c40cbbd5c2960f4b5bb94Cleanup.push(() => {
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
            "<div class='veda-spinner bdw:2px' style='--spinner-color: var(--color-gray9-freeze); --spinner-size: 14px'></div>";
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
            window.veda_fn_87a1d5762b3c40cbbd5c2960f4b5bb94Cleanup.push(() => {
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
      window.veda_fn_87a1d5762b3c40cbbd5c2960f4b5bb94Cleanup.push(() => {
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
      window.veda_fn_87a1d5762b3c40cbbd5c2960f4b5bb94Cleanup.push(() => {
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
          regularPrice.innerHTML = variant.price;
          salePrice.innerHTML = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.innerHTML = variant.price;
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

const sidebarEl = container.querySelector(".sidebar-js");
sticky.subscribe((height) => {
  sidebarEl.style.top = `${height + 10}px`;
});

handleCompare();
handleWishList();
handleQuickView();
handleCart();
handleColor();
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_87a1d5762b3c40cbbd5c2960f4b5bb94();