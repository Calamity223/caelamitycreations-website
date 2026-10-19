import { strings } from '../data/strings.js';

export class I18n {
  static get(keyPath, fallback = '') {
    if (!keyPath) return fallback;
    const value = keyPath.split('.').reduce((acc, key) => acc?.[key], strings);
    return value !== undefined ? value : fallback;
  }

  static apply() {
    // Plain text replacement
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = I18n.get(key);
      if (text) el.textContent = text;
    });

    // HTML replacement (for spans, gradients, or formatting)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const html = I18n.get(key);
      if (html) el.innerHTML = html;
    });
  }
}