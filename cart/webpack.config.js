const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode : 'development',
    devServer : {
        port : 8082,
    },
    plugins : [
        new ModuleFederationPlugin({
            name : 'cart',
            filename : "remoteEntry.js",
            // shared : ['faker'],
            shared : {
                faker : {
                    singleton : true
                }
            },
            exposes : {
                './CartShow' : './src/bootstrap',
            },
        }),
        
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
