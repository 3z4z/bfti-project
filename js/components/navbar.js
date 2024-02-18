class BftiNavbar extends HTMLElement {
  constructor() {
    super();
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.activeSubmenu = null;
    fetch('/components/navbar.html')
      .then((response) => response.text())
      .then((htmlContent) => {
        this.innerHTML = htmlContent;

        this.querySelector('.nav__toggler').addEventListener('click', this.toggleNavbar);

        const navLinks = this.querySelectorAll('.nav-link');
        navLinks.forEach((navLink) => {
          navLink.addEventListener('mouseenter', this.handleMouseEnter);
          navLink.addEventListener('mouseleave', this.handleMouseLeave);
        });
      })
      .catch((error) => {
        console.error('Error loading HTML content:', error);
      });
  }

  toggleNavbar() {
    document.querySelector('.nav-menu').classList.toggle('show-menu');
    document.querySelector('.navmenu-container').classList.toggle('show-menu');
    document.querySelector('.nav__toggler').classList.toggle('show-icon');
  }

  handleMouseEnter(event) {
    const navLink = event.currentTarget;
    const submenu = navLink.querySelector('.submenu');
    if (submenu) {
      if (this.activeSubmenu) {
        clearTimeout(this.activeSubmenu.timeout);
        this.activeSubmenu.submenu.classList.remove('show-menu');
      }
      submenu.classList.add('show-menu');
      this.activeSubmenu = {
        submenu,
        timeout: null,
      };
    }
  }

  handleMouseLeave(event) {
    if (this.activeSubmenu) {
      this.activeSubmenu.timeout = setTimeout(() => {
        this.activeSubmenu.submenu.classList.remove('show-menu');
        this.activeSubmenu = null;
      });
    }
  }

  handleMouseLeaveNavbar() {
    if (this.activeSubmenu) {
      clearTimeout(this.activeSubmenu.timeout);
      this.activeSubmenu.submenu.classList.remove('show-menu');
      this.activeSubmenu = null;
    }
  }
}

customElements.define('bfti-nav', BftiNavbar);
