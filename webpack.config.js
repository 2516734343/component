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
    resolve: {extensions: ['.js', '.jsx', '.less', '.css', '.json',]},
    module: {
        rules: [
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader?modules' // 写法1
                // loader: "style-loader!css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]",
                use: [ // 写法2
                    {
                        loader: "style-loader",
                        options: {
                            esModule: true, // 开启es模块的语法
                            modules: {
                                namedExport: false,//本地环境启用/禁用 export 的 ES 模块。
                            },

                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                localIdentContext: path.resolve(__dirname, "src"),
                            },
                            importLoaders: 2,
                            esModule: true,
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]---[local]---[hash:base64:5]'
                            },
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            }
                        },
                    },
                ]
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
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
            '/api': "https://open.duyiedu.com", // 配置代理
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: 'public/index.html'
        }),
    ]
}
