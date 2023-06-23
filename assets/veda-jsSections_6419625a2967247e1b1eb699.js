function veda_fn_b303b1fc66b54408a419d1495bbb8f21 () {
        
  if (window.veda_fn_b303b1fc66b54408a419d1495bbb8f21Cleanup === undefined) {
    window.veda_fn_b303b1fc66b54408a419d1495bbb8f21Cleanup = {
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
  window.veda_fn_b303b1fc66b54408a419d1495bbb8f21Cleanup.cleanup();

        try {
          const uniqueIds = ["id_86c62e77-7d83-4531-8dad-47bb833e73da","id_7553dfc5-8c20-4a74-b6c8-a6586f1bf495"];
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
veda_fn_b303b1fc66b54408a419d1495bbb8f21();