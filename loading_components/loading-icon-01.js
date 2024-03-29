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

import { LitElement, html, css } from 'lit';

class LoadingIcon01 extends LitElement {

  static styles = css`
    :host{
      display: block;
    }

    .spin-element {
      margin: 75px auto;
      width: 50px;
      height: 50px;
      text-align: center;
      font-size: 10px;
    }

    .spin-element > div {
      background-color: #D8D8D8;
      height: 100%;
      width: 6px;
      display: inline-block;

      -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
      animation: sk-stretchdelay 1.2s infinite ease-in-out;
    }


    .spin-element .rect2 {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }

    .spin-element .rect3 {
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }

    .spin-element .rect4 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }

    .spin-element .rect5 {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }

    @-webkit-keyframes sk-stretchdelay {
      0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
      20% { -webkit-transform: scaleY(1.0) }
    }

    @keyframes sk-stretchdelay {
      0%, 40%, 100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
      }  20% {
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
      }
    }`;

    render () {
      return  html`
        <div class="spin-element">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>`;
  }
}

window.customElements.define('loading-icon-01', LoadingIcon01);
