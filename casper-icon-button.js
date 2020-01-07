import './casper-icon.js';
import '@polymer/paper-ripple/paper-ripple.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';

class CasperIconButton extends PolymerElement {

  static get is () {
    return 'casper-icon-button';
  }

  static get properties () {
    return {
      icon: {
        type: String,
      },
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      reverse: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      text: {
        type: String,
        observer: '__textChanged'
      },
      hasText: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }

  static get template () {
    return html`
      <style>
        :host {
          width: 40px;
          height: 40px;
          padding: 8px;
          display: flex;
          position: relative;
          align-items: center;
          justify-items: center;
          box-sizing: border-box;
          color: var(--casper-icon-button-color, var(--on-primary-color));
          background-color: var(--casper-icon-button-background-color, var(--primary-color));
        }

        :host([reverse]) {
          color: var(--primary-color);
          background-color: var(--on-primary-color);
        }

        :host([disabled]) {
          pointer-events: none;
          color: var(--disabled-text-color);
          background-color: var(--disabled-background-color);
        }

        :host([has-text]) {
          border-radius: 20px;
          width: fit-content !important;
        }

        :host(:not([has-text])) {
          border-radius: 50%;
        }

        :host([has-text]) casper-icon {
          margin-right: 5px;
        }

        /* Hover styling */
        :host(:hover) {
          cursor: pointer;
          color: var(--casper-icon-button-hover-color, var(--primary-color));
          background-color: var(--casper-icon-button-hover-background-color, var(--on-primary-color));
        }

        :host([reverse]:hover) {
          color: var(--on-primary-color);
          background-color: var(--primary-color);
        }
      </style>

      <paper-ripple></paper-ripple>
      <casper-icon icon="[[icon]]"></casper-icon>
      [[text]]
    `;
  }

  ready () {
    super.ready();

    afterNextRender(this, () => {
      const elementStyles = getComputedStyle(this);
      const iconDimensions = parseInt(elementStyles.getPropertyValue('height')) - (
        parseInt(elementStyles.getPropertyValue('padding-top')) +
        parseInt(elementStyles.getPropertyValue('padding-bottom'))
      );

      this.shadowRoot.styleSheets[0].insertRule(`
        casper-icon {
          width: ${iconDimensions ? `${iconDimensions}px` : '100%'};
          height: ${iconDimensions ? `${iconDimensions}px` : '100%'};
        }
      `);
    });
  }

  __textChanged (text) {
    this.hasText = !!text;
  }
}

customElements.define(CasperIconButton.is, CasperIconButton);