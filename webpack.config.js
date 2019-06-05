const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var htmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, './src/main.js'), //表示要使用webpack打包哪个文件
    output: {
        path: path.join(__dirname, "./dist"), //制定打包好的文件
        filename: 'bundle.js' //指定输出的文件名称
    },
    plugins: [
        new htmlWebPackPlugin({
            template: path.join(__dirname, './src/index.html'), //模板文件路径
            filename: 'index.html' //设置生成的内存页面名称
        }),
        new VueLoaderPlugin()
    ],
    mode: 'development', // 设置mode
    module: {
        /* 这个节点用于配置所有的第三方模块加载器 */
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
            {
                test: /\.(jpg|png|gif|bmg|jpeg)$/,
                use: 'url-loader'
            }, {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.vue$/,
                use: 'vue-loader' //处理vue文件的loader
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ] //所有第三方模块的规则
    },
    /* 设置vue被导入时候包的路径 */
    resolve: {
        alias: {
            "vue$": 'vue/dist/vue.js',
            "mui": './src/lib/mui/js/mui.js',
        }
    }

}