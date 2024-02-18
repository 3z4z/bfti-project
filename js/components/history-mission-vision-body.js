class BftiHmv extends HTMLElement {
  constructor() {
    super();
    fetch('/components/history-mission-vision-body.html')
      .then((response) => response.text())
      .then((htmlContent) => {
        this.innerHTML = htmlContent;
      })
      .catch((error) => {
        console.error('Error loading HTML content:', error);
      });
  }
}

customElements.define('bfti-hmv', BftiHmv);
