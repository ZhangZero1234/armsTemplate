let merge = require("webpack-merge");
let base = require("./webpack.base.js");
let OptimizeCSS = require("optimize-css-assets-webpack-plugin");
let Uglifyjs = require("uglifyjs-webpack-plugin");

module.exports = merge(base,{
    mode:"production",  
    optimization:{
        minimizer:[
            
            new OptimizeCSS(),
            // new Uglifyjs({cache:true})
            new Uglifyjs({
                test:/\.js$/
            })
        ],
        splitChunks:{
            cacheGroups:{
                vendor:{
                    test:/node_modules/,
                    chunks:"initial",
                    minSize:0,
                    minChunks:1
                }
            }
        }
    }
})
