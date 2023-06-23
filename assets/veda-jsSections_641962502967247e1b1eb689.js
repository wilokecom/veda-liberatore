function veda_fn_b0061aa441e6450ab72926b37ca558f3 () {
      
  if (window.veda_fn_b0061aa441e6450ab72926b37ca558f3Cleanup === undefined) {
    window.veda_fn_b0061aa441e6450ab72926b37ca558f3Cleanup = {
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
  window.veda_fn_b0061aa441e6450ab72926b37ca558f3Cleanup.cleanup();

      try {
        const uniqueId = "id_e1baf923-7036-46e6-9464-84dcc0f59ac2";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          function handleTags() {
  const btnShowMore = container.querySelector(".btn-more-tag-check");
  if (!btnShowMore) {
    return;
  }
  const checkBoxShow = btnShowMore.querySelector("input");
  const contentShow = btnShowMore.querySelector("div");
  const showText = contentShow.getAttribute("text-show");
  const hiddenText = contentShow.getAttribute("text-show-active");
  const handleChange = () => {
    const moreTagItems = container.querySelectorAll(".more-tag-item-js");
    if (checkBoxShow.checked) {
      moreTagItems.forEach((moreTagItem) => {
        moreTagItem.style.display = "block";
        contentShow.innerHTML = `${hiddenText}<i class="fal fa-minus ml:5px"></i>`;
      });
    } else {
      moreTagItems.forEach((moreTagItem) => {
        moreTagItem.style.display = "none";
        contentShow.innerHTML = `${showText}<i class="fal fa-plus ml:5px"></i>`;
      });
    }
  };
  checkBoxShow.addEventListener("change", handleChange);
  window.veda_fn_b0061aa441e6450ab72926b37ca558f3Cleanup.push(() => {
    checkBoxShow.removeEventListener("change", handleChange);
  });
}

handleTags();
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_b0061aa441e6450ab72926b37ca558f3();
function veda_fn_0bde1228828145dba0a54de2c9de6529 () {
      
  if (window.veda_fn_0bde1228828145dba0a54de2c9de6529Cleanup === undefined) {
    window.veda_fn_0bde1228828145dba0a54de2c9de6529Cleanup = {
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
  window.veda_fn_0bde1228828145dba0a54de2c9de6529Cleanup.cleanup();

      try {
        const uniqueId = "id_057adea2-d769-4411-86c3-6e344512c0cb";
        const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
        containers.forEach(container => {
          if (!container) {
            return;
          }
          veda.plugins.videoCover(container);
          const instance = veda.plugins.swiper(container);
window.veda_fn_0bde1228828145dba0a54de2c9de6529Cleanup.push(() => {
  instance.destroy();
});
        });
      } catch(error) {
        console.error(error);
      }
    }
veda_fn_0bde1228828145dba0a54de2c9de6529();