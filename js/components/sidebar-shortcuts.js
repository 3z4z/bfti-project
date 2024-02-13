class BFTISidebarShortcuts extends HTMLElement {
    constructor() {
      super();
      fetch('/components/sidebar-shortcuts.html')
        .then((response) => response.text())
        .then((htmlContent) => {
          this.innerHTML = htmlContent;
        })
        .catch((error) => {
          console.error('Error loading HTML content:', error);
        });
    }
  }
  
  customElements.define('bfti-sidebar-shorts', BFTISidebarShortcuts);
  