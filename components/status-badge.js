class StatusBadge extends HTMLElement {
  connectedCallback() {
    if (this._rendered) return;
    this._rendered = true;

    const key = this.getAttribute('key');
    const label = key ? I18n.get(key) : this.textContent.trim();
    const hasPulse = this.getAttribute('pulse') !== 'false';

    this.innerHTML = `
      <div class="status-badge">
        ${hasPulse ? '<span class="status-dot"></span>' : ''}
        <span>${label}</span>
      </div>
    `;
  }
}

customElements.define('status-badge', StatusBadge);