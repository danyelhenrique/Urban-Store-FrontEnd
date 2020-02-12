/* eslint-disable object-shorthand */
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: true,
  // target: 'serverless',
  devIndicators: {
    autoPrerender: false
  }
});
