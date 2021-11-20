module.exports = {
  lintOnSave: false,
  publicPath: "/pages",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "../~gradely_asset_store/src/basic_scss/_colors.scss"; @import "../~gradely_asset_store/src/basic_scss/_breakpoints.scss"; @import "../~gradely_asset_store/src/basic_scss/_mixins.scss";`,
      },
    },
  },

  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.(pdf)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "./src/assets/files/[name].[hash:8].[ext]",
      });
  },
};
