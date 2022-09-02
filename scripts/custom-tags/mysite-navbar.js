import { LitElement, html } from 'https://jspm.dev/lit-element@2';

export class MysiteNavbar extends LitElement {
    render() {
        return html`
        <nav class="uk-navbar-container" uk-navbar>
            <ul class="uk-navbar-nav">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
            </ul>
        </nav>
    `;
    }

    createRenderRoot() {
        return this;
      }
}

customElements.define('mysite-navbar', MysiteNavbar);

