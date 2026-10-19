import { I18n } from '../utils/i18n.js';

class SiteButton extends HTMLElement {
    connectedCallback() {
        if (this._rendered) return;
        this._rendered = true;

        const href = this.getAttribute('href');
        const variant = this.getAttribute('variant') || 'primary';
        const target = this.getAttribute('target');
        const key = this.getAttribute('key');

        // Resolve text via i18n key or fallback to tag text
        const label = (key && typeof I18n !== 'undefined')
          ? I18n.get(key, this.textContent.trim())
          : this.textContent.trim();

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

// Guard: Prevents "already been used" crash if imported more than once
if (!customElements.get('site-button')) {
    customElements.define('site-button', SiteButton);
}