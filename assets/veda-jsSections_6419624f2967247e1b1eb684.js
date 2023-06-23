function veda_fn_fe2693e72aea4494a14b384f3aa59da0 () {
        
  if (window.veda_fn_fe2693e72aea4494a14b384f3aa59da0Cleanup === undefined) {
    window.veda_fn_fe2693e72aea4494a14b384f3aa59da0Cleanup = {
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
  window.veda_fn_fe2693e72aea4494a14b384f3aa59da0Cleanup.cleanup();

        try {
          const uniqueIds = ["id_e5e42e51-3291-40f9-81fa-288b19bec147","id_064b2b77-14d0-4451-a09f-a8c96d0630fe"];
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
veda_fn_fe2693e72aea4494a14b384f3aa59da0();
function veda_fn_70ae9dbad11f4b61b19a883a84e3ef74 () {
      
  if (window.veda_fn_70ae9dbad11f4b61b19a883a84e3ef74Cleanup === undefined) {
    window.veda_fn_70ae9dbad11f4b61b19a883a84e3ef74Cleanup = {
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
  window.veda_fn_70ae9dbad11f4b61b19a883a84e3ef74Cleanup.cleanup();

      try {
        const uniqueId = "id_91b20720-23a8-413d-af7c-65c1454400bc";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const {
  collectionsFilters,
  message,
  productCompare,
  productWishList,
  productQuickView,
  productColor,
  cart,
  modal,
  toggleGroup,
} = veda.plugins;
const {
  objectParse,
  imageUrl,
  getObjectAttributes,
  store,
  queryString,
  storage,
  findAtomicCss,
  offset,
} = veda.utils;
const { html } = veda.utils.csr;
const toggleGroupEl = container.querySelector(".veda-toggle-group");
const emptyEl = container.querySelector(".veda-empty");

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
    window.veda_fn_70ae9dbad11f4b61b19a883a84e3ef74Cleanup.push(() => {
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
  window.veda_fn_70ae9dbad11f4b61b19a883a84e3ef74Cleanup.push(() => {
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
    window.veda_fn_70ae9dbad11f4b61b19a883a84e3ef74Cleanup.push(() => {
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
  window.veda_fn_70ae9dbad11f4b61b19a883a84e3ef74Cleanup.push(() => {
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
            "<div class='veda-spinner bdw:2px' style='--spinner-color: var(--color-primary); --spinner-size: 14px'></div>";
          btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
          if (!!iconEl) {
            iconEl.style.display = "none";
          }
          if (builderMode) {
            setTimeout(() => {
              const currentSpinner =
                btnAddCartEl.querySelector(".veda-spinner");
              currentSpinner.remove();
              addCartSuccess(btnAddCartEl);
            }, 2000);
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
      window.veda_fn_70ae9dbad11f4b61b19a883a84e3ef74Cleanup.push(() => {
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
      window.veda_fn_70ae9dbad11f4b61b19a883a84e3ef74Cleanup.push(() => {
        btnQuickViewEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleColor() {
  const listCard = container.querySelectorAll(".product-card-js");
  const quickViewDataEl = container.querySelector(".quickview-data-js");
  const quickViewData = objectParse(quickViewDataEl.textContent);
  productColor.init({
    onChange: (color, image, currentEl, _, variant) => {
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

function handleLayout() {
  const LAYOUT_ACTION = `@@collectionFilters/layout/${uniqueId}`;
  const dataFilterVariant = container.getAttribute("data-filter-variant");
  const isFixed = ["top_left_fixed", "top_right_fixed"].includes(
    dataFilterVariant
  );
  store.create(LAYOUT_ACTION, {
    initialState: {
      desktop: { layout: "grid", index: isFixed ? 4 : 3 },
      tablet: { layout: "grid", index: 2 },
      mobile: { layout: "grid", index: 1 },
    },
    useStorage: !builderMode,
  });

  // cannot delete the following 4 lines of variable declarations
  const toggleGroupEl = container.querySelector(".veda-toggle-group");
  const rowGridEl = container.querySelector(".row-grid-js");
  const rowListEl = container.querySelector(".row-list-js");
  const toggleItemEls = container.querySelectorAll(".veda-toggle-group__item");

  function getDevice() {
    if (window.innerWidth > 992) {
      return "desktop";
    } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
      return "tablet";
    } else {
      return "mobile";
    }
  }

  function getActiveIndex() {
    const currentTabs = store.get(LAYOUT_ACTION);
    return currentTabs[getDevice()].index;
  }

  function removeClass() {
    rowGridEl.className = "";
  }

  function addClass() {
    const currentCol = toggleItemEls[getActiveIndex()].getAttribute("data-col");
    rowGridEl.classList.add(
      "row-grid-js",
      "row",
      `row-cols-lg-${currentCol}`,
      `row-cols-md-${currentCol}`,
      `row-cols-sm-${currentCol}`,
      `row-cols-${currentCol}`
    );
  }

  function toggleLayout(type) {
    if (type === "grid") {
      rowListEl.style.display = "none";
      rowGridEl.style.display = "flex";
      removeClass();
      addClass();
    } else {
      rowListEl.style.display = "flex";
      rowGridEl.style.display = "none";
    }
  }

  const unsubscribe = store.subscribe(LAYOUT_ACTION, (state) => {
    const layout = toggleItemEls[getActiveIndex()].getAttribute("data-type");
    toggleLayout(layout);
  });

  const instance = toggleGroup(toggleGroupEl, {
    activeIndex: getActiveIndex(),
    onChange: (index) => {
      const layout = toggleItemEls[index].getAttribute("data-type");
      const desktop = getDevice() === "desktop";
      const tablet = getDevice() === "tablet";
      const mobile = getDevice() === "mobile";
      store.set(LAYOUT_ACTION, (state) => {
        return {
          desktop: desktop ? { layout, index } : state.desktop,
          tablet: tablet ? { layout, index } : state.tablet,
          mobile: mobile ? { layout, index } : state.mobile,
        };
      });
    },
    addClassName: toggleGroupEl.getAttribute("data-active-class"),
    removeClassName: toggleGroupEl.getAttribute("data-deactive-class"),
  });

  function handleResize() {
    instance.go(getActiveIndex());
  }

  handleResize();
  window.addEventListener("resize", handleResize);

  window.veda_fn_70ae9dbad11f4b61b19a883a84e3ef74Cleanup.push(() => {
    unsubscribe();
    window.removeEventListener("resize", handleResize);
  });
}

let modalInstance;

function handleFilter() {
  const portalEl = document.querySelector(`[data-portal-id="${uniqueId}"`);
  const filterContainer =
    container.querySelector(".filter-container-js") ||
    portalEl.querySelector(".filter-container-js");
  const btnVisibleFilter = container.querySelector(".btn-visible-filter-js");
  const btnCloseFilter =
    container.querySelector(".btn-close-filter-js") ||
    portalEl.querySelector(".btn-close-filter-js");
  const dataFilterVariant = container.getAttribute("data-filter-variant");
  const isFixed = ["top_left_fixed", "top_right_fixed"].includes(
    dataFilterVariant
  );

  if (dataFilterVariant !== "horizontal") {
    modalInstance = modal({
      trigger: [btnVisibleFilter, btnCloseFilter],
      content: filterContainer,
      portal: portalEl,
      targetScreenSize: isFixed ? Infinity : 991,
    });
    const handleClick = (event) => {
      if (
        !btnVisibleFilter.contains(event.target) &&
        !filterContainer.contains(event.target)
      ) {
        modalInstance.close();
      }
    };
    container.addEventListener("click", handleClick);
    window.veda_fn_70ae9dbad11f4b61b19a883a84e3ef74Cleanup.push(() => {
      container.removeEventListener("click", handleClick);
    });

    window.veda_fn_70ae9dbad11f4b61b19a883a84e3ef74Cleanup.push(() => {
      modalInstance.destroy();
    });
  }
}

function productActions() {
  const rowGridEl = container.querySelector(".row-grid-js");
  if (rowGridEl.children.length) {
    handleCompare();
    handleWishList();
    handleQuickView();
    handleCart();
    handleColor();
    handleLayout();
    handleFilter();
  }
}
productActions();

// FILTER
function setRefineMargin(url, collection = "") {
  const refineWrapperEl = container.querySelector(".filter-refine-wrapper-js");
  const searchParams = queryString.parse(url.search, true);
  const { sort_by, section_id, page, ...searchParamIgNoreSortBy } =
    searchParams;
  if (!!Object.keys(searchParamIgNoreSortBy).length || !!collection) {
    refineWrapperEl.style.marginBottom = "15px";
  } else {
    refineWrapperEl.style.removeProperty("margin-bottom");
  }
}

function scrollToTop() {
  if (container.getAttribute("data-scroll-top") === "true" && !builderMode) {
    window.scrollTo({ top: 0 });
  }
}

if (!builderMode) {
  setRefineMargin(window.location);
}

collectionsFilters(container, {
  formSelector: ".filter-form-js",
  sortBySelector: ".filter-sort-by-js",
  refineRootSelector: ".filter-refine-js",
  clearAllRootSelector: ".filter-clear-all-js",
  clearSelector: ".filter-clear-js",
  priceStep: 0.01,
  renderRefineItem({ item, onRemove }) {
    const refineScript =
      container.querySelector(".refine-data-js")?.textContent;
    const refineData = objectParse(refineScript);
    return html`
      <div
      ...${getObjectAttributes(refineData.item_design)}
      key=${item.value}
      onClick=${onRemove}
      class="pos:relative d:inline-flex ai:center w:fit-content p:3px_10px mr:5px mb:5px c:color-gray8 ff:font-primary bgc:color-light bd:1px_solid_color-gray3 cur:pointer"
    >
      <span class="c:color-gray8">${item.label}</span>
      <span
        class="ml:10px"
      >
        <i class="fal fa-times c:color-gray8 c:color-gray9!|h"></i>
      </span>
    </div>
      `;
  },
  renderClearAllButton({ onClear }) {
    const refineScript =
      container.querySelector(".refine-data-js")?.textContent;
    const refineData = objectParse(refineScript);
    const textEl = container.querySelector(".filter-clear-all-js");
    const text = textEl?.getAttribute("data-text") ?? "Clear All";
    return html`<div class="refine-clear mb:5px c:color-gray9 ff:font-primary bd:none! c:color-gray9|h! p:0! c:color-primary|h! cur:pointer td:underline trs:0.3s" 
    ...${getObjectAttributes(
      refineData.clear_design
    )} onClick=${onClear}>${text}</div>`;
  },
  async onChange({ url, collection, done }) {
    try {
      if (modalInstance) {
        modalInstance.close();
      }
      if (builderMode) {
        done();
        scrollToTop();
        setRefineMargin(url, collection);
        return;
      }
      const sectionId = container
        .querySelector("[data-shopify-id]")
        ?.getAttribute("data-shopify-id");
      const urlRequest = new URL(url.href);
      if (sectionId) {
        const searchArr = queryString.parse(urlRequest.search);
        searchArr.push(["section_id", sectionId]);
        const newSearch = queryString.stringify(searchArr);
        urlRequest.search = `?${newSearch}`;
      }
      const contentEl = container.querySelector(".content-collections-js");
      const filterCountEls = container.querySelectorAll(".veda-filter-count");
      contentEl.style.opacity = 0.6;
      const res = await fetch(urlRequest);
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const newContentEl = doc.querySelector(".content-collections-js");
      const newRowGridEl = doc.querySelector(".row-grid-js");
      const newContentHtml = newContentEl?.innerHTML;
      findAtomicCss(newContentHtml);

      if (newRowGridEl?.children?.length > 0) {
        contentEl.innerHTML = newContentHtml;
        filterCountEls.forEach((filterCountEl) => {
          const type = filterCountEl.getAttribute("data-type");
          const newFilterCountEl = doc.querySelector(
            `.veda-filter-count[data-type="${type}"]`
          );
          if (newFilterCountEl) {
            const count =
              Number(
                newFilterCountEl.textContent.trim().replace(/\(|\)/g, "")
              ) || 0;
            filterCountEl.textContent = newFilterCountEl.textContent;
            const filterLabelEl = filterCountEl.closest(".veda-filter-label");
            if (filterLabelEl) {
              const classes = [
                "op:0.5",
                "pe:none",
                "td:line-through",
                "veda-filter-field-disabled",
              ];
              if (count === 0) {
                filterLabelEl.classList.add(...classes);
              } else {
                filterLabelEl.classList.remove(...classes);
              }
            }
          }
        });
        productActions();
      } else {
        contentEl.innerHTML = emptyEl.outerHTML;
      }
      contentEl.style.opacity = 1;
      done();
      scrollToTop();
      setRefineMargin(url, collection);
    } catch (err) {
      scrollToTop();
      setRefineMargin(url, collection);
      console.log(err);
    }
  },
  onChangePrice({ min, max }) {
    const priceViewEl = container.querySelector(".filter-price-view-js");
    priceViewEl.textContent = `${min} - ${max}`;
  },
  refineListener(items) {
    const refineWrapperEl = container.querySelector(
      ".filter-refine-wrapper-js"
    );
    if (items.length) {
      refineWrapperEl.classList.add("d:block");
    } else {
      refineWrapperEl.classList.remove("d:block");
    }
  },
});

function popover() {
  const popoverBtnEls = Array.from(
    container.querySelectorAll("[data-modal-button-id]")
  );
  const portalEl = container.querySelector(".popover-wrapper-js");

  popoverBtnEls.forEach((btnEl) => {
    const id = btnEl.getAttribute("data-modal-button-id");
    const btnCloseEl = container.querySelector(
      `[data-modal-button-close-id="${id}"]`
    );
    const contentEl = container.querySelector(
      `[data-modal-content-id="${id}"]`
    );
    const popover = modal({
      visible: false,
      trigger: btnCloseEl ? [btnEl, btnCloseEl] : [btnEl],
      content: contentEl,
      portal: portalEl,
      onChange({ visible, buttonElement, modalElement }) {
        if (visible && buttonElement) {
          const { top, left } = offset(buttonElement);
          const portalTop = offset(portalEl).top;
          const portalLeft = offset(portalEl).left;
          const height = buttonElement.offsetHeight;
          modalElement.style.top = `${top + height - portalTop}px`;
          modalElement.style.left = `${left - portalLeft}px`;
        }
      },
    });

    const handleClick = (event) => {
      if (!btnEl.contains(event.target) && !contentEl.contains(event.target)) {
        popover.close();
      }
    };
    container.addEventListener("click", handleClick);
    window.veda_fn_70ae9dbad11f4b61b19a883a84e3ef74Cleanup.push(() => {
      container.removeEventListener("click", handleClick);
    });

    window.veda_fn_70ae9dbad11f4b61b19a883a84e3ef74Cleanup.push(() => {
      popover.destroy();
      portalEl.innerHTML = "";
    });
  });
}

popover();
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_70ae9dbad11f4b61b19a883a84e3ef74();
function veda_fn_a21c66ecf2bc44afb8961e39f5a311fb () {
      
  if (window.veda_fn_a21c66ecf2bc44afb8961e39f5a311fbCleanup === undefined) {
    window.veda_fn_a21c66ecf2bc44afb8961e39f5a311fbCleanup = {
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
  window.veda_fn_a21c66ecf2bc44afb8961e39f5a311fbCleanup.cleanup();

      try {
        const uniqueId = "id_82933027-3d7e-440a-b8eb-d3c857228789";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const instance = veda.plugins.swiper(container);
window.veda_fn_a21c66ecf2bc44afb8961e39f5a311fbCleanup.push(() => {
  instance.destroy();
});
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_a21c66ecf2bc44afb8961e39f5a311fb();