// @file MakerDAO Price Oracles
// @license MIT
'use strict';

module.exports = {
  extends: [
    require.resolve('./markets'),
    require.resolve('./networks'),
    require.resolve('makerdao.config.js'),
  ],
};
/** @exports makerdao-pricing-oracles */
