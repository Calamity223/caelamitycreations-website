import { I18n } from '../utils/i18n.js';

class TagList extends HTMLElement {
    connectedCallback() {
        if (this._rendered) return;
        this._rendered = true;

        const labelKey = this.getAttribute('label-key');
        const tagsKey = this.getAttribute('tags-key');

        const label = (labelKey && typeof I18n !== 'undefined')
          ? I18n.get(labelKey, this.getAttribute('label') || '')
          : (this.getAttribute('label') || '');

        const rawTags = (tagsKey && typeof I18n !== 'undefined')
          ? I18n.get(tagsKey, this.getAttribute('tags') || '')
          : (this.getAttribute('tags') || '');

        const tags = rawTags.split(',').map(tag => tag.trim()).filter(Boolean);

        const labelHtml = label ? `<span class="tag-list-label">${label}</span>` : '';
        const tagsHtml = tags.map(tag => `<span class="tag-chip">${tag}</span>`).join('');

        this.innerHTML = `
          <div class="tag-list-container">
            ${labelHtml}
            <div class="tag-list-chips">
              ${tagsHtml}
            </div>
          </div>
        `;
    }
}

if (!customElements.get('tag-list')) {
    customElements.define('tag-list', TagList);
}