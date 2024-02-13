class BFTISidebarCats extends HTMLElement {
    constructor() {
      super();
      fetch('/components/sidebar-categories.html')
        .then((response) => response.text())
        .then((htmlContent) => {
          this.innerHTML = htmlContent;
        })
        .catch((error) => {
          console.error('Error loading HTML content:', error);
        });
    }
  }
  
  customElements.define('bfti-sidebar-cats', BFTISidebarCats);
  