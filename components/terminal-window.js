class TerminalWindow extends HTMLElement {
    connectedCallback() {
        if (this._rendered) return;
        this._rendered = true;

        const title = this.getAttribute('title') || 'bash — session:~';
        const status = this.getAttribute('status') || 'LIVE';
        const content = this.innerHTML;

        this.innerHTML = `
            <div class="terminal-wrapper">
                <div class="terminal-window">
                <div class="terminal-header">
                <div class="terminal-controls">
                    <span class="ctrl-dot red"></span>
                    <span class="ctrl-dot yellow"></span>
                    <span class="ctrl-dot green"></span>
                </div>
                <span class="terminal-title">${title}</span>
                ${status ? `<span class="terminal-status">${status}</span>` : ''}
                </div>
                    <div class="terminal-body">
                        ${content}
                    </div>
                </div>
            </div>
        `;
    }
}

if (!customElements.get('terminal-window')) {
    customElements.define('terminal-window', TerminalWindow);
}