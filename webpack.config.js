/**
 @Author：Wyunfei
 @Date：2019/3/1/18:44
 @FileName: webpack.config.js
 */
const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');  // webpack 4版本之后加的，之前的版本不需要这个
let isDev = '';

let config = {
    target: 'web',
    entry: Path.resolve(__dirname, './src/index.js'), // 以join拼接path的形式配置绝对路径,相对路径打包后找不到会报错
    output: {
        filename: 'vendor.build.js',
        path: Path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 1024, // 判断图片的大小   如果小于1024就会转换成base64
                    name: '[name].[ext]' // 输出图片的名字  ext是扩展名
                }
            }
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new Webpack.DefinePlugin({
            'process-env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html' //以当前目录下的index.html文件为模板生成dist/index.html文件
        })
    ]
};

if (isDev) {
    config.devServer = {
        port: 8089, // webpack服务需要监听的端口号
        host: '0.0.0.0', // 可以通过本机内网ip访问,这样别人也可以访问,手机也可访问,如果设置成localhost则不然
        overlay: {
            errors: true // 这个可有可无,webpack编译出现的错误会出现在网页中,便于更改
        }
    };
}

module.exports = config;
