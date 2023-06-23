function veda_fn_9feb342f6f8f49609d1111a4790c8191 () {
      
  if (window.veda_fn_9feb342f6f8f49609d1111a4790c8191Cleanup === undefined) {
    window.veda_fn_9feb342f6f8f49609d1111a4790c8191Cleanup = {
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
  window.veda_fn_9feb342f6f8f49609d1111a4790c8191Cleanup.cleanup();

      try {
        const uniqueId = "id_cdad3a85-a06d-43e8-9daa-3da89a0c66c5";
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
veda_fn_9feb342f6f8f49609d1111a4790c8191();
function veda_fn_d90572dde57f41baa17b6f31c5ee1810 () {
      
  if (window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup === undefined) {
    window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup = {
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
  window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.cleanup();

      try {
        const uniqueId = "id_dc15e9df-7a2f-47f1-be0b-764c2eb2140b";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          let loading = false;
const {
  cart,
  productWishList,
  productCompare,
  photoSwipe,
  message,
  toggleGroup,
  collapse,
  swiper,
  imageZoom,
} = veda.plugins;
const {
  objectParse,
  imageUrl,
  getObjectAttributes,
  random,
  store,
  findAtomicCss,
} = veda.utils;
let iconType = "";

const wishListDataEl = container.querySelector(".product-card-data-js");
const productData = objectParse(wishListDataEl.textContent);

let initialPickUp = false;
store.create("@visiblePickup", {
  initialState: false,
});

let unsubscribePickUp = () => {};

store.create("@@productRecentlyViewed", {
  initialState: [],
  useStorage: true,
});
let productRecentlyViewed = store.get("@@productRecentlyViewed");
if (productRecentlyViewed?.length) {
  productRecentlyViewed = productRecentlyViewed.filter(
    (item) => item !== `id:${productData.id}`
  );
  store.set("@@productRecentlyViewed", () => {
    return [`id:${productData.id}`, ...productRecentlyViewed];
  });
} else {
  store.set("@@productRecentlyViewed", () => {
    return [`id:${productData.id}`];
  });
}
class PageProduct {
  constructor() {
    this.data = productData;
    this.option = productData.selected_or_first_available_variant.options;
    this.variantId = productData.selected_or_first_available_variant.id;
    this.toggleGroup = [];
    this.pickupLoading = false;
    this.swipper = swiper(container);
    this.init();
  }

  async handleClickDraw() {
    if (builderMode) {
      const pickUpEl = container.querySelector(".pickup-js");
      const overlayEl = pickUpEl.querySelector(".pickup-close-js");
      overlayEl.classList.remove("pe:none", "op:0");
      initialPickUp = true;
      store.set("@visiblePickup", true);
    } else {
      initialPickUp = true;
      store.set("@visiblePickup", true);
    }
  }

  handleUpdateJsPickUp(el) {
    const btnPickUpCloseEls = el.querySelectorAll(".pickup-close-js");
    btnPickUpCloseEls.forEach((btnPickUpCloseEl) => {
      const handleClick = () => {
        store.set("@visiblePickup", false);
      };
      btnPickUpCloseEl.addEventListener("click", handleClick);
      window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.push(() => {
        btnPickUpCloseEl.removeEventListener("click", handleClick);
      });
    });
  }

  async updatePickUp() {
    const btnTogglePickUp = container.querySelector(".veda-pickup-toggle-js");
    if (!!btnTogglePickUp) {
      try {
        const res = await fetch(
          `${window.location?.href}?variant=${this.variantId}`
        );
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, "text/html");
        const pickupContainerEl = doc.querySelector(".pickup-container-js");
        const pickupInformationEl = doc.querySelector(
          ".pickup-availability-information"
        );
        const newContainerHtml = pickupContainerEl.innerHTML;
        const newInformationHtml = pickupInformationEl.innerHTML;
        const realEl = container.querySelector(".pickup-container-js");
        const realInformationEl = container.querySelector(
          ".pickup-availability-information"
        );
        realEl.innerHTML = newContainerHtml;
        realInformationEl.innerHTML = newInformationHtml;
        const testEl = document.querySelector(".pickup-draw-js");
        if (!testEl) {
          const contentPickUp = document.createElement("div");
          contentPickUp.className = "pickup-draw-js pos:relative z:9999999";
          const pickUpContentEl = container.querySelector(".pickup-js");
          contentPickUp.innerHTML = pickUpContentEl.innerHTML;
          handleUpdateJsPickUp(contentPickUp);
        } else {
          const pickUpContentEl = container.querySelector(".pickup-js");
          testEl.innerHTML = pickUpContentEl.innerHTML;
          handleUpdateJsPickUp(testEl);
        }
        const currentBtn = realInformationEl.querySelector(
          ".veda-pickup-toggle-js"
        );
        currentBtn.addEventListener("click", this.handleClickDraw);
        window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.push(() => {
          currentBtn.removeEventListener("click", this.handleClickDraw);
        });
        this.pickupLoading = false;
        findAtomicCss(newContainerHtml);
        findAtomicCss(newInformationHtml);
      } catch (e) {
        console.log(e);
      }
    }
  }

  handleChangeVariant(variant, changeSlide) {
    const btnAddCart = container.querySelector(".product-card-add-js");
    const btnBuyNow = container.querySelector(".btn-buy-now-js");
    if (!!variant) {
      btnAddCart.classList.remove(..."pe:none op:0.5".split(" "));
      btnBuyNow?.parentNode?.classList?.remove(..."pe:none op:0.5".split(" "));
      const availableEl = container.querySelector(".veda-product-available-js");
      const skuEl = container.querySelector(".veda-product-sku-js");
      const priceEl = container.querySelector(".product-content-price-js");
      availableEl?.classList?.remove("d:none");
      skuEl?.classList?.remove("d:none");
      const onSaleEl = priceEl.querySelector(".product-price-on-sale-js");
      const notSaleEl = priceEl.querySelector(".product-price-not-sale-js");
      if (priceEl.classList.contains("d:none")) {
        priceEl?.classList?.remove("d:none");
      }
      const currentSelectedIdEl = container.querySelector(
        ".veda-product-variant-select-id-js"
      );
      const variantPosition = this.data.variants.findIndex((currentVariant) => {
        return currentVariant.id == variant.id;
      });
      if (changeSlide) {
        this.swipper?.slideTo(variantPosition);
      }
      this.variantId = variant.id;
      currentSelectedIdEl.value = `${this.variantId}`;
      if (!builderMode && !this.pickupLoading) {
        this.pickupLoading = true;
        this.updatePickUp();
      }
      // change available
      if (!!availableEl) {
        const availableTitle = availableEl.getAttribute("data-title");
        const availableInStockText =
          availableEl.getAttribute("data-instock-text");
        const availableOutOfStockText = availableEl.getAttribute(
          "data-outofstock-text"
        );
        if (variant.available) {
          const inStockText = availableInStockText.replace(
            /\d+/g,
            `${variant.inventory_quantity}`
          );
          availableEl.textContent = `${availableTitle}: ${inStockText}`;
        } else {
          availableEl.textContent = `${availableTitle}: ${availableOutOfStockText}`;
        }
      }
      // change price
      if (!!priceEl) {
        const regularPriceValue =
          Number(`${variant.compare_at_price}`.replaceAll(/\W/g, "")) | 0;
        const salePriceValue =
          Number(`${variant.price}`.replaceAll(/\W/g, "")) | 0;
        if (regularPriceValue > salePriceValue) {
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
      if (!!skuEl && !!variant.sku) {
        skuEl.textContent = `SKU: ${variant.sku}`;
      }
      this.data.options_with_values.forEach((option) => {
        const titleEl = container.querySelector(
          `.veda-option-title-${option.position}`
        );
        titleEl.textContent = `${option.name}: ${
          this.option[option.position - 1]
        }`;
      });
    } else {
      const availableEl = container.querySelector(".veda-product-available-js");
      const skuEl = container.querySelector(".veda-product-sku-js");
      const priceEl = container.querySelector(".product-content-price-js");
      if (!btnAddCart.classList.contains("pe:none")) {
        btnAddCart.classList.add(..."pe:none op:0.5".split(" "));
      }
      if (!!btnBuyNow && !btnBuyNow?.classList?.contains?.("pe:none")) {
        btnBuyNow.parentNode.classList.add(..."pe:none op:0.5".split(" "));
      }
      if (!availableEl.classList.contains("d:none") && !!availableEl) {
        availableEl.classList.add("d:none");
      }
      if (!!skuEl && !skuEl.classList.contains("d:none")) {
        skuEl.classList.add("d:none");
      }
      if (!priceEl.classList.contains("d:none") && !!priceEl) {
        priceEl.classList.add("d:none");
      }
      this.data.options_with_values.forEach((option) => {
        const titleEl = container.querySelector(
          `.veda-option-title-${option.position}`
        );
        titleEl.textContent = `${option.name}: ${
          this.option[option.position - 1]
        }`;
      });
    }
  }

  handleChangeSlide() {
    const checkEl = container.querySelector(".veda-toggle-group-1");
    if (!this.data.has_only_default_variant && !!checkEl) {
      this.data.options_with_values.forEach((option, index) => {
        const activeIndex = option.values.findIndex(
          (item) => item == this.option[index]
        );
        this.toggleGroup[index].go(activeIndex);
      });
    }
  }

  handleSelectOption() {
    const checkEl = container.querySelector(".veda-toggle-group-1");
    if (!this.data.has_only_default_variant && !!checkEl) {
      this.data.options_with_values.forEach((option) => {
        const position = Number(option.position) - 1;
        const currentActiveIndex = option.values.findIndex(
          (item) => item === option.selected_value
        );
        const el = container.querySelector(
          `.veda-toggle-group-${option.position}`
        );
        const itemDataCss = getObjectAttributes(
          el.getAttribute("data-item-css")
        );
        const itemActiveDataCss = getObjectAttributes(
          el.getAttribute("data-item-active-css")
        );
        let classItemAdd = "c:color-light bgc:color-gray9";
        let classItemRemove = "c:color-gray9 bgc:color-gray2";
        if (option.name === "Color") {
          classItemAdd = "bd:1px_solid_color-gray9";
          classItemRemove = "bd:1px_solid_color-gray3";
        }
        const currentToggle = toggleGroup(el, {
          activeIndex: Number(currentActiveIndex),
          onChange: (index) => {
            const itemEls = el.querySelectorAll(".veda-toggle-group__item");
            this.option.splice(position, 1, option.values[index]);
            const currentVariant = this.data.variants.filter(
              (variant) =>
                variant.options.length === this.option.length &&
                variant.options.every((value, index) => {
                  return value === this.option[index];
                })
            )[0];
            this.handleChangeVariant(currentVariant, true);
            itemEls.forEach((itemEl, currentIndex) => {
              if (index != currentIndex) {
                itemEl.setAttribute("data-css", itemDataCss["data-css"]);
              }
            });
            itemEls[index].setAttribute(
              "data-css",
              itemActiveDataCss["data-css"]
            );
          },
          addClassName: classItemAdd,
          removeClassName: classItemRemove,
        });
        this.toggleGroup = [...this.toggleGroup, currentToggle];
      });
    }
  }

  checkHasItem(productData, storeData) {
    return storeData?.some((item) => item.id === productData.id);
  }

  changeStatus(el, hasItem) {
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

  handleQuantity() {
    const quantityEl = container.querySelector(".veda-counter");
    if (!quantityEl) {
      return;
    }
    veda.plugins.counter(container, {
      min: 1,
      max: Infinity,
      step: 1,
      value: 1,
      onChange: (value) => {},
    });
  }

  handleWishList() {
    const btnWishListEl = container.querySelector(".wishlist-toggle-js");
    const wishListDataEl = container.querySelector(".product-card-data-js");
    const productData = objectParse(wishListDataEl.textContent);
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () =>
      this.checkHasItem(productData, productWishList.getData());
    this.changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      const hasItem = () =>
        this.checkHasItem(productData, productWishList.getData());
      const addText = btnWishListEl.getAttribute("data-add-text");
      const removeText = btnWishListEl.getAttribute("data-remove-text");
      productWishList.toggleWishList(productData);
      this.changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        message.success(addText);
      } else {
        message.error(removeText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    let unsubscribeWishList = productWishList.subscribe((state) => {
      const btnWishListEl = container.querySelector(".wishlist-toggle-js");
      const wishListDataEl = container.querySelector(".product-card-data-js");
      const productData = objectParse(wishListDataEl.textContent);
      const hasItem = () => this.checkHasItem(productData, state);
      this.changeStatus(btnWishListEl, hasItem);
    });
    window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.push(() => {
      unsubscribeWishList();
      btnWishListEl.removeEventListener("click", handleClick);
    });
  }

  handleCompare() {
    const btnCompareEl = container.querySelector(".compare-toggle-js");
    const compareDataEl = container.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const ratingCustom = container.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () =>
      this.checkHasItem(productData, productCompare.getData());
    this.changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const addText = btnCompareEl.getAttribute("data-add-text");
      const removeText = btnCompareEl.getAttribute("data-remove-text");
      this.changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        addText && message.success(addText);
      } else {
        removeText && message.error(removeText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.push(() => {
      btnCompareEl.removeEventListener("click", handleClick);
    });
    let unsubscribeCompare = productCompare.subscribe((state) => {
      const btnCompareEl = container.querySelector(".compare-toggle-js");
      const compareDataEl = container.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const hasItem = () => this.checkHasItem(productData, state);
      this.changeStatus(btnCompareEl, hasItem);
    });
    window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.push(() => {
      unsubscribeCompare();
    });
  }

  addCartSuccess(el) {
    const check = `
      <svg class="checkmark w:14px h:14px mr:10px bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
    el.insertAdjacentHTML("afterbegin", check);
    setTimeout(() => {
      const checkEl = el.querySelector(".checkmark");
      const iconEl = el.querySelector(".product-cart-add-icon-js");
      if (!!checkEl) {
        checkEl.remove();
        iconEl?.style?.removeProperty("display");
      }
      loading = false;
    }, 2000);
  }

  handleAddCart() {
    const btnAddCart = container.querySelector(".product-card-add-js");
    if (!btnAddCart) {
      return;
    }
    const handleClick = () => {
      if (!loading) {
        const iconEl = btnAddCart.querySelector(".product-cart-add-icon-js");
        const quantityEl = container.querySelector(".veda-product-quantity-js");
        loading = true;
        const spinner =
          "<div class='veda-spinner bdw:2px mr:10px' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
        btnAddCart.insertAdjacentHTML("afterbegin", spinner);
        if (iconEl) {
          iconEl.style.display = "none";
        }
        if (builderMode) {
          setTimeout(() => {
            const currentSpinner = btnAddCart.querySelector(".veda-spinner");
            currentSpinner.remove();
            this.addCartSuccess(btnAddCart);
          }, 2000);
        } else {
          const currentVariantId = container.querySelector(
            ".veda-product-variant-select-id-js"
          ).value;
          cart
            .addToCart(
              Number(currentVariantId.trim()),
              Number(quantityEl.value)
            )
            .then(() => {
              const currentSpinner = btnAddCart.querySelector(".veda-spinner");
              currentSpinner.remove();
              this.addCartSuccess(btnAddCart);
            })
            .catch((err) => {
              const currentSpinner = btnAddCart.querySelector(".veda-spinner");
              currentSpinner.remove();
              loading = false;
              message.error(err.toString());
            });
        }
      }
    };
    btnAddCart.addEventListener("click", handleClick);
    window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.push(() => {
      btnAddCart.removeEventListener("click", handleClick);
    });
  }

  handleViewing() {
    const viewingEl = container.querySelector(".quantity-viewing-js");
    if (!viewingEl) {
      return;
    }
    const min = viewingEl.getAttribute("data-min");
    const max = viewingEl.getAttribute("data-max");
    const text = viewingEl.getAttribute("data-text");
    const time = viewingEl.getAttribute("data-time");
    const intervalID = setInterval(() => {
      viewingEl.textContent = `${text.replace(
        /\d/g,
        `${random(Number(min), Number(max))}`
      )}`;
    }, Number(time) * 1000);
    window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.push(() => {
      clearInterval(intervalID);
    });
  }

  handleDOM() {
    this.handleSelectOption();
    this.handleQuantity();
    this.handleWishList();
    this.handleCompare();
    this.handleAddCart();
    this.handleViewing();
    collapse(container, {
      activeClass: "collapse-active",
    });
  }

  init() {
    this.handleDOM();
    if (!!this.swipper) {
      this.swipper?.on("slideChange", () => {
        this.option.forEach((item, index) => {
          this.option[index] =
            this.data.variants[this.swipper?.realIndex].options[index];
        });
        this.handleChangeVariant(
          this.data.variants[this.swipper?.realIndex],
          false
        );
        this.handleChangeSlide();
      });
      window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.push(() => {
        this.swipper?.destroy();
      });
    }
    this.handleChangeSlide();
  }
}
new PageProduct();
const photo = photoSwipe({
  gallery: ".veda-photo-swipe",
});
imageZoom(container);
window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.push(() => {
  photo();
});
async function handleClickDraw() {
  if (builderMode) {
    const pickUpEl = container.querySelector(".pickup-js");
    const overlayEl = pickUpEl.querySelector(".pickup-close-js");
    overlayEl.classList.remove("pe:none", "op:0");
    initialPickUp = true;
    store.set("@visiblePickup", true);
  } else {
    initialPickUp = true;
    store.set("@visiblePickup", true);
  }
}

function handleUpdateJsPickUp(el) {
  const btnPickUpCloseEls = el.querySelectorAll(".pickup-close-js");
  btnPickUpCloseEls.forEach((btnPickUpCloseEl) => {
    const handleClick = () => {
      store.set("@visiblePickup", false);
    };
    btnPickUpCloseEl.addEventListener("click", handleClick);
    window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.push(() => {
      btnPickUpCloseEl.removeEventListener("click", handleClick);
    });
  });
}

async function renderPickUp() {
  const btnTogglePickUp = container.querySelector(".veda-pickup-toggle-js");
  if (!btnTogglePickUp) {
    return;
  }

  if (builderMode) {
    const pickUpEl = container.querySelector(".pickup-js");
    const overlayEl = pickUpEl.querySelector(".pickup-close-js");
    const unsubscribePickUp = store.subscribe("@visiblePickup", (visible) => {
      if (visible) {
        if (initialPickUp) {
          overlayEl.classList.remove("pe:none", "op:0");
          const pickUpContaierEls = pickUpEl.querySelectorAll(
            ".pickup-container-js"
          );
          pickUpContaierEls.forEach((pickUpContaier) =>
            pickUpContaier.classList.add("trf:translateX(0)!")
          );
        } else {
          initialPickUp = true;
        }
      } else {
        const pickUpContaierEls = pickUpEl.querySelectorAll(
          ".pickup-container-js"
        );
        if (!overlayEl.classList.contains("op:0")) {
          overlayEl.classList.add("op:0", "pe:none");
        }
        const id = setTimeout(() => {
          pickUpContaierEls.forEach((pickUpContaier) => {
            pickUpContaier.classList.remove("trf:translateX(0)!");
          });
          clearTimeout(id);
        }, 0);
      }
    });
    handleUpdateJsPickUp(container);
    window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.push(() => {
      unsubscribePickUp();
    });
  } else {
    const pickUpInitialized = document.querySelector(".pickup-draw-js");
    if (!pickUpInitialized) {
      const contentPickUp = document.createElement("div");
      contentPickUp.className = "pickup-draw-js pos:relative z:9999999";
      const pickUpContentEl = container.querySelector(".pickup-js");
      contentPickUp.innerHTML = pickUpContentEl.innerHTML;
      const body = document.querySelector("body");
      body.append(contentPickUp);
      unsubscribevisiblePickup = store.subscribe(
        "@visiblePickup",
        (visible) => {
          if (visible) {
            const contentPickUpEl = document.querySelector(".pickup-draw-js");
            const overlayEl = contentPickUpEl.querySelector(".pickup-close-js");
            const id = setTimeout(() => {
              overlayEl.classList.remove("op:0", "pe:none");
              const pickUpContaierEls = contentPickUpEl.querySelectorAll(
                ".pickup-container-js"
              );
              pickUpContaierEls.forEach((pickUpContaier) => {
                if (!pickUpContaier.classList.contains("trf:translateX(0)!")) {
                  pickUpContaier.classList.add("trf:translateX(0)!");
                }
              });
              clearTimeout(id);
            }, 100);
            window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.push(() => {
              clearTimeout(id);
            });
          } else {
            const contentPickUpEl = document.querySelector(".pickup-draw-js");
            const pickUpContaierEls = contentPickUpEl.querySelectorAll(
              ".pickup-container-js"
            );
            const overlayEl = contentPickUpEl.querySelector(".pickup-close-js");
            if (!overlayEl.classList.contains("op:0")) {
              overlayEl.classList.add("op:0", "pe:none");
            }
            pickUpContaierEls.forEach((pickUpContaier) => {
              pickUpContaier.classList.remove("trf:translateX(0)!");
            });
          }
        }
      );
      contentPickUp.innerHTML = pickUpContentEl.innerHTML;
      handleUpdateJsPickUp(contentPickUp);
    }

    window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.push(() => {
      unsubscribevisiblePickup();
    });
  }
  btnTogglePickUp.addEventListener("click", handleClickDraw);
  window.veda_fn_d90572dde57f41baa17b6f31c5ee1810Cleanup.push(() => {
    btnTogglePickUp.removeEventListener("click", handleClickDraw);
  });
}
renderPickUp();
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_d90572dde57f41baa17b6f31c5ee1810();
function veda_fn_0c5f9dcc0f4149a9b2df3f12d2b5d768 () {
      
  if (window.veda_fn_0c5f9dcc0f4149a9b2df3f12d2b5d768Cleanup === undefined) {
    window.veda_fn_0c5f9dcc0f4149a9b2df3f12d2b5d768Cleanup = {
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
  window.veda_fn_0c5f9dcc0f4149a9b2df3f12d2b5d768Cleanup.cleanup();

      try {
        const uniqueId = "id_66d27f2a-ce0d-4685-860c-ecb4f90acb45";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const { getObjectAttributes, storage } = veda.utils;
const tabEl = container.querySelector(".veda-tabs");
const cssLink = getObjectAttributes(tabEl.getAttribute("tabs-data-css"));
const cssActiveLink = getObjectAttributes(
  tabEl.getAttribute("tabs-data-css-active")
);
const tabLinkEls = tabEl.querySelectorAll(".veda-tabs__link");
const tabCollapseEls = tabEl.querySelectorAll(".veda-tabs__collapse-button");

function handleChange(els, currentIndex) {
  els.forEach((el, index) => {
    if (index != currentIndex) {
      el.setAttribute("data-css", cssLink["data-css"]);
    }
  });
  els[currentIndex].setAttribute("data-css", cssActiveLink["data-css"]);
}

const instance = veda.plugins.tabs(tabEl, {
  activeIndex: Number(storage.getItem("current-tab-detail")) || 0,
  onChange: (currentIndex) => {
    handleChange(tabLinkEls, currentIndex);
    handleChange(tabCollapseEls, currentIndex);
    if (builderMode) {
      storage.setItem("current-tab-detail", `${currentIndex}`);
    }
  },
});
if (builderMode) {
  instance.go(Number(storage.getItem("current-tab-detail")) || 0);
}
window.veda_fn_0c5f9dcc0f4149a9b2df3f12d2b5d768Cleanup.push(() => {
  instance.destroy();
});

function handleActiveAddOn() {
  const paneItems = container.querySelectorAll(".veda-tabs__pane");
  const currentIndexTab =
    Array.from(paneItems)?.findIndex(
      (item) => !!item?.querySelector(".veda-review_widget")
    ) || 0;
  const ratingItem = document.querySelector(".veda-review_rating");
  const reviewItem = document.querySelector(".veda-review_widget");
  if (!!ratingItem && !!reviewItem) {
    function handleClickAddon() {
      const currentSection = reviewItem.closest("section");
      if (instance.index != currentIndexTab) {
        instance.go(Number(currentIndexTab));
      }
      const id = setTimeout(() => {
        if (!!currentSection) {
          window.scrollTo({
            top: currentSection.getBoundingClientRect().top,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: reviewItem.getBoundingClientRect().top,
            behavior: "smooth",
          });
        }
        clearTimeout(id);
      }, 300);
    }
    ratingItem.addEventListener("click", handleClickAddon, true);
    window.veda_fn_0c5f9dcc0f4149a9b2df3f12d2b5d768Cleanup.push(() => {
      ratingItem.removeEventListener("click", handleClickAddon, true);
    });
  }
}
handleActiveAddOn();

if (builderMode) {
  function handleMessage(event) {
    if (event.data?.type == "Veda:AddonToggle") {
      const currentSection = document.querySelector(
        `[data-id="${event.data?.payload?.sectionIds?.[0]}"`
      );
      if (!!currentSection) {
        const paneItems = container.querySelectorAll(".veda-tabs__pane");
        const currentIndexTab = Array.from(paneItems)?.findIndex(
          (item) =>
            !!item?.querySelector(`[data-id="${event.data?.payload?.id}"]`)
        );
        if (currentIndexTab) {
          if (instance.index != currentIndexTab) {
            instance.go(Number(currentIndexTab));
          }
        }
        const id = setTimeout(() => {
          const currentSection1 = document.querySelector(
            `[data-id="${event.data?.payload?.sectionIds?.[0]}"`
          );
          window.scrollTo({
            top: currentSection1.getBoundingClientRect().top,
            behavior: "smooth",
          });
          clearTimeout(id);
        }, 300);
      }
    }
  }
  window.addEventListener("message", handleMessage);
  window.veda_fn_0c5f9dcc0f4149a9b2df3f12d2b5d768Cleanup.push(() => {
    window.removeEventListener("message", handleMessage);
  });
}
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_0c5f9dcc0f4149a9b2df3f12d2b5d768();
function veda_fn_4d465082e6c9423cb72d574dd86a8976 () {
      
  if (window.veda_fn_4d465082e6c9423cb72d574dd86a8976Cleanup === undefined) {
    window.veda_fn_4d465082e6c9423cb72d574dd86a8976Cleanup = {
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
  window.veda_fn_4d465082e6c9423cb72d574dd86a8976Cleanup.cleanup();

      try {
        const uniqueId = "id_4d48fa01-dad8-476f-9b37-f9392eac2cc5";
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
const { objectParse, imageUrl, getObjectAttributes, findAtomicCss } =
  veda.utils;
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
    window.veda_fn_4d465082e6c9423cb72d574dd86a8976Cleanup.push(() => {
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
  window.veda_fn_4d465082e6c9423cb72d574dd86a8976Cleanup.push(() => {
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
    window.veda_fn_4d465082e6c9423cb72d574dd86a8976Cleanup.push(() => {
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
  window.veda_fn_4d465082e6c9423cb72d574dd86a8976Cleanup.push(() => {
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
  window.veda_fn_4d465082e6c9423cb72d574dd86a8976Cleanup.push(() => {
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
            window.veda_fn_4d465082e6c9423cb72d574dd86a8976Cleanup.push(() => {
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
      window.veda_fn_4d465082e6c9423cb72d574dd86a8976Cleanup.push(() => {
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
      const handleclick = () => {
        productQuickView.togglePopup({
          ...productData,
        });
      };
      btnQuickViewEl.addEventListener("click", handleclick);
      window.veda_fn_4d465082e6c9423cb72d574dd86a8976Cleanup.push(() => {
        btnQuickViewEl.removeEventListener("click", handleclick);
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
  const instance = swiper(container);
  window.veda_fn_4d465082e6c9423cb72d574dd86a8976Cleanup.push(() => {
    instance.destroy();
  });
}
if (builderMode) {
  handleCompare();
  handleWishList();
  handleQuickView();
  handleCart();
  handleColor();
  handleSwiper();
} else {
  const productRecommendationsSection = container.querySelector(
    ".veda-swiper-wrapper"
  );
  const url = productRecommendationsSection.getAttribute("data-url");
  fetch(url)
    .then((response) => response.text())
    .then((text) => {
      const html = document.createElement("div");
      html.innerHTML = text;
      const recommendations = html.querySelector(".veda-swiper-wrapper");

      if (recommendations && recommendations.innerHTML.trim().length) {
        productRecommendationsSection.innerHTML = recommendations.innerHTML;
        findAtomicCss(recommendations.innerHTML);
        handleCompare();
        handleWishList();
        handleQuickView();
        handleCart();
        handleColor();
        handleSwiper();
      } else {
        container.style.display = "none";
      }
    });
}
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_4d465082e6c9423cb72d574dd86a8976();
function veda_fn_73f97e0972f74954a488f937ae104158 () {
      
  if (window.veda_fn_73f97e0972f74954a488f937ae104158Cleanup === undefined) {
    window.veda_fn_73f97e0972f74954a488f937ae104158Cleanup = {
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
  window.veda_fn_73f97e0972f74954a488f937ae104158Cleanup.cleanup();

      try {
        const uniqueId = "id_37a10f93-5721-4952-8aca-85a463bcebc7";
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
const { objectParse, imageUrl, getObjectAttributes, store, findAtomicCss } =
  veda.utils;
let loading = false;
store.create("@@productRecentlyViewed", {
  initialState: [],
  useStorage: true,
});

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
    window.veda_fn_73f97e0972f74954a488f937ae104158Cleanup.push(() => {
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
  window.veda_fn_73f97e0972f74954a488f937ae104158Cleanup.push(() => {
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
    window.veda_fn_73f97e0972f74954a488f937ae104158Cleanup.push(() => {
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
  window.veda_fn_73f97e0972f74954a488f937ae104158Cleanup.push(() => {
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
  window.veda_fn_73f97e0972f74954a488f937ae104158Cleanup.push(() => {
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
            window.veda_fn_73f97e0972f74954a488f937ae104158Cleanup.push(() => {
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
      window.veda_fn_73f97e0972f74954a488f937ae104158Cleanup.push(() => {
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
      window.veda_fn_73f97e0972f74954a488f937ae104158Cleanup.push(() => {
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
    const instance = swiper(container);
    const el = container.querySelector(".swiper-wrapper");
    el.style.alignItems = "stretch";
    window.veda_fn_73f97e0972f74954a488f937ae104158Cleanup.push(() => {
      instance.destroy();
    });
    clearTimeout(id);
  }, 0);
  window.veda_fn_73f97e0972f74954a488f937ae104158Cleanup.push(() => {
    clearTimeout(id);
  });
}

const productLimit = Number(container.getAttribute("data-product-limit"));
const recentlyViewedIds = store
  .get("@@productRecentlyViewed")
  ?.slice(0, productLimit);
if (builderMode) {
  handleCompare();
  handleWishList();
  handleQuickView();
  handleCart();
  handleColor();
  handleSwiper();
} else if (recentlyViewedIds?.length) {
  const recentlyViewedIdsUrl = encodeURI(recentlyViewedIds.join(" OR "));
  const sectionId = container.getAttribute("data-section-id");
  const searchUrl = container.getAttribute("data-search-url");
  const productRecentlyViewedContent = container.querySelector(
    ".veda-swiper-wrapper"
  );
  fetch(
    `${searchUrl}/?section_id=${sectionId}&type=product&options[unavailable_products]=show&q=${recentlyViewedIdsUrl}`
  )
    .then((response) => response.text())
    .then((text) => {
      const html = document.createElement("div");
      html.innerHTML = text;
      const recentlyViewed = html.querySelector(".veda-swiper-wrapper");

      if (!!recentlyViewed && recentlyViewed.innerHTML.trim().length) {
        productRecentlyViewedContent.innerHTML = recentlyViewed.innerHTML;
        findAtomicCss(recentlyViewed.innerHTML);
        handleCompare();
        handleWishList();
        handleQuickView();
        handleCart();
        handleColor();
        handleSwiper();
      }
    });
} else {
  container.style.display = "none";
}
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_73f97e0972f74954a488f937ae104158();