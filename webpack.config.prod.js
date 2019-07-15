const merge = require("webpack-merge")
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")
const baseConfig = require("./webpack.config.base")

module.exports = merge(baseConfig, {
  mode: "production",
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
})
