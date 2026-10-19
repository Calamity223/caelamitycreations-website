import { I18n } from '../utils/i18n.js';

class StatusBadge extends HTMLElement {
    connectedCallback() {
        if (this._rendered) return;
        this._rendered = true;
            
        const key = this.getAttribute('key');
        const fallbackText = this.textContent.trim() || 'Available for Roles';
        
        // Safely resolve the key if I18n exists, otherwise use fallback text
        const label = (key && typeof I18n !== 'undefined')
          ? I18n.get(key, fallbackText)
          : fallbackText;
            
        const hasPulse = this.getAttribute('pulse') !== 'false';
            
        this.innerHTML = `
          <div class="status-badge">
            ${hasPulse ? '<span class="status-dot"></span>' : ''}
            <span>${label}</span>
          </div>
        `;
    }
}

if (!customElements.get('status-badge')) {
    customElements.define('status-badge', StatusBadge);
}