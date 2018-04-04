// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');
const webpack = require('webpack');

module.exports = {
    // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
    mode: 'development',
    entry: {
        app: path.join(__dirname, "src/js/app.js"),
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 1972,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },{
                        loader: "css-loader" // translates CSS into CommonJS
                    },{
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ],
    }
};


