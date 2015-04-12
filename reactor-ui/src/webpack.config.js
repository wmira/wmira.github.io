var webpack = require('webpack');


var plugins = [

];

if (process.env.COMPRESS) {

    plugins.push(

        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    );
}

module.exports = {

    node: {
        buffer: false
    },

    plugins: plugins,

    module: {
        loaders: [
            { test: /\.js$/,  loader: "babel-loader"}
        ]
    }

};
