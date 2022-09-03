import { LitElement, html, css } from 'https://jspm.dev/lit';

export class MysiteFooter extends LitElement {
    static get styles() {
        return css`
        :host {
            display: block;
            background: #f5f5f7;
            color: #515151;
            padding: 1rem;
        }
        `;
    }

    render() {
        return html`
        <footer><p>© ${new Date().getFullYear()} | Kiran S. All rights reserved.</p></footer>
        `;
    }
}

customElements.define('mysite-footer', MysiteFooter);