function veda_fn_b182995545494fb99f366a93793a8cd2 () {
      
  if (window.veda_fn_b182995545494fb99f366a93793a8cd2Cleanup === undefined) {
    window.veda_fn_b182995545494fb99f366a93793a8cd2Cleanup = {
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
  window.veda_fn_b182995545494fb99f366a93793a8cd2Cleanup.cleanup();

      try {
        const uniqueId = "id_044aa2c8-2fe6-48a2-a712-62849014bb25";
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
veda_fn_b182995545494fb99f366a93793a8cd2();