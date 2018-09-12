module.exports = {
  lintOnSave: false,

  pwa: {
    themeColor: "#673AB7"
  },
  configureWebpack: config => {
    //workerize-loader issue
    //https://github.com/webpack/webpack/issues/6642#issuecomment-371087342
    config.output["globalObject"] = "this";
  }
};
