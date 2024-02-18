class BFTISidebarDirectors extends HTMLElement {
  constructor() {
    super();
    fetch('/components/sidebar-directors.html')
      .then((response) => response.text())
      .then((htmlContent) => {
        this.innerHTML = htmlContent;
      })
      .catch((error) => {
        console.error('Error loading HTML content:', error);
      });
  }
}

customElements.define('bfti-sidebar-directors', BFTISidebarDirectors);
