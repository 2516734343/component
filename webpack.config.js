const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'inline-source-map',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {extensions: ['.js', '.jsx', '.css', '.less', '.json', ]},
    module: {
        rules: [{
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            loader: ['style-loader', 'css-loader', 'sass-loader']
        },
        //     {
        //     test: /\.less$/,
        //     use: [
        //         {
        //             loader: 'css-loader',
        //             options: {
        //                 modules: {
        //                     localIdentName: '[path][name]---[local]---[hash:base64:5]'
        //                 },
        //                 // importLoaders: 1,
        //             }
        //         },
        //         {
        //             loader: 'less-loader',
        //             // options: {
        //             //     // javascriptEnabled: true,
        //             // }
        //         }
        //     ]
        // },

            // Less 解析配置
            {
                test: /\.less$/,
                exclude: lessModuleRegex,
                use: getStyleLoaders(
                    {
                        importLoaders: 2,
                        sourceMap: isEnvProduction && shouldUseSourceMap,
                        modules: true,//开启
                    },
                    'less-loader'
                ),
                sideEffects: true,
            },
            {
                test: lessModuleRegex,
                use: getStyleLoaders(
                    {
                        importLoaders: 2,
                        sourceMap: isEnvProduction && shouldUseSourceMap,
                        modules: true,
                        getLocalIdent: getCSSModuleLocalIdent,
                    },
                    'less-loader'
                )
            },
            {
            test: /\.(png|svg|jpg|gif|ico)$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devServer: {
        port: 3003,
        host: '0.0.0.0',
        hot: true,
        open: true,
        proxy: {
            '/api': "https://open.duyiedu.com",
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: 'public/index.html'
        }),
    ]
}
