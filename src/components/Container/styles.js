import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  top: 150px;
  top: ${props => (props.isFull ? '0px' : '150px')};
  height: ${props => props.isFull && '100vh'};
  width: 100%;

  @media (max-width: 1024px) {
    top: 90px;
  }

  .Toastify__toast-container {
    z-index: 9999;
    -webkit-transform: translate3d(0, 0, 9999px);
    position: fixed;
    padding: 4px;
    width: 320px;
    box-sizing: border-box;
    color: #fff;
  }
  .Toastify__toast-container--top-left {
    top: 1em;
    left: 1em;
  }
  .Toastify__toast-container--top-center {
    top: 1em;
    left: 50%;
    margin-left: -160px;
  }
  .Toastify__toast-container--top-right {
    top: 1em;
    right: 1em;
  }
  .Toastify__toast-container--bottom-left {
    bottom: 1em;
    left: 1em;
  }
  .Toastify__toast-container--bottom-center {
    bottom: 1em;
    left: 50%;
    margin-left: -160px;
  }
  .Toastify__toast-container--bottom-right {
    bottom: 1em;
    right: 1em;
  }

  @media only screen and (max-width: 480px) {
    .Toastify__toast-container {
      width: 100vw;
      padding: 0;
      left: 0;
      margin: 0;
    }
    .Toastify__toast-container--top-left,
    .Toastify__toast-container--top-center,
    .Toastify__toast-container--top-right {
      top: 0;
    }
    .Toastify__toast-container--bottom-left,
    .Toastify__toast-container--bottom-center,
    .Toastify__toast-container--bottom-right {
      bottom: 0;
    }
    .Toastify__toast-container--rtl {
      right: 0;
      left: initial;
    }
  }

  .Toastify__toast {
    position: relative;
    min-height: 64px;
    box-sizing: border-box;
    margin-bottom: 1rem;
    padding: 8px;
    border-radius: 1px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1),
      0 2px 15px 0 rgba(0, 0, 0, 0.05);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    max-height: 800px;
    overflow: hidden;
    font-family: sans-serif;
    cursor: pointer;
    direction: ltr;
  }
  .Toastify__toast--rtl {
    direction: rtl;
  }
  .Toastify__toast--default {
    background: #fff;
    color: #aaa;
  }
  .Toastify__toast--info {
    background: #3498db;
  }
  .Toastify__toast--success {
    background: #07bc0c;
  }
  .Toastify__toast--warning {
    background: #f1c40f;
  }
  .Toastify__toast--error {
    background: #e74c3c;
  }
  .Toastify__toast-body {
    margin: auto 0;
    -ms-flex: 1;
    flex: 1;
  }

  @media only screen and (max-width: 480px) {
    .Toastify__toast {
      margin-bottom: 0;
    }
  }

  .Toastify__close-button {
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s ease;
    -ms-flex-item-align: start;
    align-self: flex-start;
  }
  .Toastify__close-button--default {
    color: #000;
    opacity: 0.3;
  }
  .Toastify__close-button:hover,
  .Toastify__close-button:focus {
    opacity: 1;
  }

  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }

  .Toastify__progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    z-index: 9999;
    opacity: 0.7;
    background-color: rgba(255, 255, 255, 0.7);
    transform-origin: left;
  }
  .Toastify__progress-bar--animated {
    animation: Toastify__trackProgress linear 1 forwards;
  }
  .Toastify__progress-bar--controlled {
    transition: transform 0.2s;
  }
  .Toastify__progress-bar--rtl {
    right: 0;
    left: initial;
    transform-origin: right;
  }
  .Toastify__progress-bar--default {
    background: linear-gradient(
      to right,
      #4cd964,
      #5ac8fa,
      #007aff,
      #34aadc,
      #5856d6,
      #ff2d55
    );
  }

  @keyframes Toastify__bounceInRight {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      transform: translate3d(10px, 0, 0);
    }
    90% {
      transform: translate3d(-5px, 0, 0);
    }
    to {
      transform: none;
    }
  }

  @keyframes Toastify__bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }

  @keyframes Toastify__bounceInLeft {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }
    75% {
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      transform: translate3d(5px, 0, 0);
    }
    to {
      transform: none;
    }
  }

  @keyframes Toastify__bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }

  @keyframes Toastify__bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    75% {
      transform: translate3d(0, 10px, 0);
    }
    90% {
      transform: translate3d(0, -5px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes Toastify__bounceOutUp {
    20% {
      transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }

  @keyframes Toastify__bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }
    75% {
      transform: translate3d(0, -10px, 0);
    }
    90% {
      transform: translate3d(0, 5px, 0);
    }
    to {
      transform: none;
    }
  }

  @keyframes Toastify__bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }

  .Toastify__bounce-enter--top-left,
  .Toastify__bounce-enter--bottom-left {
    animation-name: Toastify__bounceInLeft;
  }

  .Toastify__bounce-enter--top-right,
  .Toastify__bounce-enter--bottom-right {
    animation-name: Toastify__bounceInRight;
  }

  .Toastify__bounce-enter--top-center {
    animation-name: Toastify__bounceInDown;
  }

  .Toastify__bounce-enter--bottom-center {
    animation-name: Toastify__bounceInUp;
  }

  .Toastify__bounce-exit--top-left,
  .Toastify__bounce-exit--bottom-left {
    animation-name: Toastify__bounceOutLeft;
  }

  .Toastify__bounce-exit--top-right,
  .Toastify__bounce-exit--bottom-right {
    animation-name: Toastify__bounceOutRight;
  }

  .Toastify__bounce-exit--top-center {
    animation-name: Toastify__bounceOutUp;
  }

  .Toastify__bounce-exit--bottom-center {
    animation-name: Toastify__bounceOutDown;
  }

  @keyframes Toastify__zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes Toastify__zoomOut {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
      opacity: 0;
    }
  }

  .Toastify__zoom-enter {
    animation-name: Toastify__zoomIn;
  }

  .Toastify__zoom-exit {
    animation-name: Toastify__zoomOut;
  }

  @keyframes Toastify__flipIn {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }

  @keyframes Toastify__flipOut {
    from {
      transform: perspective(400px);
    }
    30% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      opacity: 1;
    }
    to {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
  }

  .Toastify__flip-enter {
    animation-name: Toastify__flipIn;
  }

  .Toastify__flip-exit {
    animation-name: Toastify__flipOut;
  }

  @keyframes Toastify__slideInRight {
    from {
      transform: translate3d(110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes Toastify__slideInLeft {
    from {
      transform: translate3d(-110%, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes Toastify__slideInUp {
    from {
      transform: translate3d(0, 110%, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes Toastify__slideInDown {
    from {
      transform: translate3d(0, -110%, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes Toastify__slideOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(110%, 0, 0);
    }
  }

  @keyframes Toastify__slideOutLeft {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(-110%, 0, 0);
    }
  }

  @keyframes Toastify__slideOutDown {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, 500px, 0);
    }
  }

  @keyframes Toastify__slideOutUp {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, -500px, 0);
    }
  }

  .Toastify__slide-enter--top-left,
  .Toastify__slide-enter--bottom-left {
    animation-name: Toastify__slideInLeft;
  }

  .Toastify__slide-enter--top-right,
  .Toastify__slide-enter--bottom-right {
    animation-name: Toastify__slideInRight;
  }

  .Toastify__slide-enter--top-center {
    animation-name: Toastify__slideInDown;
  }

  .Toastify__slide-enter--bottom-center {
    animation-name: Toastify__slideInUp;
  }

  .Toastify__slide-exit--top-left,
  .Toastify__slide-exit--bottom-left {
    animation-name: Toastify__slideOutLeft;
  }

  .Toastify__slide-exit--top-right,
  .Toastify__slide-exit--bottom-right {
    animation-name: Toastify__slideOutRight;
  }

  .Toastify__slide-exit--top-center {
    animation-name: Toastify__slideOutUp;
  }

  .Toastify__slide-exit--bottom-center {
    animation-name: Toastify__slideOutDown;
  }

  /* tippy */
  .tippy-touch {
    cursor: pointer !important;
  }
  .tippy-notransition {
    transition: none !important;
  }
  .tippy-popper {
    max-width: 400px;
    -webkit-perspective: 800px;
    perspective: 800px;
    z-index: 9999;
    outline: 0;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    pointer-events: none;
  }
  .tippy-popper.html-template {
    max-width: 96%;
    max-width: calc(100% - 20px);
  }
  .tippy-popper[x-placement^='top'] [x-arrow] {
    border-top: 7px solid #333;
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    bottom: -7px;
    margin: 0 9px;
  }
  .tippy-popper[x-placement^='top'] [x-arrow].arrow-small {
    border-top: 5px solid #333;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    bottom: -5px;
  }
  .tippy-popper[x-placement^='top'] [x-arrow].arrow-big {
    border-top: 10px solid #333;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    bottom: -10px;
  }
  .tippy-popper[x-placement^='top'] [x-circle] {
    -webkit-transform-origin: 0 33%;
    transform-origin: 0 33%;
  }
  .tippy-popper[x-placement^='top'] [x-circle].enter {
    -webkit-transform: scale(1) translate(-50%, -55%);
    transform: scale(1) translate(-50%, -55%);
    opacity: 1;
  }
  .tippy-popper[x-placement^='top'] [x-circle].leave {
    -webkit-transform: scale(0.15) translate(-50%, -50%);
    transform: scale(0.15) translate(-50%, -50%);
    opacity: 0;
  }
  .tippy-popper[x-placement^='top'] .tippy-tooltip.light-theme [x-circle] {
    background-color: #fff;
  }
  .tippy-popper[x-placement^='top'] .tippy-tooltip.light-theme [x-arrow] {
    border-top: 7px solid #fff;
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
  }
  .tippy-popper[x-placement^='top']
    .tippy-tooltip.light-theme
    [x-arrow].arrow-small {
    border-top: 5px solid #fff;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
  }
  .tippy-popper[x-placement^='top']
    .tippy-tooltip.light-theme
    [x-arrow].arrow-big {
    border-top: 10px solid #fff;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
  .tippy-popper[x-placement^='top']
    .tippy-tooltip.transparent-theme
    [x-circle] {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .tippy-popper[x-placement^='top'] .tippy-tooltip.transparent-theme [x-arrow] {
    border-top: 7px solid rgba(0, 0, 0, 0.7);
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
  }
  .tippy-popper[x-placement^='top']
    .tippy-tooltip.transparent-theme
    [x-arrow].arrow-small {
    border-top: 5px solid rgba(0, 0, 0, 0.7);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
  }
  .tippy-popper[x-placement^='top']
    .tippy-tooltip.transparent-theme
    [x-arrow].arrow-big {
    border-top: 10px solid rgba(0, 0, 0, 0.7);
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
  .tippy-popper[x-placement^='top'] [data-animation='perspective'] {
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
  }
  .tippy-popper[x-placement^='top'] [data-animation='perspective'].enter {
    opacity: 1;
    -webkit-transform: translateY(-10px) rotateX(0);
    transform: translateY(-10px) rotateX(0);
  }
  .tippy-popper[x-placement^='top'] [data-animation='perspective'].leave {
    opacity: 0;
    -webkit-transform: translateY(0) rotateX(90deg);
    transform: translateY(0) rotateX(90deg);
  }
  .tippy-popper[x-placement^='top'] [data-animation='fade'].enter {
    opacity: 1;
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  .tippy-popper[x-placement^='top'] [data-animation='fade'].leave {
    opacity: 0;
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  .tippy-popper[x-placement^='top'] [data-animation='shift'].enter {
    opacity: 1;
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  .tippy-popper[x-placement^='top'] [data-animation='shift'].leave {
    opacity: 0;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .tippy-popper[x-placement^='top'] [data-animation='scale'].enter {
    opacity: 1;
    -webkit-transform: translateY(-10px) scale(1);
    transform: translateY(-10px) scale(1);
  }
  .tippy-popper[x-placement^='top'] [data-animation='scale'].leave {
    opacity: 0;
    -webkit-transform: translateY(0) scale(0);
    transform: translateY(0) scale(0);
  }
  .tippy-popper[x-placement^='bottom'] [x-arrow] {
    border-bottom: 7px solid #333;
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    top: -7px;
    margin: 0 9px;
  }
  .tippy-popper[x-placement^='bottom'] [x-arrow].arrow-small {
    border-bottom: 5px solid #333;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    top: -5px;
  }
  .tippy-popper[x-placement^='bottom'] [x-arrow].arrow-big {
    border-bottom: 10px solid #333;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    top: -10px;
  }
  .tippy-popper[x-placement^='bottom'] [x-circle] {
    -webkit-transform-origin: 0 -50%;
    transform-origin: 0 -50%;
  }
  .tippy-popper[x-placement^='bottom'] [x-circle].enter {
    -webkit-transform: scale(1) translate(-50%, -45%);
    transform: scale(1) translate(-50%, -45%);
    opacity: 1;
  }
  .tippy-popper[x-placement^='bottom'] [x-circle].leave {
    -webkit-transform: scale(0.15) translate(-50%, -5%);
    transform: scale(0.15) translate(-50%, -5%);
    opacity: 0;
  }
  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.light-theme [x-circle] {
    background-color: #fff;
  }
  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.light-theme [x-arrow] {
    border-bottom: 7px solid #fff;
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
  }
  .tippy-popper[x-placement^='bottom']
    .tippy-tooltip.light-theme
    [x-arrow].arrow-small {
    border-bottom: 5px solid #fff;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
  }
  .tippy-popper[x-placement^='bottom']
    .tippy-tooltip.light-theme
    [x-arrow].arrow-big {
    border-bottom: 10px solid #fff;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
  .tippy-popper[x-placement^='bottom']
    .tippy-tooltip.transparent-theme
    [x-circle] {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .tippy-popper[x-placement^='bottom']
    .tippy-tooltip.transparent-theme
    [x-arrow] {
    border-bottom: 7px solid rgba(0, 0, 0, 0.7);
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
  }
  .tippy-popper[x-placement^='bottom']
    .tippy-tooltip.transparent-theme
    [x-arrow].arrow-small {
    border-bottom: 5px solid rgba(0, 0, 0, 0.7);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
  }
  .tippy-popper[x-placement^='bottom']
    .tippy-tooltip.transparent-theme
    [x-arrow].arrow-big {
    border-bottom: 10px solid rgba(0, 0, 0, 0.7);
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
  .tippy-popper[x-placement^='bottom'] [data-animation='perspective'] {
    -webkit-transform-origin: top;
    transform-origin: top;
  }
  .tippy-popper[x-placement^='bottom'] [data-animation='perspective'].enter {
    opacity: 1;
    -webkit-transform: translateY(10px) rotateX(0);
    transform: translateY(10px) rotateX(0);
  }
  .tippy-popper[x-placement^='bottom'] [data-animation='perspective'].leave {
    opacity: 0;
    -webkit-transform: translateY(0) rotateX(-90deg);
    transform: translateY(0) rotateX(-90deg);
  }
  .tippy-popper[x-placement^='bottom'] [data-animation='fade'].enter {
    opacity: 1;
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  .tippy-popper[x-placement^='bottom'] [data-animation='fade'].leave {
    opacity: 0;
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  .tippy-popper[x-placement^='bottom'] [data-animation='shift'].enter {
    opacity: 1;
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  .tippy-popper[x-placement^='bottom'] [data-animation='shift'].leave {
    opacity: 0;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .tippy-popper[x-placement^='bottom'] [data-animation='scale'].enter {
    opacity: 1;
    -webkit-transform: translateY(10px) scale(1);
    transform: translateY(10px) scale(1);
  }
  .tippy-popper[x-placement^='bottom'] [data-animation='scale'].leave {
    opacity: 0;
    -webkit-transform: translateY(0) scale(0);
    transform: translateY(0) scale(0);
  }
  .tippy-popper[x-placement^='left'] [x-arrow] {
    border-left: 7px solid #333;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    right: -7px;
    margin: 6px 0;
  }
  .tippy-popper[x-placement^='left'] [x-arrow].arrow-small {
    border-left: 5px solid #333;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    right: -5px;
  }
  .tippy-popper[x-placement^='left'] [x-arrow].arrow-big {
    border-left: 10px solid #333;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    right: -10px;
  }
  .tippy-popper[x-placement^='left'] [x-circle] {
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
  }
  .tippy-popper[x-placement^='left'] [x-circle].enter {
    -webkit-transform: scale(1) translate(-50%, -50%);
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
  }
  .tippy-popper[x-placement^='left'] [x-circle].leave {
    -webkit-transform: scale(0.15) translate(-50%, -50%);
    transform: scale(0.15) translate(-50%, -50%);
    opacity: 0;
  }
  .tippy-popper[x-placement^='left'] .tippy-tooltip.light-theme [x-circle] {
    background-color: #fff;
  }
  .tippy-popper[x-placement^='left'] .tippy-tooltip.light-theme [x-arrow] {
    border-left: 7px solid #fff;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
  }
  .tippy-popper[x-placement^='left']
    .tippy-tooltip.light-theme
    [x-arrow].arrow-small {
    border-left: 5px solid #fff;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
  .tippy-popper[x-placement^='left']
    .tippy-tooltip.light-theme
    [x-arrow].arrow-big {
    border-left: 10px solid #fff;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  .tippy-popper[x-placement^='left']
    .tippy-tooltip.transparent-theme
    [x-circle] {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .tippy-popper[x-placement^='left']
    .tippy-tooltip.transparent-theme
    [x-arrow] {
    border-left: 7px solid rgba(0, 0, 0, 0.7);
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
  }
  .tippy-popper[x-placement^='left']
    .tippy-tooltip.transparent-theme
    [x-arrow].arrow-small {
    border-left: 5px solid rgba(0, 0, 0, 0.7);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
  .tippy-popper[x-placement^='left']
    .tippy-tooltip.transparent-theme
    [x-arrow].arrow-big {
    border-left: 10px solid rgba(0, 0, 0, 0.7);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  .tippy-popper[x-placement^='left'] [data-animation='perspective'] {
    -webkit-transform-origin: right;
    transform-origin: right;
  }
  .tippy-popper[x-placement^='left'] [data-animation='perspective'].enter {
    opacity: 1;
    -webkit-transform: translateX(-10px) rotateY(0);
    transform: translateX(-10px) rotateY(0);
  }
  .tippy-popper[x-placement^='left'] [data-animation='perspective'].leave {
    opacity: 0;
    -webkit-transform: translateX(0) rotateY(-90deg);
    transform: translateX(0) rotateY(-90deg);
  }
  .tippy-popper[x-placement^='left'] [data-animation='fade'].enter {
    opacity: 1;
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  .tippy-popper[x-placement^='left'] [data-animation='fade'].leave {
    opacity: 0;
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  .tippy-popper[x-placement^='left'] [data-animation='shift'].enter {
    opacity: 1;
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  .tippy-popper[x-placement^='left'] [data-animation='shift'].leave {
    opacity: 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  .tippy-popper[x-placement^='left'] [data-animation='scale'].enter {
    opacity: 1;
    -webkit-transform: translateX(-10px) scale(1);
    transform: translateX(-10px) scale(1);
  }
  .tippy-popper[x-placement^='left'] [data-animation='scale'].leave {
    opacity: 0;
    -webkit-transform: translateX(0) scale(0);
    transform: translateX(0) scale(0);
  }
  .tippy-popper[x-placement^='right'] [x-arrow] {
    border-right: 7px solid #333;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    left: -7px;
    margin: 6px 0;
  }
  .tippy-popper[x-placement^='right'] [x-arrow].arrow-small {
    border-right: 5px solid #333;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    left: -5px;
  }
  .tippy-popper[x-placement^='right'] [x-arrow].arrow-big {
    border-right: 10px solid #333;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    left: -10px;
  }
  .tippy-popper[x-placement^='right'] [x-circle] {
    -webkit-transform-origin: -50% 0;
    transform-origin: -50% 0;
  }
  .tippy-popper[x-placement^='right'] [x-circle].enter {
    -webkit-transform: scale(1) translate(-50%, -50%);
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
  }
  .tippy-popper[x-placement^='right'] [x-circle].leave {
    -webkit-transform: scale(0.15) translate(-50%, -50%);
    transform: scale(0.15) translate(-50%, -50%);
    opacity: 0;
  }
  .tippy-popper[x-placement^='right'] .tippy-tooltip.light-theme [x-circle] {
    background-color: #fff;
  }
  .tippy-popper[x-placement^='right'] .tippy-tooltip.light-theme [x-arrow] {
    border-right: 7px solid #fff;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
  }
  .tippy-popper[x-placement^='right']
    .tippy-tooltip.light-theme
    [x-arrow].arrow-small {
    border-right: 5px solid #fff;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
  .tippy-popper[x-placement^='right']
    .tippy-tooltip.light-theme
    [x-arrow].arrow-big {
    border-right: 10px solid #fff;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  .tippy-popper[x-placement^='right']
    .tippy-tooltip.transparent-theme
    [x-circle] {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .tippy-popper[x-placement^='right']
    .tippy-tooltip.transparent-theme
    [x-arrow] {
    border-right: 7px solid rgba(0, 0, 0, 0.7);
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
  }
  .tippy-popper[x-placement^='right']
    .tippy-tooltip.transparent-theme
    [x-arrow].arrow-small {
    border-right: 5px solid rgba(0, 0, 0, 0.7);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
  .tippy-popper[x-placement^='right']
    .tippy-tooltip.transparent-theme
    [x-arrow].arrow-big {
    border-right: 10px solid rgba(0, 0, 0, 0.7);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  .tippy-popper[x-placement^='right'] [data-animation='perspective'] {
    -webkit-transform-origin: left;
    transform-origin: left;
  }
  .tippy-popper[x-placement^='right'] [data-animation='perspective'].enter {
    opacity: 1;
    -webkit-transform: translateX(10px) rotateY(0);
    transform: translateX(10px) rotateY(0);
  }
  .tippy-popper[x-placement^='right'] [data-animation='perspective'].leave {
    opacity: 0;
    -webkit-transform: translateX(0) rotateY(90deg);
    transform: translateX(0) rotateY(90deg);
  }
  .tippy-popper[x-placement^='right'] [data-animation='fade'].enter {
    opacity: 1;
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
  .tippy-popper[x-placement^='right'] [data-animation='fade'].leave {
    opacity: 0;
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
  .tippy-popper[x-placement^='right'] [data-animation='shift'].enter {
    opacity: 1;
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
  .tippy-popper[x-placement^='right'] [data-animation='shift'].leave {
    opacity: 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  .tippy-popper[x-placement^='right'] [data-animation='scale'].enter {
    opacity: 1;
    -webkit-transform: translateX(10px) scale(1);
    transform: translateX(10px) scale(1);
  }
  .tippy-popper[x-placement^='right'] [data-animation='scale'].leave {
    opacity: 0;
    -webkit-transform: translateX(0) scale(0);
    transform: translateX(0) scale(0);
  }
  .tippy-popper .tippy-tooltip.transparent-theme {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .tippy-popper .tippy-tooltip.transparent-theme[data-animatefill] {
    background-color: transparent;
  }
  .tippy-popper .tippy-tooltip.light-theme {
    color: #26323d;
    box-shadow: 0 4px 20px 4px rgba(0, 20, 60, 0.1),
      0 4px 80px -8px rgba(0, 20, 60, 0.2);
    background-color: #fff;
  }
  .tippy-popper .tippy-tooltip.light-theme[data-animatefill] {
    background-color: transparent;
  }
  .tippy-tooltip {
    position: relative;
    color: #fff;
    border-radius: 4px;
    font-size: 0.95rem;
    padding: 0.4rem 0.8rem;
    text-align: center;
    will-change: transform;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #333;
  }
  .tippy-tooltip--small {
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
  }
  .tippy-tooltip--big {
    padding: 0.6rem 1.2rem;
    font-size: 1.2rem;
  }
  .tippy-tooltip[data-animatefill] {
    overflow: hidden;
    background-color: transparent;
  }
  .tippy-tooltip[data-interactive] {
    pointer-events: auto;
  }
  .tippy-tooltip[data-inertia] {
    transition-timing-function: cubic-bezier(0.53, 2, 0.36, 0.85);
  }
  .tippy-tooltip [x-arrow] {
    position: absolute;
    width: 0;
    height: 0;
  }
  .tippy-tooltip [x-circle] {
    position: absolute;
    will-change: transform;
    background-color: #333;
    border-radius: 50%;
    width: 130%;
    width: calc(110% + 2rem);
    left: 50%;
    top: 50%;
    z-index: -1;
    overflow: hidden;
    transition: all ease;
  }
  .tippy-tooltip [x-circle]:before {
    content: '';
    padding-top: 90%;
    float: left;
  }
  @media (max-width: 450px) {
    .tippy-popper {
      max-width: 96%;
      max-width: calc(100% - 20px);
    }
  }
`;
