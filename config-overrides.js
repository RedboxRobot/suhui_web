const path = require('path');
const { paths } = require('react-app-rewired');
const {
  override,
  fixBabelImports,
  addPostcssPlugins,
  addLessLoader,
  addWebpackPlugin,
  useEslintRc,
  addWebpackAlias,
  // addBabelPlugins,
  addDecoratorsLegacy
} = require('customize-cra');

const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = override(
  useEslintRc(),

  addDecoratorsLegacy(),

  addWebpackAlias({
    '@': path.resolve(__dirname, `${paths.appSrc}`)
  }),

  // ...addBabelPlugins(
  //   'lodash',
  // ),

  fixBabelImports('antd',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    }
  ),

  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true
  }),

  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 16,
    propList: ['*']
    // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
    // propWhiteList: []
  }),]),

  //全局引入antd的样式 import 'antd/dist/antd.css';
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#5d85e0', // 全局主色
        '@link-color': '#5d85e0', // 链接色
        '@success-color': '#14d991', // 成功色
        '@warning-color': '#feaf39', // 警告色
        '@error-color': '#f5222d', // 错误色
        '@font-size-base': '14px', // 主字号
        '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
        '@text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
        '@text-color-secondary ': 'rgba(0, 0, 0, .45)', // 次文本色
        '@disabled-color ': 'rgba(0, 0, 0, .25)', // 失效色
        '@border-radius-base': '4px', // 组件/浮层圆角
        '@border-color-base': '#d9d9d9', // 边框色
        '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)' // 浮层阴影
      }
    }
  }),

  addWebpackPlugin((config) => {
    config.options.plugins.push(new AntdDayjsWebpackPlugin()); //使用day.js替换moment,减小打包时的体积
    config.options.plugins.push( //打包开启gzip的压缩
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        })
    );
  })

);