import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,body, #__next, .page-layout {
    height: 100vh;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
        padding: 0
    };

     .carousel .control-arrow,.carousel.carousel-slider .control-arrow{
      -webkit-transition:all .25s ease-in;
      -moz-transition:all .25s ease-in;
      -ms-transition:all .25s ease-in;-o-transition:all .25s ease-in;transition:all .25s ease-in;opacity:.4;position:absolute;z-index:2;top:20px;background:0 0;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:hover{opacity:1}.carousel .control-arrow:before,.carousel.carousel-slider .control-arrow:before{margin:0 5px;display:inline-block;border-top:8px solid transparent;border-bottom:8px solid transparent;content:''}.carousel .control-disabled.control-arrow{opacity:0;cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:8px solid #fff}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:8px solid #fff}.carousel{position:relative;width:100%}.carousel *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{outline:0;border:0;background:0 0;top:50%;margin-top:-13px;font-size:18px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{-webkit-transition:all .15s ease-in;-moz-transition:all .15s ease-in;-ms-transition:all .15s ease-in;-o-transition:all .15s ease-in;transition:all .15s ease-in;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{-webkit-transition:border .15s ease-in;-moz-transition:border .15s ease-in;-ms-transition:border .15s ease-in;-o-transition:border .15s ease-in;transition:border .15s ease-in;display:inline-block;width:80px;margin-right:6px;white-space:nowrap;overflow:hidden;border:3px solid #fff;padding:2px}.carousel .thumb:focus{border:3px solid #ccc;outline:0}.carousel .thumb.selected,.carousel .thumb:hover{border:3px solid #333}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#fff;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:rgba(0,0,0,.2)}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;-webkit-transition:height .15s ease-in;-moz-transition:height .15s ease-in;-ms-transition:height .15s ease-in;-o-transition:height .15s ease-in;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{flex-direction:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{-webkit-flex-direction:column;flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{-webkit-transition:all .35s ease-in-out;-moz-transition:all .35s ease-in-out;-ms-transition:all .35s ease-in-out;-o-transition:all .35s ease-in-out;transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center;background:#000}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#fff;padding:10px;font-size:12px;text-align:center;opacity:.25;-webkit-transition:opacity .35s ease-in-out;-moz-transition:opacity .35s ease-in-out;-ms-transition:opacity .35s ease-in-out;-o-transition:opacity .35s ease-in-out;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;text-align:center;width:100%}@media (min-width:960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{-webkit-transition:opacity .25s ease-in;-moz-transition:opacity .25s ease-in;-ms-transition:opacity .25s ease-in;-o-transition:opacity .25s ease-in;transition:opacity .25s ease-in;opacity:.3;box-shadow:1px 1px 2px rgba(0,0,0,.9);background:#fff;border-radius:50%;width:8px;height:8px;cursor:pointer;display:inline-block;margin:0 8px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,.9);color:#fff}.carousel:hover .slide .legend{opacity:1} 


      .buttonBack___1mlaL,
.buttonFirst___2rhFr,
.buttonLast___2yuh0,
.buttonNext___2mOCa,
.buttonNext___3Lm3s,
.dot___3c3SI {
    cursor: pointer
}

.image___xtQGH {
    display: block;
    width: 100%;
    height: 100%
}

.spinner___27VUp {
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    width: 30px;
    height: 30px;
    animation-name: spin___S3UuE;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    border: 4px solid #a9a9a9;
    border-top-color: #000;
    border-radius: 30px
}

@keyframes spin___S3UuE {
    0% {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(1turn)
    }
}

.container___2O72F {
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%
}

.overlay___IV4qY {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    cursor: zoom-in;
    transition: opacity .3s, transform .3s
}

.hover___MYy31,
.loading___1pvNI,
.zoom___3kqYk {
    opacity: 1
}

.imageLoadingSpinnerContainer___3UIPD {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f4f4f4
}

.slide___3-Nqo {
    position: relative;
    display: block;
    box-sizing: border-box;
    height: 0;
    margin: 0;
    list-style-type: none
}

.slide___3-Nqo:focus {
    outline: none!important
}

.slideHorizontal___1NzNV {
    float: left
}

.slideInner___2mfX9 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.focusRing___1airF {
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    pointer-events: none;
    outline-width: 5px;
    outline-style: solid;
    outline-color: Highlight
}

@media (-webkit-min-device-pixel-ratio:0) {
    .focusRing___1airF {
        outline-style: auto;
        outline-color: -webkit-focus-ring-color
    }
}

.horizontalSlider___281Ls {
    position: relative;
    overflow: hidden
}

.horizontalSliderTray___1L-0W {
    overflow: hidden;
    width: 100%
}

.verticalSlider___34ZFD {
    position: relative;
    overflow: hidden
}

.verticalSliderTray___267D8 {
    overflow: hidden
}

.verticalTray___12Key {
    float: left
}

.verticalSlideTrayWrap___2nO7o {
    overflow: hidden
}

.sliderTray___-vHFQ {
    display: block;
    list-style: none;
    padding: 0;
    margin: 0
}

.sliderAnimation___300FY {
    transition: transform .5s;
    transition-timing-function: cubic-bezier(.645, .045, .355, 1);
    will-change: transform
}

.masterSpinnerContainer___1Z6hB {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f4f4f4
}

/* toastify */
.Toastify__toast-container {
  z-index: 9999;
  -webkit-transform: translate3d(0, 0, 9999px);
  position: fixed;
  padding: 4px;
  width: 320px;
  box-sizing: border-box;
  color: #fff; }
  .Toastify__toast-container--top-left {
    top: 1em;
    left: 1em; }
  .Toastify__toast-container--top-center {
    top: 1em;
    left: 50%;
    margin-left: -160px; }
  .Toastify__toast-container--top-right {
    top: 1em;
    right: 1em; }
  .Toastify__toast-container--bottom-left {
    bottom: 1em;
    left: 1em; }
  .Toastify__toast-container--bottom-center {
    bottom: 1em;
    left: 50%;
    margin-left: -160px; }
  .Toastify__toast-container--bottom-right {
    bottom: 1em;
    right: 1em; }

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    padding: 0;
    left: 0;
    margin: 0; }
    .Toastify__toast-container--top-left, .Toastify__toast-container--top-center, .Toastify__toast-container--top-right {
      top: 0; }
    .Toastify__toast-container--bottom-left, .Toastify__toast-container--bottom-center, .Toastify__toast-container--bottom-right {
      bottom: 0; }
    .Toastify__toast-container--rtl {
      right: 0;
      left: initial; } }

.Toastify__toast {
  position: relative;
  min-height: 64px;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 8px;
  border-radius: 1px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
      justify-content: space-between;
  max-height: 800px;
  overflow: hidden;
  font-family: sans-serif;
  cursor: pointer;
  direction: ltr; }
  .Toastify__toast--rtl {
    direction: rtl; }
  .Toastify__toast--default {
    background: #fff;
    color: #aaa; }
  .Toastify__toast--info {
    background: #3498db; }
  .Toastify__toast--success {
    background: #07bc0c; }
  .Toastify__toast--warning {
    background: #f1c40f; }
  .Toastify__toast--error {
    background: #e74c3c; }
  .Toastify__toast-body {
    margin: auto 0;
    -ms-flex: 1;
        flex: 1; }

@media only screen and (max-width: 480px) {
  .Toastify__toast {
    margin-bottom: 0; } }

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
      align-self: flex-start; }
  .Toastify__close-button--default {
    color: #000;
    opacity: 0.3; }
  .Toastify__close-button:hover, .Toastify__close-button:focus {
    opacity: 1; }

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1); }
  100% {
    transform: scaleX(0); } }

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  z-index: 9999;
  opacity: 0.7;
  background-color: rgba(255, 255, 255, 0.7);
  transform-origin: left; }
  .Toastify__progress-bar--animated {
    animation: Toastify__trackProgress linear 1 forwards; }
  .Toastify__progress-bar--controlled {
    transition: transform .2s; }
  .Toastify__progress-bar--rtl {
    right: 0;
    left: initial;
    transform-origin: right; }
  .Toastify__progress-bar--default {
    background: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55); }

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0); }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0); }
  75% {
    transform: translate3d(10px, 0, 0); }
  90% {
    transform: translate3d(-5px, 0, 0); }
  to {
    transform: none; } }

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0); }
  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0); } }

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0); }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0); }
  75% {
    transform: translate3d(-10px, 0, 0); }
  90% {
    transform: translate3d(5px, 0, 0); }
  to {
    transform: none; } }

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0); }
  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0); } }

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0); }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0); }
  75% {
    transform: translate3d(0, 10px, 0); }
  90% {
    transform: translate3d(0, -5px, 0); }
  to {
    transform: translate3d(0, 0, 0); } }

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, -10px, 0); }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0); }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0); } }

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0); }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0); }
  75% {
    transform: translate3d(0, -10px, 0); }
  90% {
    transform: translate3d(0, 5px, 0); }
  to {
    transform: none; } }

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, 10px, 0); }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0); }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0); } }

