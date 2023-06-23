function veda_fn_id_271d9e0136614a7282d4625148dc5328() {
    
    try {
      const uniqueId = /* _____Start/Id_____ */"id_271d9e01-3661-4a72-82d4-625148dc5328"/* _____End/Id_____ */;
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
veda_fn_id_271d9e0136614a7282d4625148dc5328();
