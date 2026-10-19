import { I18n } from '../utils/i18n.js';

class SiteButton extends HTMLElement {
  connectedCallback() {
    if (this._rendered) return;
    this._rendered = true;

    const href = this.getAttribute('href');
    const variant = this.getAttribute('variant') || 'primary';
    const target = this.getAttribute('target');
    const key = this.getAttribute('key');
    const label = key ? I18n.get(key) : this.textContent.trim();

    const element = document.createElement(href ? 'a' : 'button');
    element.className = `btn btn-${variant}`;
    element.textContent = label;

    if (href) {
      element.href = href;
      if (target) {
        element.target = target;
        element.rel = 'noopener noreferrer';
      }
    } else {
      element.type = 'button';
    }

    this.replaceChildren(element);
  }
}

customElements.define('site-button', SiteButton);

customElements.define('site-button', SiteButton);
