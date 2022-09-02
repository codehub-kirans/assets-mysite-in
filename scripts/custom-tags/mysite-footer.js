import { LitElement, html, css } from 'https://jspm.dev/lit';

export class MysiteFooter extends LitElement {
    static get styles() {
        return css`
        footer {
            display: block;
            background: black;
            color: white;
            padding: 1rem;
        }
        `;
    }

    render() {
        return html`
        <footer><p>© ${new Date().getFullYear()} Mysite</p></footer>
        `;
    }
}

customElements.define('mysite-footer', MysiteFooter);