// eslint-disable-next-line
const {addBabelPlugin, addWebpackPlugin, override} = require('customize-cra');
// eslint-disable-next-line
const ReactRefreshPlugin = require('react-refresh-webpack-plugin');

/* config-overrides.js */
module.exports = override(
  process.env.NODE_ENV === 'development'
    ? addBabelPlugin('react-refresh/babel')
    : undefined,
  process.env.NODE_ENV === 'development'
    ? addWebpackPlugin(new ReactRefreshPlugin())
    : undefined,
);
