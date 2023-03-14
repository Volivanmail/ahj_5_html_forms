// eslint-disable-next-line no-undef
const webpack = require("webpack");
// eslint-disable-next-line no-undef
const WebpackDevServer = require("webpack-dev-server");
// eslint-disable-next-line no-undef
const config = require("../webpack.config");

const server = new WebpackDevServer(webpack(config), {});
server.listen(8080, "localhost", (err) => {
  if (err) {
    return;
  }
  // eslint-disable-next-line no-undef
  if (process.send) {
    // eslint-disable-next-line no-undef
    process.send("ok");
  }
});
