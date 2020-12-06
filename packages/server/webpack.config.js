const baseConfigs = require('../../webpack.base.config');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const isLocal = !process.env.NODE_ENV;

const externalAllowlist = {
  allowlist: ['webpack/hot/poll?100'],
};
module.exports = {
  ...baseConfigs,
  entry: isLocal
    ? ['webpack/hot/poll?100', './src/main.ts']
    : ['./src/main.ts'],
  externals: [
    nodeExternals({
      ...externalAllowlist,
      additionalModuleDirs: [path.resolve(__dirname, '../../node_modules')],
    }),
  ],
};
