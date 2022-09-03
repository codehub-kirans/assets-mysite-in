import { LitElement, html } from 'https://jspm.dev/lit-element@2';
export class MysiteNavbar extends LitElement {
    static get styles() {
        return css`
        /* Add a black background color to the top navigation */
        .topnav {
          background-color: #313131;
          overflow: hidden;
        }

        /* Style the links inside the navigation bar */
        .topnav a {
        float: left;
        color: #d7d7d7;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        }

        /* Change the color of links on hover */
        .topnav a:hover {
        background-color: #313131;
        color: #ffffff;

        /* Add a color to the active/current link */
        .topnav a.active {
        background-color: #04AA6D;
        color: white;
        }
        `;
    }
    render() {
        return html`
        <div class="topnav">
            <a class="active" href="/">Home</a>
            <a href="https://in.linkedin.com/in/kiran-s">Contact</a>
            <a href="https://in.linkedin.com/in/kiran-s">About</a>
        </div>
        `;
    }
}

customElements.define('mysite-navbar', MysiteNavbar);
/*
Old Framework CSS
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
*/