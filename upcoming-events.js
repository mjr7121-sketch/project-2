import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class UpcomingEvents extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "upcoming-events";
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
    this.topHeading = "Upcoming events";
    };
  
    static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
        background-color: var(--ddd-theme-default-alertUrgent);
      }
      .top-heading{
        color: var(--ddd-theme-default-forestGreen);
      }
   

    `];
  }

  render() {
     return html`
     <div class="teamInfo">
        <h1 class="top-heading">${this.topHeading}</h1>
        <p class ="placeHolder"> buttons with events go here such as tryouts and next match</p>

          <slot></slot>

      </div>`;
  }
}

globalThis.customElements.define(UpcomingEvents.tag, UpcomingEvents);