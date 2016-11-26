const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = process.env.port || 3000;
const host = process.env.host || '0.0.0.0';
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}).listen(port, host, function (err) {
  if (err) return console.error(err);
  console.log(`Running at http://${host}:${port}`);
});