.Toastify__bounce-enter--top-left, .Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft; }

.Toastify__bounce-enter--top-right, .Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight; }

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown; }

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp; }

.Toastify__bounce-exit--top-left, .Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft; }

.Toastify__bounce-exit--top-right, .Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight; }

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp; }

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown; }

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3); }
  50% {
    opacity: 1; } }

@keyframes Toastify__zoomOut {
  from {
    opacity: 1; }
  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3); }
  to {
    opacity: 0; } }

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn; }

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut; }

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0; }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in; }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1; }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }
  to {
    transform: perspective(400px); } }

@keyframes Toastify__flipOut {
  from {
    transform: perspective(400px); }
  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1; }
  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0; } }

.Toastify__flip-enter {
  animation-name: Toastify__flipIn; }

.Toastify__flip-exit {
  animation-name: Toastify__flipOut; }

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible; }
  to {
    transform: translate3d(0, 0, 0); } }

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible; }
  to {
    transform: translate3d(0, 0, 0); } }

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible; }
  to {
    transform: translate3d(0, 0, 0); } }

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible; }
  to {
    transform: translate3d(0, 0, 0); } }

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, 0, 0); }
  to {
    visibility: hidden;
    transform: translate3d(110%, 0, 0); } }

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, 0, 0); }
  to {
    visibility: hidden;
    transform: translate3d(-110%, 0, 0); } }

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, 0, 0); }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0); } }

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, 0, 0); }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0); } }

.Toastify__slide-enter--top-left, .Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft; }

.Toastify__slide-enter--top-right, .Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight; }

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown; }

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp; }

.Toastify__slide-exit--top-left, .Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft; }

.Toastify__slide-exit--top-right, .Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight; }

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp; }

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown; }

/*# sourceMappingURL=ReactToastify.css.map */

`;
