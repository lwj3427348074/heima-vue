// const path = requir('path')

//使用Node.js中的导出语法,向外导出一个webpack的配置对象
module.exports = {
    //代表webpack运行的模式,可选值有两个 development 和 production
    mode: 'development',

    // // entry: 指定要处理那个文件
    // entry: path.resolve(__dirname, './src/index.js'),

    // //output:指定生成的文件要存放在哪里
    // output: {
    //     //存放的目录
    //     path: path.resolve(__dirname, 'dist'),
    //     //生成的文件名
    //     filename: 'main.js'
    // }
}