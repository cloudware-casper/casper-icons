/*
  - Copyright (c) Cloudware S.A. All rights reserved.
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

import '@polymer/iron-icons/iron-icons.js';
import './loading_components/loading-icon-01.js';
import './loading_components/loading-icon-02.js';
import './loading_components/loading-icon-03.js';
import './loading_components/loading-icon-04.js';
import './loading_components/loading-icon-05.js';
const casperIcons = document.createElement('template');

casperIcons.innerHTML = `
  <iron-iconset-svg name="casper-icons" size="24">
    <svg>
      <defs>
        <g id="add-circle">
          <path d="M11 13v3h2v-3h3v-2h-3V8h-2v3H8v2h3zM3 5.993A3.001 3.001 0 0 1 5.993 3h12.014A3.001 3.001 0 0 1 21 5.993v12.014A3.001 3.001 0 0 1 18.007 21H5.993A3.001 3.001 0 0 1 3 18.007V5.993z" fill-rule="evenodd"></path>
        </g>
        <g id="remove-circle">
          <path d="M3 5.993A3.001 3.001 0 0 1 5.993 3h12.014A3.001 3.001 0 0 1 21 5.993v12.014A3.001 3.001 0 0 1 18.007 21H5.993A3.001 3.001 0 0 1 3 18.007V5.993zM16 13v-2H8v2h8z" fill-rule="evenodd"></path>
        </g>
        <g id="clear">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </g>
        <g id="search">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </g>
        <g id="cancel">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
        </g>
        <g id="date-range">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
        </g>
        <g id="arrow-drop-down">
          <path d="M11.56 16.42a.63.63 0 0 0 .44.18.63.63 0 0 0 .45-.18l7.36-6.86a.58.58 0 0 0 .19-.43c0-.15-.07-.3-.2-.42l-1.63-1.53a.7.7 0 0 0-.46-.18.66.66 0 0 0-.45.18L12 12.1 6.74 7.18A.66.66 0 0 0 6.29 7a.7.7 0 0 0-.46.18L4.2 8.71a.58.58 0 0 0-.2.42c0 .16.07.31.2.43l7.36 6.86z"></path>
        </g>
        <g id="clear-combo">
          <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm2-9l3-3-2-2-3 3-3-3-2 2 3 3-3 3 2 2 3-3 3 3 2-2-3-3z" fill-opacity="1"></path>
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" fill="none" stroke-width="1.5"></path>
        </g>
        <g id="edit-doc">
          <rect stroke="#FFF" x="1.5" y="1.5" width="16" height="21" rx="2"></rect>
          <g stroke="#FFF">
            <path d="M5 5h9v1H5zM5 9h9v1H5zM5 13h9v1H5zM5 17h9v1H5z"></path>
            <path d="M17.984 8.415c.701-.7 1.717-.82 2.282-.255l1.51 1.509c.559.56.445 1.58-.256 2.282l-5.342 5.341-.976.977s-4.018 2.022-4.773 1.267c-.754-.755 1.237-4.803 1.237-4.803l6.318-6.318z" fill-rule="nonzero"></path>
            <path d="M12.722 13.707l3.52 3.55M17 9l3.5 3.5"></path>
          </g>
        </g>
        <g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
        <g id="check">
          <path d="M9.114 18.245l-5.85-5.666a.852.852 0 0 1 0-1.233l1.272-1.232a.92.92 0 0 1 1.273 0L9.75 13.93l8.44-8.175a.92.92 0 0 1 1.274 0l1.272 1.233a.852.852 0 0 1 0 1.233l-10.35 10.024a.92.92 0 0 1-1.272 0z"></path>
        </g>
        <g id="locked">
          <path d="M18.063 10.875h-.844V8.344A5.35 5.35 0 0 0 11.875 3a5.35 5.35 0 0 0-5.344 5.344v2.531h-.843c-.932 0-1.688.756-1.688 1.688v6.75C4 20.244 4.756 21 5.688 21h12.375c.931 0 1.687-.756 1.687-1.688v-6.75c0-.931-.756-1.687-1.688-1.687zm-4.782 5.906a1.406 1.406 0 1 1-2.812 0v-1.687a1.406 1.406 0 1 1 2.812 0v1.687zm1.125-5.906H9.344V8.344a2.534 2.534 0 0 1 2.531-2.531 2.534 2.534 0 0 1 2.531 2.53v2.532z"></path>
        </g>
        <g id="unlocked">
          <path d="M16.234 4C13.61 4.01 11.5 6.172 11.5 8.797V11h-7A1.5 1.5 0 0 0 3 12.5v6A1.5 1.5 0 0 0 4.5 20h11a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5H14V8.778c0-1.237.99-2.265 2.228-2.278A2.253 2.253 0 0 1 18.5 8.75v2.5c0 .416.334.75.75.75h1c.416 0 .75-.334.75-.75v-2.5c0-2.625-2.14-4.76-4.766-4.75zM11.25 16.25a1.25 1.25 0 1 1-2.5 0v-1.5a1.25 1.25 0 1 1 2.5 0v1.5z"></path>
        </g>
        <g id="star">
          <path d="M8.036 1.131L5.843 5.578l-4.906.715C.057 6.42-.296 7.505.343 8.126l3.55 3.46-.84 4.886c-.152.883.779 1.544 1.558 1.131L9 15.296l4.39 2.307c.778.41 1.709-.248 1.557-1.131l-.84-4.887 3.55-3.459c.639-.62.286-1.705-.594-1.833l-4.906-.715L9.964 1.13c-.394-.79-1.532-.8-1.928.001z"></path>
        </g>
        <g id="close">
          <path d="M12 3c-4.972 0-9 4.028-9 9s4.028 9 9 9 9-4.028 9-9-4.028-9-9-9zm0 16.839c-4.308 0-7.839-3.488-7.839-7.839 0-4.308 3.488-7.839 7.839-7.839 4.308 0 7.839 3.488 7.839 7.839 0 4.308-3.488 7.839-7.839 7.839zm3.44-10.354L12.925 12l2.515 2.515c.17.17.17.446 0 .617l-.308.308a.436.436 0 0 1-.617 0L12 12.925 9.485 15.44a.436.436 0 0 1-.617 0l-.308-.308a.436.436 0 0 1 0-.617L11.075 12 8.56 9.485a.436.436 0 0 1 0-.617l.308-.308c.17-.17.447-.17.617 0L12 11.075l2.515-2.515c.17-.17.446-.17.617 0l.308.308a.443.443 0 0 1 0 .617z"></path>
        </g>
        <g id="check-circle">
          <g transform="translate(3.000000, 3.000000)">
              <path d="M9,0 C4.02942339,0 0,4.02942339 0,9 C0,13.9705766 4.02942339,18 9,18 C13.9705766,18 18,13.9705766 18,9 C18,4.02942339 13.9705766,0 9,0 Z M14.1397984,6.86028629 L7.59012097,13.3574153 C7.419375,13.5267823 7.14364113,13.5256935 6.97427419,13.3549476 L3.85773387,10.2132218 C3.68836694,10.0424758 3.68945565,9.76674194 3.86020161,9.597375 L4.16939516,9.29068548 C4.34014113,9.12131855 4.615875,9.12240726 4.78524194,9.29315323 L7.28840323,11.8165282 L13.2197298,5.93277823 C13.3904758,5.76341129 13.6662097,5.7645 13.8355766,5.93524597 L14.1422661,6.24443952 C14.3116694,6.41518548 14.3105444,6.69091935 14.1397984,6.86028629 Z"></path>
          </g>
        </g>
        <g id="file-txt">
          <g transform="translate(5.000000, 3.000000)">
              <path d="M12.9789474,3.47017544 L10.0350877,0.526315789 C9.71929825,0.210526316 9.29122807,0.0315789474 8.84561404,0.0315789474 L1.68421053,0.0315789474 C0.754385965,0.0350877193 0,0.789473684 0,1.71929825 L0,16.3157895 C0,17.245614 0.754385965,18 1.68421053,18 L11.7894737,18 C12.7192982,18 13.4736842,17.245614 13.4736842,16.3157895 L13.4736842,4.66315789 C13.4736842,4.21754386 13.2947368,3.78596491 12.9789474,3.47017544 Z M12.1859649,4.26666667 C12.2596491,4.34035088 12.3087719,4.42807018 12.3333333,4.52631579 L8.98245614,4.52631579 L8.98245614,1.1754386 C9.08070175,1.2 9.16842105,1.24912281 9.24210526,1.32280702 L12.1859649,4.26666667 Z M11.7894737,16.877193 L1.68421053,16.877193 C1.3754386,16.877193 1.12280702,16.6245614 1.12280702,16.3157895 L1.12280702,1.71929825 C1.12280702,1.41052632 1.3754386,1.15789474 1.68421053,1.15789474 L7.85964912,1.15789474 L7.85964912,4.80701754 C7.85964912,5.27368421 8.23508772,5.64912281 8.70175439,5.64912281 L12.3508772,5.64912281 L12.3508772,16.3157895 C12.3508772,16.6245614 12.0982456,16.877193 11.7894737,16.877193 Z"></path>
          </g>
        </g>
        <g id="file-zip">
          <g id="file-archive" transform="translate(5.000000, 3.000000)">
              <path d="M13.0057383,3.44323828 L10.0567617,0.494261719 C9.74029588,0.177793543 9.31107537,2.34026863e-06 8.86352344,-5.32907052e-15 L1.6875,-5.32907052e-15 C0.755507812,-5.14172038e-15 0,0.755507812 0,1.6875 L0,16.3125 C0,17.2444922 0.755507812,18 1.6875,18 L11.8125,18 C12.7444922,18 13.5,17.2444922 13.5,16.3125 L13.5,4.63647656 C13.4999977,4.18892463 13.3222065,3.75970412 13.0057383,3.44323828 Z M9,1.14226172 C9.09890683,1.16666553 9.18925093,1.21766721 9.26124609,1.28974219 L12.2102227,4.23871875 C12.2822833,4.31072484 12.3332825,4.40106468 12.3577031,4.49996484 L9,4.49996484 L9,1.14226172 Z M12.375,16.3125 C12.375,16.6231758 12.1231406,16.875 11.8125,16.875 L1.6875,16.875 C1.37685937,16.875 1.125,16.6231758 1.125,16.3125 L1.125,1.6875 C1.125,1.37682422 1.37685937,1.125 1.6875,1.125 L4.48994531,1.125 L4.48994531,2.25 L5.61494531,2.25 L5.61494531,1.125 L7.875,1.125 L7.875,4.78125 C7.875,5.24724609 8.25275391,5.625 8.71875,5.625 L12.375,5.625 L12.375,16.3125 Z M6.75,3.375 L5.625,3.375 L5.625,2.25 L6.75,2.25 L6.75,3.375 Z M5.625,3.375 L5.625,4.5 L4.5,4.5 L4.5,3.375 L5.625,3.375 Z M5.625,5.625 L5.625,6.75 L4.5,6.75 L4.5,5.625 L5.625,5.625 Z M6.75,5.625 L5.625,5.625 L5.625,4.5 L6.75,4.5 L6.75,5.625 Z M6.40413281,9 L5.625,9 L5.625,7.875 L4.5,7.875 L4.5,9 L3.81624609,12.4186992 C3.58797656,13.5600469 4.46094141,14.625 5.625,14.625 C6.78898828,14.625 7.66202344,13.560082 7.43375391,12.4186992 L6.81785156,9.33915234 C6.77840322,9.1419464 6.60524561,8.99999776 6.40413281,9 Z M5.63449219,13.7135039 C5.0045625,13.7135039 4.49388281,13.2879375 4.49388281,12.7630195 C4.49388281,12.2380664 5.00452734,11.8125352 5.63449219,11.8125352 C6.26445703,11.8125352 6.77510156,12.2380664 6.77510156,12.7630195 C6.77510156,13.2879375 6.26442187,13.7135039 5.63449219,13.7135039 Z M6.75,7.875 L5.625,7.875 L5.625,6.75 L6.75,6.75 L6.75,7.875 Z" id="Shape"></path>
          </g>
        </g>
        <g id="file-pdf">
          <g transform="translate(5.000000, 3.000000)">
              <path d="M12.9789474,3.47017544 L10.0350877,0.526315789 C9.71929825,0.210526316 9.29122807,0.0315789474 8.84561404,0.0315789474 L1.68421053,0.0315789474 C0.754385965,0.0350877193 0,0.789473684 0,1.71929825 L0,16.3157895 C0,17.245614 0.754385965,18 1.68421053,18 L11.7894737,18 C12.7192982,18 13.4736842,17.245614 13.4736842,16.3157895 L13.4736842,4.66315789 C13.4736842,4.21754386 13.2947368,3.78596491 12.9789474,3.47017544 Z M12.1859649,4.26666667 C12.2596491,4.34035088 12.3087719,4.42807018 12.3333333,4.52631579 L8.98245614,4.52631579 L8.98245614,1.1754386 C9.08070175,1.2 9.16842105,1.24912281 9.24210526,1.32280702 L12.1859649,4.26666667 Z M11.7894737,16.877193 L1.68421053,16.877193 C1.3754386,16.877193 1.12280702,16.6245614 1.12280702,16.3157895 L1.12280702,1.71929825 C1.12280702,1.41052632 1.3754386,1.15789474 1.68421053,1.15789474 L7.85964912,1.15789474 L7.85964912,4.80701754 C7.85964912,5.27368421 8.23508772,5.64912281 8.70175439,5.64912281 L12.3508772,5.64912281 L12.3508772,16.3157895 C12.3508772,16.6245614 12.0982456,16.877193 11.7894737,16.877193 Z M11.0175439,10.8701754 C10.5438596,10.4035088 9.0877193,10.5473684 8.43157895,10.6350877 C7.6877193,10.1859649 7.19649123,9.56842105 6.84912281,8.64912281 C7,8.01754386 7.27017544,6.99298246 7.07368421,6.37192982 C6.91929825,5.38596491 5.68070175,5.50526316 5.50877193,6.13333333 C5.33333333,6.7754386 5.49824561,7.69122807 5.80350877,8.86315789 C5.38596491,9.85964912 4.76140351,11.2105263 4.32631579,11.9719298 C3.59649123,12.3473684 2.42807018,13 2.26315789,13.8105263 C2.14035088,14.4 3.06666667,15.1929825 4.12631579,14.0350877 C4.44561404,13.6877193 4.80350877,13.1649123 5.2245614,12.4385965 C6.16140351,12.1298246 7.19298246,11.7438596 8.10175439,11.5964912 C8.87017544,12.0175439 9.77192982,12.2947368 10.3684211,12.2947368 C11.3403509,12.2982456 11.3824561,11.2350877 11.0175439,10.8701754 Z M2.9754386,13.9929825 C3.18245614,13.4350877 3.97894737,12.7859649 4.22105263,12.5614035 C3.44561404,13.8 2.9754386,14.0175439 2.9754386,13.9929825 Z M6.31578947,6.19298246 C6.62105263,6.19298246 6.58947368,7.50877193 6.38947368,7.86315789 C6.20701754,7.29122807 6.21403509,6.19298246 6.31578947,6.19298246 Z M5.31929825,11.7824561 C5.71578947,11.0877193 6.05614035,10.2666667 6.32982456,9.54736842 C6.67017544,10.1684211 7.10526316,10.6596491 7.56140351,11.0035088 C6.70877193,11.1684211 5.96842105,11.5333333 5.31929825,11.7824561 Z M10.7017544,11.5754386 C10.7017544,11.5754386 10.4982456,11.8210526 9.1754386,11.2561404 C10.6140351,11.1508772 10.8491228,11.4807018 10.7017544,11.5754386 Z"></path>
          </g>
        </g>
        <g id="file-xml">
          <g transform="translate(5.000000, 3.000000)">
              <path d="M12.9789474,3.47017544 L10.0350877,0.526315789 C9.71929825,0.210526316 9.29122807,0.0315789474 8.84561404,0.0315789474 L1.68421053,0.0315789474 C0.754385965,0.0350877193 0,0.789473684 0,1.71929825 L0,16.3157895 C0,17.245614 0.754385965,18 1.68421053,18 L11.7894737,18 C12.7192982,18 13.4736842,17.245614 13.4736842,16.3157895 L13.4736842,4.66315789 C13.4736842,4.21754386 13.2947368,3.78596491 12.9789474,3.47017544 Z M12.1859649,4.26666667 C12.2596491,4.34035088 12.3087719,4.42807018 12.3333333,4.52631579 L8.98245614,4.52631579 L8.98245614,1.1754386 C9.08070175,1.2 9.16842105,1.24912281 9.24210526,1.32280702 L12.1859649,4.26666667 Z M11.7894737,16.877193 L1.68421053,16.877193 C1.3754386,16.877193 1.12280702,16.6245614 1.12280702,16.3157895 L1.12280702,1.71929825 C1.12280702,1.41052632 1.3754386,1.15789474 1.68421053,1.15789474 L7.85964912,1.15789474 L7.85964912,4.80701754 C7.85964912,5.27368421 8.23508772,5.64912281 8.70175439,5.64912281 L12.3508772,5.64912281 L12.3508772,16.3157895 C12.3508772,16.6245614 12.0982456,16.877193 11.7894737,16.877193 Z M7.42807018,10.8421053 L9.2,7.97192982 C9.36842105,7.69122807 9.16842105,7.33333333 8.83859649,7.33333333 L8.69473684,7.33333333 C8.55087719,7.33333333 8.41754386,7.40701754 8.34035088,7.52631579 C7.25263158,9.22807018 7.06315789,9.40350877 6.73684211,10.1403509 C6.13333333,9.01052632 6.44210526,9.57894737 5.12982456,7.52631579 C5.05263158,7.40701754 4.91929825,7.33333333 4.7754386,7.33333333 L4.63157895,7.33333333 C4.30175439,7.33333333 4.10175439,7.69473684 4.27368421,7.97192982 L6.07017544,10.8421053 L3.99649123,13.9824561 C3.81754386,14.2631579 4.01754386,14.6315789 4.35087719,14.6315789 L4.47368421,14.6315789 C4.61754386,14.6315789 4.75087719,14.5578947 4.82807018,14.4385965 C6.13333333,12.4035088 6.41754386,12.245614 6.73684211,11.5438596 C7.84210526,13.5333333 8.29122807,13.9017544 8.64561404,14.4421053 C8.72280702,14.5614035 8.85614035,14.6315789 8.99649123,14.6315789 L9.12280702,14.6315789 C9.45614035,14.6315789 9.65614035,14.2666667 9.47719298,13.9859649 L7.42807018,10.8421053 Z"></path>
          </g>
        </g>
        <g id="empty-data">
          <path d="M17.15 21H7.06c-.87 0-1.56-.69-1.56-1.56V5.74c0-.871.69-1.56 1.56-1.56h1.162a.37.37 0 0 1 .38.38c0 .218-.162.4-.38.4H7.06a.774.774 0 0 0-.78.78v13.7c0 .435.345.78.78.78h10.09c.417 0 .78-.345.78-.78V5.74a.786.786 0 0 0-.78-.78h-1.162a.403.403 0 0 1-.4-.4c0-.217.182-.38.4-.38h1.161c.853 0 1.543.689 1.543 1.56v13.7c0 .87-.69 1.56-1.543 1.56zm-.781-14.86c0 .199-.181.38-.381.38H8.222c-.218 0-.4-.181-.4-.38 0-.219.182-.4.4-.4 0 0 .435-.055.78-.4l.762-.78s.309-.38.78-.38h.4c0-.654.508-1.18 1.16-1.18.636 0 1.162.526 1.162 1.18h.381c.508 0 .78.38.78.38l.78.78c.345.345.78.4.78.4a.4.4 0 0 1 .382.4zm-4.264-2.36c-.218 0-.4.182-.4.4h.78c0-.218-.162-.4-.38-.4zm2.068 1.56s-.254-.38-.69-.38h-2.757c-.454 0-.708.38-.708.38l-.345.4h4.863l-.363-.4z"></path>
        </g>
        <g id="arrow-circle-left">
          <path d="M24 12c0-6.629-5.371-12-12-12S0 5.371 0 12s5.371 12 12 12 12-5.371 12-12zM12 22.452c-5.744 0-10.452-4.65-10.452-10.452C1.548 6.256 6.198 1.548 12 1.548c5.744 0 10.452 4.65 10.452 10.452 0 5.744-4.65 10.452-10.452 10.452z"></path>
          <path d="M11.546 16.482L7.37 12.308a.436.436 0 0 1 0-.616l4.177-4.174c.17-.17.447-.17.617 0l.25.25a.434.434 0 0 1-.007.621l-3.102 2.994h6.906c.24 0 .435.196.435.436v.362c0 .24-.196.436-.435.436H9.304l3.106 2.994c.174.17.178.45.007.62l-.25.25a.44.44 0 0 1-.62 0z"></path>
        </g>
        <g id="arrow-circle-right">
          <path d="M24 12c0-6.629-5.371-12-12-12S0 5.371 0 12s5.371 12 12 12 12-5.371 12-12zM12 22.452c-5.744 0-10.452-4.65-10.452-10.452C1.548 6.256 6.198 1.548 12 1.548c5.744 0 10.452 4.65 10.452 10.452 0 5.744-4.65 10.452-10.452 10.452z"></path>
          <path d="M12.34 16.482l4.177-4.174a.436.436 0 0 0 0-.616L12.34 7.518a.436.436 0 0 0-.617 0l-.25.25a.436.436 0 0 0 .007.621l3.103 2.994H7.677a.437.437 0 0 0-.436.436v.362c0 .24.196.436.436.436h6.906l-3.106 2.994a.437.437 0 0 0-.008.62l.25.25a.44.44 0 0 0 .621 0z"></path>
        </g>
        <g id="arrow-left">
          <path d="M11.66 16.482l-4.177-4.174a.436.436 0 0 1 0-.616l4.177-4.174c.17-.17.446-.17.617 0l.25.25c.17.171.17.454-.007.621l-3.107 2.994h6.91c.24 0 .436.196.436.436v.362c0 .24-.196.436-.436.436H9.417l3.106 2.994c.175.17.178.45.008.62l-.25.25a.44.44 0 0 1-.621 0z"></path>
        </g>
        <g id="arrow-right">
          <path d="M12.454 7.518l4.177 4.174c.17.17.17.446 0 .616l-4.177 4.174a.436.436 0 0 1-.617 0l-.25-.25a.434.434 0 0 1 .007-.621l3.106-2.994H7.79a.437.437 0 0 1-.435-.436v-.362c0-.24.196-.436.435-.436h6.906L11.59 8.39a.437.437 0 0 1-.007-.62l.25-.25a.44.44 0 0 1 .62 0z"></path>
        </g>
        <g id="plus">
          <path d="M16.645 11.782v.436c0 .24-.196.435-.435.435h-3.557v3.557c0 .24-.196.435-.435.435h-.436a.437.437 0 0 1-.435-.435v-3.557H7.79a.437.437 0 0 1-.435-.435v-.436c0-.24.196-.435.435-.435h3.557V7.79c0-.24.196-.435.435-.435h.436c.24 0 .435.196.435.435v3.557h3.557c.24 0 .435.196.435.435z" fill-rule="nonzero"></path>
        </g>
        <g id="minus">
          <path d="M7.79 12.653a.437.437 0 0 1-.435-.435v-.436c0-.24.196-.435.435-.435h8.42c.24 0 .435.196.435.435v.436c0 .24-.196.435-.435.435H7.79z"></path>
        </g>
        <g id="print">
          <path d="M16.688 9.875V6.649a.703.703 0 0 0-.206-.498l-1.699-1.696a.703.703 0 0 0-.498-.205h-6.27a.705.705 0 0 0-.703.703v4.922A2.813 2.813 0 0 0 4.5 12.688v3.984c0 .387.316.703.703.703h2.11v1.172c0 .387.316.703.703.703h7.968a.705.705 0 0 0 .704-.703v-1.172h2.109a.705.705 0 0 0 .703-.703v-3.985a2.813 2.813 0 0 0-2.813-2.812zM8.25 5.187h5.941l1.559 1.56v5.003h-7.5V5.187zm7.5 13.125h-7.5V15.5h7.5v2.813zm2.813-1.875h-1.875v-1.171a.705.705 0 0 0-.704-.704H8.016a.705.705 0 0 0-.704.704v1.171H5.438v-3.75c0-1.034.841-1.874 1.875-1.874v1.171c0 .387.317.704.704.704h7.968a.705.705 0 0 0 .704-.704v-1.171c1.034 0 1.875.84 1.875 1.874v3.75z"></path>
        </g>
        <g id="download-pdf">
          <path d="M17.552 7.078l-2.506-2.507a1.434 1.434 0 0 0-1.013-.421H7.934A1.44 1.44 0 0 0 6.5 5.587v12.43c0 .792.642 1.434 1.434 1.434h8.605c.792 0 1.435-.642 1.435-1.434V8.094c0-.38-.153-.747-.422-1.016zm-.675.678a.47.47 0 0 1 .126.222h-2.854V5.124a.47.47 0 0 1 .221.126l2.507 2.506zm-.338 10.74H7.934a.48.48 0 0 1-.478-.479V5.587a.48.48 0 0 1 .478-.478h5.259v3.108c0 .397.32.717.717.717h3.108v9.083a.48.48 0 0 1-.479.478zm-.657-5.116c-.403-.398-1.643-.275-2.202-.2-.633-.383-1.052-.909-1.348-1.692.129-.537.359-1.41.192-1.939-.132-.84-1.187-.738-1.333-.203-.15.547-.009 1.327.251 2.325-.356.848-.887 1.999-1.258 2.647-.621.32-1.616.875-1.757 1.566-.104.502.684 1.177 1.587.19.272-.295.576-.74.935-1.359.798-.263 1.676-.591 2.45-.717.655.359 1.422.595 1.93.595.828.003.864-.903.553-1.213zm-6.848 2.659c.176-.475.854-1.028 1.06-1.22-.66 1.056-1.06 1.24-1.06 1.22zm2.844-6.642c.26 0 .233 1.12.063 1.422-.155-.487-.15-1.422-.063-1.422zm-.848 4.76c.337-.592.627-1.291.86-1.904.29.53.66.947 1.049 1.24-.726.14-1.357.451-1.91.664zm4.583-.177s-.173.21-1.3-.272c1.226-.09 1.426.192 1.3.272z"></path>
        </g>
        <g id="download-excel">
          <path d="M17.551 7.078L15.045 4.57a1.434 1.434 0 0 0-1.013-.421H7.934A1.439 1.439 0 0 0 6.5 5.587v12.429c0 .792.642 1.434 1.434 1.434h8.605c.791 0 1.434-.642 1.434-1.434V8.094c0-.38-.153-.747-.422-1.016zm-.675.678a.47.47 0 0 1 .126.221h-2.853V5.124a.47.47 0 0 1 .22.125l2.507 2.507zm-.337 10.738H7.934a.48.48 0 0 1-.478-.478V5.587a.48.48 0 0 1 .478-.478h5.258v3.107c0 .398.32.717.717.717h3.108v9.083a.48.48 0 0 1-.478.478zm-3.714-5.139l1.509-2.444a.359.359 0 0 0-.308-.544h-.122a.36.36 0 0 0-.302.165c-.926 1.449-1.088 1.598-1.366 2.226-.514-.962-.25-.478-1.368-2.226a.36.36 0 0 0-.302-.165h-.122a.357.357 0 0 0-.305.544l1.53 2.444-1.766 2.674a.359.359 0 0 0 .302.553h.104a.36.36 0 0 0 .302-.165c1.111-1.732 1.353-1.867 1.625-2.464.942 1.694 1.324 2.007 1.626 2.467a.354.354 0 0 0 .298.162h.108c.284 0 .454-.31.302-.55l-1.745-2.677z"></path>
        </g>
        <g id="info">
          <path d="M12 4.161c4.305 0 7.839 3.487 7.839 7.839A7.837 7.837 0 0 1 12 19.839 7.837 7.837 0 0 1 4.161 12 7.838 7.838 0 0 1 12 4.161zM12 3c-4.97 0-9 4.031-9 9a9 9 0 0 0 9 9 9 9 0 0 0 9-9c0-4.969-4.03-9-9-9zm-1.306 12.484h.435v-4.355h-.435a.436.436 0 0 1-.436-.435v-.29c0-.241.195-.436.436-.436h1.741c.241 0 .436.195.436.435v5.08h.435c.24 0 .436.196.436.436v.29a.436.436 0 0 1-.436.436h-2.612a.436.436 0 0 1-.436-.435v-.29c0-.241.195-.436.436-.436zM12 6.774a1.161 1.161 0 1 0 0 2.323 1.161 1.161 0 0 0 0-2.323z"></path>
        </g>
        <g id="warning">
          <path d="M20.797 17.75A1.5 1.5 0 0 1 19.498 20H4.502a1.5 1.5 0 0 1-1.3-2.25l7.499-13a1.5 1.5 0 0 1 2.598 0l7.498 13zm-.864.5l-7.5-13a.5.5 0 0 0-.866 0l-7.5 13A.5.5 0 0 0 4.5 19h15a.5.5 0 0 0 .433-.75zM12 15.625a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75zM11.64 9h.719c.213 0 .384.178.375.39l-.219 5.25a.375.375 0 0 1-.375.36h-.28a.375.375 0 0 1-.375-.36l-.219-5.25a.375.375 0 0 1 .375-.39zm.36 6.625a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75z"></path>
        </g>
        <g id="exclamation">
          <path d="M12 4.161c4.305 0 7.839 3.487 7.839 7.839A7.837 7.837 0 0 1 12 19.839 7.837 7.837 0 0 1 4.161 12 7.838 7.838 0 0 1 12 4.161zM12 3c-4.97 0-9 4.031-9 9a9 9 0 0 0 9 9 9 9 0 0 0 9-9c0-4.969-4.03-9-9-9zm-.417 4.355h.834c.248 0 .445.206.435.453l-.254 6.097a.435.435 0 0 1-.435.418h-.326a.436.436 0 0 1-.435-.418l-.254-6.097a.436.436 0 0 1 .435-.453zM12 15.048a1.016 1.016 0 1 0 0 2.033 1.016 1.016 0 0 0 0-2.033z"></path>
        </g>
        <g id="cog">
          <path d="M20.24 13.57l-1.183-.683a7.083 7.083 0 0 0 0-1.774l1.183-.684a.869.869 0 0 0 .401-.998 8.985 8.985 0 0 0-2.088-3.614.871.871 0 0 0-1.068-.155l-1.182.682a7.045 7.045 0 0 0-1.536-.888V4.09a.872.872 0 0 0-.671-.848 9.063 9.063 0 0 0-4.165 0 .872.872 0 0 0-.67.848v1.366a7.044 7.044 0 0 0-1.537.888l-1.182-.682a.871.871 0 0 0-1.068.155 8.985 8.985 0 0 0-2.088 3.614.869.869 0 0 0 .4.998l1.184.684a7.083 7.083 0 0 0 0 1.774l-1.183.684a.869.869 0 0 0-.401.998 8.985 8.985 0 0 0 2.088 3.614.871.871 0 0 0 1.068.155l1.182-.682c.472.36.989.658 1.536.888v1.366c0 .403.278.754.67.848a9.063 9.063 0 0 0 4.166 0 .872.872 0 0 0 .67-.848v-1.366a7.045 7.045 0 0 0 1.537-.888l1.182.682a.871.871 0 0 0 1.068-.155 8.985 8.985 0 0 0 2.088-3.614.869.869 0 0 0-.4-.998zm-2.376 3.646l-1.68-.97c-.98.837-1.327 1.048-2.579 1.49v1.94a7.88 7.88 0 0 1-3.184 0v-1.94c-1.22-.431-1.573-.631-2.578-1.49l-1.68.97a7.839 7.839 0 0 1-1.594-2.756l1.68-.97c-.236-1.286-.236-1.693 0-2.98l-1.68-.97a7.844 7.844 0 0 1 1.594-2.757l1.68.971c.994-.85 1.345-1.054 2.578-1.49v-1.94a7.867 7.867 0 0 1 3.184 0v1.94c1.233.436 1.585.64 2.578 1.49l1.681-.97a7.844 7.844 0 0 1 1.594 2.756l-1.681.97c.237 1.286.237 1.693 0 2.98l1.681.97a7.839 7.839 0 0 1-1.594 2.756zm-5.85-8.7A3.488 3.488 0 0 0 8.53 12a3.488 3.488 0 0 0 3.483 3.484A3.488 3.488 0 0 0 15.497 12a3.488 3.488 0 0 0-3.484-3.484zm0 5.807A2.325 2.325 0 0 1 9.69 12a2.325 2.325 0 0 1 2.322-2.323A2.325 2.325 0 0 1 14.336 12a2.325 2.325 0 0 1-2.323 2.323z"></path>
        </g>
        <g id="thumbtack">
          <path d="M15.876 10.17l-.355-2.67h1.312c.464 0 .844-.38.844-.843V3.844A.846.846 0 0 0 16.833 3H7.269a.846.846 0 0 0-.844.844v2.813c0 .464.38.844.844.844H8.58l-.355 2.668c-1.698.97-2.925 2.62-2.925 4.617 0 .31.253.562.563.562h5.625v4.248c0 .024.004.045.007.067l.282 1.125c.07.281.474.285.545 0l.28-1.125c.008-.022.008-.046.008-.067v-4.248h5.626a.564.564 0 0 0 .562-.562c.004-1.997-1.223-3.646-2.922-4.617zm-9.405 4.053c.239-1.508 1.392-2.686 2.795-3.322l.535-4.526H7.55v-2.25h9v2.25H14.3l.538 4.53c1.406.639 2.556 1.82 2.795 3.322H6.471v-.004z"></path>
        </g>
        <g id="calendar">
          <path d="M18.212 5.25h-1.687V3.422A.423.423 0 0 0 16.103 3h-.281a.423.423 0 0 0-.422.422V5.25H8.65V3.422A.423.423 0 0 0 8.228 3h-.281a.423.423 0 0 0-.422.422V5.25H5.837c-.931 0-1.687.756-1.687 1.688v12.375c0 .931.756 1.687 1.688 1.687h12.374c.932 0 1.688-.756 1.688-1.688V6.938c0-.931-.756-1.687-1.688-1.687zM5.838 6.375h12.374c.31 0 .563.253.563.563v1.687h-13.5V6.937c0-.309.253-.562.563-.562zm12.374 13.5H5.838a.564.564 0 0 1-.563-.563V9.75h13.5v9.563a.564.564 0 0 1-.563.562zM9.353 14.25H7.947a.423.423 0 0 1-.422-.422v-1.406c0-.232.19-.422.422-.422h1.406c.232 0 .422.19.422.422v1.406c0 .232-.19.422-.422.422zm3.375 0h-1.406a.423.423 0 0 1-.422-.422v-1.406c0-.232.19-.422.422-.422h1.406c.232 0 .422.19.422.422v1.406c0 .232-.19.422-.422.422zm3.375 0h-1.406a.423.423 0 0 1-.422-.422v-1.406c0-.232.19-.422.422-.422h1.406c.232 0 .422.19.422.422v1.406c0 .232-.19.422-.422.422zm-3.375 3.375h-1.406a.423.423 0 0 1-.422-.422v-1.406c0-.232.19-.422.422-.422h1.406c.232 0 .422.19.422.422v1.406c0 .232-.19.422-.422.422zm-3.375 0H7.947a.423.423 0 0 1-.422-.422v-1.406c0-.232.19-.422.422-.422h1.406c.232 0 .422.19.422.422v1.406c0 .232-.19.422-.422.422zm6.75 0h-1.406a.423.423 0 0 1-.422-.422v-1.406c0-.232.19-.422.422-.422h1.406c.232 0 .422.19.422.422v1.406c0 .232-.19.422-.422.422z"></path>
        </g>
        <g id="repeat">
          <path d="M21 11.992a5.631 5.631 0 0 1-5.625 5.625H6.889l2.398 2.397a.422.422 0 0 1 0 .597l-.199.199a.422.422 0 0 1-.597 0l-3.457-3.457a.422.422 0 0 1 0-.597l3.457-3.457a.422.422 0 0 1 .597 0l.199.198a.422.422 0 0 1 0 .597l-2.398 2.398h8.486c2.481 0 4.5-2.019 4.5-4.5 0-1.004-.33-1.932-.888-2.682a.422.422 0 0 1 .038-.551l.201-.2a.422.422 0 0 1 .636.044A5.596 5.596 0 0 1 21 11.992zM5.013 14.673a4.476 4.476 0 0 1-.888-2.681c0-2.482 2.019-4.5 4.5-4.5h8.486l-2.398 2.397a.422.422 0 0 0 0 .597l.199.199a.422.422 0 0 0 .597 0l3.457-3.457a.422.422 0 0 0 0-.597l-3.457-3.457a.422.422 0 0 0-.597 0l-.199.198a.422.422 0 0 0 0 .597l2.398 2.398H8.625A5.631 5.631 0 0 0 3 11.992c0 1.271.424 2.445 1.138 3.388a.422.422 0 0 0 .636.045l.2-.2a.422.422 0 0 0 .04-.552z"></path>
        </g>
        <g id="envelope">
          <path d="M19.313 5.25H4.688C3.756 5.25 3 6.006 3 6.938v10.125c0 .931.756 1.687 1.688 1.687h14.625c.931 0 1.687-.756 1.687-1.688V6.938c0-.931-.756-1.687-1.688-1.687zM4.688 6.375h14.625c.309 0 .562.253.562.563v1.455c-.77.65-1.87 1.547-5.295 4.264-.594.472-1.764 1.607-2.58 1.593-.816.014-1.99-1.121-2.58-1.593C5.995 9.94 4.895 9.043 4.125 8.393V6.937c0-.309.253-.562.563-.562zm14.625 11.25H4.688a.564.564 0 0 1-.563-.563V9.855a405.38 405.38 0 0 0 4.595 3.681c.72.577 1.993 1.846 3.28 1.839 1.28.01 2.542-1.248 3.28-1.839a416.352 416.352 0 0 0 4.595-3.68v7.207a.564.564 0 0 1-.563.562z"></path>
        </g>
        <g id="envelope-open-dollar">
          <path d="M20.388 8.784c-.07-.057-.78-.63-1.638-1.32V6.375c0-.621-.504-1.125-1.125-1.125h-1.634c-.145-.116-.27-.217-.358-.286C14.856 4.343 13.527 3 12 3c-1.52 0-2.835 1.326-3.633 1.964l-.359.286H6.375c-.621 0-1.125.504-1.125 1.125v1.09A620.77 620.77 0 0 0 3.616 8.78C3.226 9.1 3 9.579 3 10.083v9.23C3 20.244 3.756 21 4.688 21h14.625c.931 0 1.687-.756 1.687-1.688v-9.228c0-.503-.224-.98-.612-1.3zM12 4.125c.765 0 1.57.588 2.22 1.125H9.782c.651-.537 1.456-1.125 2.218-1.125zm-5.625 2.25h11.25v6.094a705.743 705.743 0 0 1-3.044 2.438c-.593.472-1.765 1.606-2.581 1.593-.816.013-1.988-1.12-2.58-1.593a722.495 722.495 0 0 1-3.045-2.438V6.375zm-2.25 3.708a.56.56 0 0 1 .205-.434l.92-.741v2.656l-1.125-.907v-.574zm15.75 9.23c0 .31-.252.562-.563.562H4.688a.563.563 0 0 1-.562-.563v-7.21a974.182 974.182 0 0 0 4.594 3.685c.72.576 1.995 1.847 3.281 1.838 1.281.009 2.54-1.247 3.28-1.838a932.898 932.898 0 0 0 4.595-3.685v7.21zm0-8.656l-1.125.907V8.908c.508.409.872.702.921.743a.56.56 0 0 1 .204.433v.573zm-8.827.8l1.582.475a.46.46 0 0 1 .308.448c0 .256-.186.464-.415.464h-.988a.842.842 0 0 1-.45-.131.289.289 0 0 0-.357.026l-.413.394a.282.282 0 0 0 .02.427c.32.24.706.378 1.103.399v.572a.28.28 0 0 0 .281.281h.563a.281.281 0 0 0 .28-.28v-.567c.831-.023 1.501-.723 1.501-1.585 0-.702-.456-1.33-1.11-1.525l-1.582-.475a.46.46 0 0 1-.309-.448c0-.255.187-.463.415-.463h.988c.16 0 .315.045.451.13a.289.289 0 0 0 .356-.025l.413-.394a.282.282 0 0 0-.02-.427 2.013 2.013 0 0 0-1.102-.4v-.572a.281.281 0 0 0-.282-.281h-.562a.281.281 0 0 0-.281.281v.567c-.83.022-1.5.722-1.5 1.584 0 .703.456 1.33 1.11 1.526z"></path>
        </g>
        <g id="mail-bulk">
          <path d="M19.65 7.55h-9.9c-.744 0-1.35.606-1.35 1.35v.45h.9V8.9a.45.45 0 0 1 .45-.45h9.9a.45.45 0 0 1 .45.45v6.3a.45.45 0 0 1-.45.45H14.7v.9h4.95c.744 0 1.35-.606 1.35-1.35V8.9c0-.744-.606-1.35-1.35-1.35zM5.7 6.2a.45.45 0 0 1 .45-.45h8.1a.45.45 0 0 1 .45.45v.45h.9V6.2c0-.744-.606-1.35-1.35-1.35h-8.1c-.744 0-1.35.606-1.35 1.35v3.15h.9V6.2zm13.05 5.85a.45.45 0 0 0 .45-.45V9.8a.45.45 0 0 0-.45-.45h-1.8a.45.45 0 0 0-.45.45v1.8c0 .249.201.45.45.45h1.8zm-1.35-1.8h.9v.9h-.9v-.9zm-4.95 0h-8.1c-.744 0-1.35.606-1.35 1.35v6.3c0 .744.606 1.35 1.35 1.35h8.1c.744 0 1.35-.606 1.35-1.35v-6.3c0-.744-.606-1.35-1.35-1.35zm.45 7.65a.45.45 0 0 1-.45.45h-8.1a.45.45 0 0 1-.45-.45v-4.23c.36.27.9.72 2.7 1.98.36.27 1.08.9 1.8.9s1.44-.63 1.8-.9c1.8-1.26 2.34-1.71 2.7-1.98v4.23zm0-5.31c-.72.54-.63.54-3.24 2.43-.27.09-.81.63-1.26.63-.45 0-.99-.54-1.26-.72-2.61-1.89-2.52-1.89-3.24-2.43v-.9a.45.45 0 0 1 .45-.45h8.1a.45.45 0 0 1 .45.45v.99z"></path>
        </g>
        <g id="eye">
          <path d="M20.891 11.544C19.197 8.237 15.841 6 12 6c-3.842 0-7.198 2.239-8.891 5.544a1.01 1.01 0 0 0 0 .912C4.803 15.763 8.159 18 12 18c3.842 0 7.198-2.239 8.891-5.544a1.01 1.01 0 0 0 0-.912zM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zM12 9a2.978 2.978 0 0 0-.79.118 1.495 1.495 0 0 1-2.092 2.091A2.993 2.993 0 1 0 12 9z"></path>
        </g>
        <g id="eye-slash">
          <path d="M12 15.45c-2.133 0-3.86-1.651-4.02-3.744l-2.95-2.28a9.374 9.374 0 0 0-1.032 1.564.91.91 0 0 0 0 .82C5.523 14.788 8.543 16.8 12 16.8c.757 0 1.487-.112 2.19-.294l-1.459-1.13a4.054 4.054 0 0 1-.731.074zm8.826 1.634l-3.11-2.403a9.316 9.316 0 0 0 2.286-2.87.91.91 0 0 0 0-.822C18.477 8.014 15.457 6 12 6a8.667 8.667 0 0 0-4.143 1.06L4.279 4.295a.45.45 0 0 0-.632.079l-.552.71a.45.45 0 0 0 .079.632l16.547 12.79a.45.45 0 0 0 .632-.08l.552-.71a.45.45 0 0 0-.079-.632zM15.66 13.09l-1.105-.854a2.665 2.665 0 0 0-3.266-3.43c.17.23.261.508.262.794-.004.095-.019.19-.043.281l-2.07-1.6A4.002 4.002 0 0 1 12 7.351a4.048 4.048 0 0 1 4.05 4.049c0 .608-.149 1.175-.391 1.69z"></path>
        </g>
        <g id="cloud-upload">
          <path d="M18.12 11.177A2.7 2.7 0 0014.1 7.96a4.499 4.499 0 00-8.394 2.472 4.051 4.051 0 001.345 7.872H17.4a3.6 3.6 0 00.72-7.127zm-4.055 1.727h-1.84v3.15c0 .247-.202.45-.45.45h-1.35a.451.451 0 01-.45-.45v-3.15h-1.84a.45.45 0 01-.316-.768l2.964-2.964a.452.452 0 01.636 0l2.964 2.964a.45.45 0 01-.318.768z"></path>
        </g>
        <g id="cloud-download">
          <path d="M18.12 11.177A2.7 2.7 0 0014.1 7.96a4.499 4.499 0 00-8.394 2.472 4.051 4.051 0 001.345 7.872H17.4a3.6 3.6 0 00.72-7.127zm-9.984 1.464h1.84v-3.15c0-.247.202-.45.45-.45h1.35c.247 0 .45.203.45.45v3.15h1.839a.45.45 0 01.318.768l-2.965 2.964a.452.452 0 01-.635 0l-2.965-2.964a.45.45 0 01.318-.768z"></path>
        </g>
        <g id="bars">
          <path d="M18.326 7.895H5.674A.174.174 0 0 1 5.5 7.72v-.697c0-.096.078-.174.174-.174h12.652c.096 0 .174.078.174.174v.697a.174.174 0 0 1-.174.174zm0 4.643H5.674a.174.174 0 0 1-.174-.175v-.696c0-.096.078-.174.174-.174h12.652c.096 0 .174.078.174.174v.696a.174.174 0 0 1-.174.175zm0 4.642H5.674a.174.174 0 0 1-.174-.174v-.696c0-.096.078-.174.174-.174h12.652c.096 0 .174.078.174.174v.696a.174.174 0 0 1-.174.174z"></path>
        </g>
        <g id="clipboard-check">
          <path d="M17.063 5.25h-3.115A1.97 1.97 0 0 0 12 3a1.97 1.97 0 0 0-1.948 2.25H6.938c-.932 0-1.688.756-1.688 1.688v12.375c0 .931.756 1.687 1.688 1.687h10.125c.931 0 1.687-.756 1.687-1.688V6.938c0-.931-.756-1.687-1.688-1.687zM12 4.125c.468 0 .844.376.844.844a.842.842 0 0 1-.844.843.842.842 0 0 1-.844-.843c0-.468.376-.844.844-.844zm5.625 15.188a.564.564 0 0 1-.563.562H6.938a.564.564 0 0 1-.562-.563V6.938c0-.309.253-.562.563-.562h1.687v.703c0 .232.19.422.422.422h5.906c.232 0 .422-.19.422-.422v-.703h1.688c.309 0 .562.253.562.563v12.375zm-2.07-8.311a.425.425 0 0 0-.598-.004l-4.138 4.106-1.772-1.779a.422.422 0 0 0-.598 0l-.299.3a.422.422 0 0 0 0 .597l2.37 2.376a.422.422 0 0 0 .598 0l4.739-4.7a.425.425 0 0 0 .003-.598l-.306-.298z"></path>
        </g>
        <g id="key">
          <path d="M14.813 4.125a5.063 5.063 0 1 1-1.887 9.762l-1.489 1.488H9.75v2.25H7.5v2.25H4.125v-2.813l5.988-5.988a5.063 5.063 0 0 1 4.699-6.949zm0-1.125a6.187 6.187 0 0 0-5.984 7.768l-5.582 5.581a.844.844 0 0 0-.247.597v3.21c0 .466.378.844.844.844H7.78a.844.844 0 0 0 .844-.844V18.75h1.406a.844.844 0 0 0 .844-.844V16.5h.679a.844.844 0 0 0 .597-.247l1.081-1.082A6.187 6.187 0 1 0 14.812 3zM16.5 6.797a.704.704 0 1 1-.002 1.408.704.704 0 0 1 .002-1.408zm0-.984a1.687 1.687 0 1 0 0 3.374 1.687 1.687 0 0 0 0-3.374z"></path>
        </g>
        <g id="question-solid">
          <path d="M12.002 3C9.196 3 7.38 4.15 5.952 6.2a.845.845 0 0 0 .182 1.156l1.516 1.15a.844.844 0 0 0 1.17-.146c.88-1.103 1.533-1.738 2.909-1.738 1.081 0 2.42.696 2.42 1.744 0 .793-.655 1.2-1.723 1.8-1.246.697-2.894 1.566-2.894 3.74v.344c0 .466.378.844.844.844h2.548a.844.844 0 0 0 .844-.844v-.203c0-1.507 4.404-1.57 4.404-5.647 0-3.07-3.186-5.4-6.17-5.4zm-.352 13.13a2.438 2.438 0 0 0-2.435 2.435A2.438 2.438 0 0 0 11.65 21a2.438 2.438 0 0 0 2.435-2.435 2.438 2.438 0 0 0-2.435-2.436z"></path>
        </g>
        <g id="caret-right">
          <path d="M0 22.383V1.617C0 .18 1.788-.54 2.834.476l10.68 10.383c.648.63.648 1.652 0 2.282L2.834 23.524C1.788 24.541 0 23.821 0 22.383z"></path>
        </g>
        <g id="caret-down">
          <path d="M1.615 0h20.77c1.437 0 2.155 1.785 1.138 2.83l-10.38 10.684a1.586 1.586 0 0 1-2.285 0L.477 2.831C-.54 1.785.178 0 1.615 0z"></path>
        </g>
        <g id="paperclip">
          <path d="M5.239 18a4.527 4.527 0 0 1-3.211-1.328 4.546 4.546 0 0 1 0-6.422l9.213-9.213a3.55 3.55 0 0 1 5.016 0 3.55 3.55 0 0 1 0 5.015L8.43 13.88a2.555 2.555 0 0 1-3.609 0 2.555 2.555 0 0 1 0-3.609l5.987-5.987a.422.422 0 0 1 .597 0l.199.2a.422.422 0 0 1 0 .596l-5.987 5.987a1.428 1.428 0 0 0 0 2.017 1.428 1.428 0 0 0 2.017 0l7.827-7.826a2.424 2.424 0 0 0 0-3.424 2.424 2.424 0 0 0-3.424 0l-9.213 9.213a3.42 3.42 0 0 0 0 4.83 3.42 3.42 0 0 0 4.83 0l7.655-7.654a.422.422 0 0 1 .597 0l.199.199a.422.422 0 0 1 0 .596L8.45 16.672A4.527 4.527 0 0 1 5.239 18z"></path>
        </g>
        <g id="copy">
          <path d="M19.567 5.318l-1.861-1.824A1.74 1.74 0 0 0 16.488 3h-6.174c-.951 0-1.722.756-1.722 1.688v1.687h-2.87C4.77 6.375 4 7.131 4 8.063v11.25C4 20.244 4.77 21 5.722 21h8.036c.95 0 1.722-.756 1.722-1.688v-1.687h2.87c.95 0 1.721-.756 1.721-1.688V6.511a1.67 1.67 0 0 0-.504-1.193zm-2.94-1.176c.101.025.194.076.267.148l1.861 1.824a.556.556 0 0 1 .15.261h-2.277V4.142zm-2.295 15.17c0 .31-.258.563-.574.563H5.722a.569.569 0 0 1-.574-.563V8.063c0-.31.257-.562.574-.562h2.87v8.438c0 .931.77 1.687 1.722 1.687h4.018v1.688zm4.591-3.375c0 .31-.257.563-.574.563h-8.035a.569.569 0 0 1-.574-.563V4.688c0-.31.257-.562.574-.562h5.166v2.531c0 .464.387.844.86.844h2.583v8.438z" fill="#000" fill-rule="nonzero"/>
        </g>
        <g id="heart-broken">
          <path d="M21.073 4.683l-.097-.1A5.25 5.25 0 0 0 17.212 3a5.25 5.25 0 0 0-3.765 1.583l-1.121 1.15-1.121-1.146a5.255 5.255 0 0 0-7.53 0l-.096.096C1.622 6.684 1.538 9.871 3.286 12l8.522 8.779c.14.145.33.221.514.221a.7.7 0 0 0 .514-.221L21.366 12c1.748-2.13 1.663-5.316-.293-7.317zm-1.153 6.04l-7.594 7.822-7.594-7.823c-1.093-1.39-1-3.435.21-4.672l.112-.113A3.309 3.309 0 0 1 7.44 4.93c.904 0 1.752.357 2.387 1.008l1.044 1.069.812 2.423-3.037 1.414a.322.322 0 0 0-.093.506l3.488 3.56c.237.241.634.004.538-.317l-.896-2.913 3.078-2.106a.322.322 0 0 0 .116-.377l-.948-2.343.896-.916a3.309 3.309 0 0 1 2.387-1.008c.904 0 1.751.357 2.37.992l.109.112c1.23 1.254 1.322 3.3.229 4.69z" fill="#000" fill-rule="nonzero"/>
        </g>
        <g id="bone-broken">
          <path d="M21.688 7.556c0-1.41-1.281-2.556-2.856-2.556-1.221 0-2.307.695-2.702 1.73-.034.095-.204.614-.349.614h-2.46c-.816 0-1.478.63-1.478 1.406h3.938c.473 0 1.164.035 1.737-1.54.184-.48.711-.804 1.314-.804.76 0 1.379.516 1.379 1.15 0 .512-.132.942-.74 1.207-.39.171-.63.525-.63.924 0 .4.242.754.63.924.595.26.74.677.74 1.208 0 .634-.618 1.15-1.379 1.15-.602 0-1.13-.324-1.314-.804-.309-.876-.636-1.54-1.737-1.54h-.492c-.816 0-1.477.63-1.477 1.406h1.97c.136 0 .314.52.348.614.395 1.035 1.48 1.73 2.702 1.73 1.575 0 2.855-1.147 2.855-2.556 0-.856-.244-1.558-.995-2.131.747-.57.996-1.27.996-2.132zM9.204 14.463c-.334.318-.849.76-.084 2.26.227.463.093 1.046-.333 1.452-.538.513-1.358.564-1.828.116-.38-.362-.607-.755-.374-1.352a.976.976 0 0 0-.24-1.078 1.101 1.101 0 0 0-1.132-.229c-.613.217-1.026.02-1.42-.356-.47-.448-.416-1.229.122-1.74.426-.406 1.039-.534 1.525-.318.87.412 1.594.661 2.373-.08l1.798-1.713a1.36 1.36 0 0 0 0-1.988L6.77 12.143c-.097.092-.609-.155-.703-.199-1.047-.465-2.331-.226-3.195.597-1.114 1.06-1.168 2.733-.122 3.73.636.605 1.33.937 2.287.837-.105.905.238 1.567.879 2.177 1.046.997 2.803.945 3.916-.115.864-.823 1.115-2.046.626-3.044-.046-.09-.311-.57-.208-.668l.813-.775a1.36 1.36 0 0 0 0-1.989l-1.858 1.77z" fill="#000" fill-rule="nonzero"/>
        </g>
        <g id="unlink">
          <path d="M13.69 16.674a.422.422 0 0 1 0 .596l-2.287 2.287a4.92 4.92 0 0 1-6.96 0 4.92 4.92 0 0 1 0-6.96L6.73 10.31a.422.422 0 0 1 .596 0l.796.795a.422.422 0 0 1 0 .597l-2.26 2.26c-1.208 1.208-1.177 3.104.02 4.25a2.953 2.953 0 0 0 4.13-.047l2.286-2.287a.422.422 0 0 1 .597 0l.795.796zm-1.988-8.552l2.26-2.26c1.208-1.208 3.104-1.177 4.25.02a2.953 2.953 0 0 1-.047 4.13l-2.287 2.286a.422.422 0 0 0 0 .597l.796.795a.422.422 0 0 0 .596 0l2.287-2.287a4.92 4.92 0 0 0 0-6.96 4.92 4.92 0 0 0-6.96 0L10.31 6.73a.422.422 0 0 0 0 .597l.795.795a.422.422 0 0 0 .597 0zm8.379 12.754l.795-.795a.422.422 0 0 0 0-.597L4.516 3.124a.422.422 0 0 0-.597 0l-.795.795a.422.422 0 0 0 0 .597l16.36 16.36a.422.422 0 0 0 .597 0z" fill="#000" fill-rule="nonzero"/>
        </g>
      </defs>
    </svg>
  </iron-iconset-svg>
`;

document.head.appendChild(casperIcons.content);
