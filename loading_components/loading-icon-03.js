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

class LoadingIcon03 extends LitElement {
  
  static styles = css`
    :host{
      display: block;
    }

    .spin-element {
      /* width: 40px;
      height: 40px; */

      position: relative;
      /* margin: 81px auto; */
    }

    .clock {
      /* background-color: rgba(255,0,0,0.2); */
      height: 200px;
      position: relative;
      width: 200px;
    }

    .minutes-container, .hours-container, .seconds-container {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    .hours {
      border-radius: 50%;
      background: #D8D8D8;
      height: 10%;
      left: 48.75%;
      position: absolute;
      top: 40%;
      transform-origin: 50% 100%;
      width: 4px;
    }

    .minutes {
      border-radius: 50%;
      background: #D8D8D8;
      height: 15%;
      left: 49%;
      position: absolute;
      top: 35%;
      transform-origin: 50% 100%;
      width: 5px;
    }

    @keyframes rotate {
      100% {
        transform: rotateZ(360deg);
      }
    }

    .hours-container {
      animation: rotate 2s infinite linear;
    }
    
    .minutes-container {
      animation: rotate 0.8s infinite linear;
    }`;

  render () {
    return html`
      <div class="spin-element">
        <div class="clock">
          <div class="hours-container">
            <div class="hours"></div>
          </div>
          <div class="minutes-container">
            <div class="minutes"></div>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('loading-icon-03', LoadingIcon03);
