// 这个文件是vue-cli创建出来的项目配置文件
// 在vue.config.js这个配置文件中,可以对整个项目的打包,构建进行全局性的配置

// webpack在进行打包的时候,底层用到了node.js
// 因此,在vue.config.js配置文件中,可以导入并使用node.js中的核心模块

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
