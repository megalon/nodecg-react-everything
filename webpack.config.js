const path = require("path");
const webpack = require("webpack");

let config = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] }
};

// Use multiple module configs
// https://stackoverflow.com/a/38132106
let dashboardModule = Object.assign({}, config, {
  name: "dashboard",
  entry: "./src/dashboard/index.js",
  output: {
    path: path.join(__dirname, "dashboard/build/"),
    filename: "bundle.js"
  }
});

let graphicsModule = Object.assign({}, config, {
  name: "graphics",
  entry: "./src/graphics/index.js",
  output: {
    path: path.join(__dirname, "graphics/build/"),
    filename: "bundle.js"
  }
});

module.exports = [dashboardModule, graphicsModule];
