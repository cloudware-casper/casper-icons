/*
  - Copyright (c) 2017 Cloudware S.A. All rights reserved.
  -
  - This file is part of casper-icons.
  -
  - casper-icons is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as published by
  - the Free Software Foundation, either version 3 of the License, or
  - (at your option) any later version.
  -
  - casper-icons  is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with casper-icons.  If not, see <http://www.gnu.org/licenses/>.
  -
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class LoadingIcon02 extends PolymerElement {
  static get template() {
    return html`
      <style>

        :host{
          display: block;
        }

        .spin-element {
          width: 40px;
          height: 40px;

          position: relative;
          margin: 81px auto;
        }

        .double-bounce1, .double-bounce2 {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #333;
          opacity: 0.6;
          position: absolute;
          top: 0;
          left: 0;

          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
          animation: sk-bounce 2.0s infinite ease-in-out;
        }

        .double-bounce2 {
          -webkit-animation-delay: -1.0s;
          animation-delay: -1.0s;
        }

        @-webkit-keyframes sk-bounce {
          0%, 100% { -webkit-transform: scale(0.0) }
          50% { -webkit-transform: scale(1.0) }
        }

        @keyframes sk-bounce {
          0%, 100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
          } 50% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
          }
        }
      </style>
      <div id="spinner" class="spin-element">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    `;
  }

  static get is () {
    return 'loading-icon-02';
  }

  set margin (margin) {
    this.$.spinner.style.margin = margin;
  }
}

window.customElements.define(LoadingIcon02.is, LoadingIcon02);
