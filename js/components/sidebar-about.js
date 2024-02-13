class BFTISidebarAbout extends HTMLElement {
    constructor() {
      super();
      fetch('/components/sidebar-about.html')
        .then((response) => response.text())
        .then((htmlContent) => {
          this.innerHTML = htmlContent;
        })
        .catch((error) => {
          console.error('Error loading HTML content:', error);
        });
    }
  }
  
  customElements.define('bfti-sidebar-about', BFTISidebarAbout);
  