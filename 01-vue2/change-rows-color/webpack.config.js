//webpack是打包工具

//webpack-cli是webpack的命令行接口

//webpack-dev-server是一个小型Express工具,自动刷新和热切换

//html-webpack-plugin:复制src里的index.html复制到根目录,页面自动进入index.html

//loader:webpack默认只能处理.js文件,loader用来导入非.js文件

//style-loader和css-loader:
//webpack 把index.css这个文件，先转交给最后一个loader 进行处理(先转交给css-loader)
//当css - loader处理完毕之后，会把处理的结果，转交给下一个loader(转交给style - loader)
//当style - loader处理完毕之后，发现没有下一个loader了，于是就把处理的结果，转交给了webpack
//webpack把style - loader处理的结果，合并到 / dist / bundlejs中，最终生成打包好的文件。

//less-loader和less:less-loader依赖于less,所以不用手动声明

//url-loader和file-loader

//babel-loader , babel/core 和 babel/plugin-proposal-decorators :用来处理高级js

//clean-webpack-plugin:自动清理掉dist目录中的旧文件


const path = require('path')
//1.导入html-webpack-plugin这个插件,得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
//2.new构造函数,创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    //指定要复制哪个页面
    template: './src/index.html',
    //指定复制出来的文件名和存放路径
    filename: './index.html'
})

//左侧的{}是解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


//使用Node.js中的导出语法,向外导出一个webpack的配置对象
module.exports = {
    //Source Map定位原代码行数
    //在开发调试阶段,建议大家都把devtool的值设置为eval-source-map
    // devtool: 'eval-source-map',

    //在实际发布的时候,建议大家都把devtool的值设置为nosources-source-map或者直接关闭source map
    devtool: 'nosources-source-map',

    //代表webpack运行的模式,可选值有两个 development 和 production,webpack里面设置的优先级更高
    // mode: 'development',

    // entry: 指定要处理那个文件
    entry: path.join(__dirname, './src/index1.js'),

    //output:指定生成的文件要存放在哪里
    output: {
        //存放的目录
        path: path.resolve(__dirname, 'dist'),
        //生成的文件名
        filename: 'js/bundle.js'
    },

    //Cannot GET/ 配置
    // devServer: {
    //     static: './src',
    // },

    //3.插件的数组,将来webpack在运行时,会加载并调用这些插件
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    //devServer节点,
    devServer: {
        //自动打开浏览器
        open: true,
        //域名
        host: '127.0.0.1',
        //端口号
        port: 80
    },

    module: {
        rules: [
            //定义了不同模块对应的loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //处理 .less文件的loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //处理 图片文件的loader,?limit=设置文件大小,大于=>原图片,小于=>base64,outputPath输出路径
            //在配置url-loader的时候,多个参数直接使用&符号进行分隔
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=500&outputPath=images' },
            //使用babel-loader处理高级的js语法 ,排除node_modules目录中的js文件
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    }
}