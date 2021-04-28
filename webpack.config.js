// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // 将 JS 字符串生成为 style 节点
//           "style-loader",
//           // 将 CSS 转化成 CommonJS 模块
//           "css-loader",
//           // 将 Sass 编译成 CSS
//           "sass-loader",
//         ],
//       },
//     ],
//   },
// };
// 修改sass编译器loader的配置
// less: generateLoaders('less'), // 若使用全局less，替换此处
// scss: generateLoaders('sass'), // 将此处替换成下面方法
