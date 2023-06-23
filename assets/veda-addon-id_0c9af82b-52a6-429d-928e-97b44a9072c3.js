function veda_fn_id_0c9af82b52a6429d928e97b44a9072c3() {
    
    try {
      const uniqueId = /* _____Start/Id_____ */"id_0c9af82b-52a6-429d-928e-97b44a9072c3"/* _____End/Id_____ */;
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]:not(addons, megamenu)`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        /* _____Start/Content_____ */
        
        /* _____End/Content_____ */
      });
    } catch (error) {
      console.log(error);
    }
  };
veda_fn_id_0c9af82b52a6429d928e97b44a9072c3();
