import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class NavBar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nav-bar";
  }
   static get properties() {
    return {
      ...super.properties,
      active: {type: Boolean, reflect: true},
    };
  }

  constructor() {
    super();
    this.active = false;
    this.topHeading = "Mini Master's Golf Club";
    };
  
    static get styles() {
    return [super.styles,
    css`
    :host {
        display: block;
        background-color: var(--ddd-theme-default-alertUrgent);
    }
    .top-heading{
        color: var(--ddd-theme-default-forestGreen);
        font-weight: var(--ddd-font-weight-bold);
    }
    .nav-links {
        display: flex;
        gap: var(--ddd-spacing-4); 
    }
    .nav-links a.about {
        color: var(--ddd-theme-default-forestGreen);
    }
    .nav-links a.schedule {
        color: var(--ddd-theme-default-forestGreen);
    }
    .nav-links a.teamInfo {
        color: var(--ddd-theme-default-forestGreen);
    }
    .nav-links a.signUp {
        color: var(--ddd-theme-default-white);
        background-color: var(--ddd-theme-default-forestGreen);
    }
    
   

    `];
  }

  _navigate(page) {
  this.dispatchEvent(new CustomEvent("nav-change", {
    detail: { page },
    bubbles: true,
    composed: true
  }));
}

  render() {
     return html`
     <div class="navBar">
        <h1 class="top-heading">${this.topHeading}</h1>

       <div class="nav-links">
      <a @click=${() => this._navigate("about")} class="about">About</a>
      <a @click=${() => this._navigate("schedule")} class="schedule">Schedule</a>
      <a @click=${() => this._navigate("teamInfo")} class="teamInfo">Team Info</a>
      <a @click=${() => this._navigate("signUp")} class="signUp">Sign Up</a>
        </div>
            <slot></slot>

      </div>`;
  }
}

globalThis.customElements.define(NavBar.tag, NavBar);