const { VantResolver } = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
const { defineConfig } = require("@vue/cli-service");
module.exports = {
  // 忽略第三方依赖
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
  // 生产环境是否生成 sourceMap 文件，一般情况不建议打开
  productionSourceMap: false,
  // 基本路径
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "assets",
  devServer: {
    // static: {
    port: 8090,
    // host: '0.0.0.0',
    // https: false,
    // open: true
    // hot: true, // 热更新
    proxy: {},
    // },
  },

  // css: {
  // 启用 CSS modules
  // requireModuleExtension: false,
  // 是否使用css分离插件
  // extract: true,
  // 开启 CSS source maps，一般不建议开启
  // sourceMap: false,
  // css预设器配置项
  // loaderOptions: {
  // css: {
  // modules: {
  // auto: () => false,
  // },
  // },
  // less: {
  // prependData: `@import "@/styles/global.less";`,
  // },
  // },
  // },
  // PWA 插件相关配置
  pwa: {},
  // 第三方插件配置
  pluginOptions: {
    autoprefixer: {
      browsers: ["Android >= 4.0", "iOS >= 7"],
    },
    "postcss-pxtorem": {
      rootValue: 16, //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      propList: ["*"],
    },
  },
};
