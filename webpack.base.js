let path = require("path");
let HtmlWebpackPlugn = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
console.log(process.env.NODE_ENV)
let isDev = process.env.NODE_ENV === "development";
module.exports = {
    devServer:{
        hot:true,
        compress:!isDev
    },
    entry:path.resolve(__dirname,"src/main.js"),
    output:{
        filename:"js/[name][hash:8].js",
        path:path.resolve(__dirname,"dist")
    },
    plugins:[
        new HtmlWebpackPlugn({
            template:path.resolve(__dirname,"./index.html"),
            filename:"index.html",
            minify:{
                collapseWhitespace:!isDev
            }
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/main[contenthash:8].css'
        }),
       new webpack.NamedModulesPlugin(),
       new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader",
                options:{
                    extractCSS:true,
                    hotReload:isDev
                }
            },
            {
                test:/\.scss$/,
                use:[MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
            },
            {
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:["@babel/preset-env"]
                        }
                    }
            ],
            }
        ]
    }
}
