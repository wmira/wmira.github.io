var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var cssvars = require('reactor-ui/cssvars');
var autoprefixer = require('autoprefixer');
var vars = require('postcss-simple-vars');
var varsFunc = () => {
    return cssvars;
};


var plugins = [];


module.exports = {
    devtool: 'source-map',

    plugins: plugins,

    module: {
        loaders: [
            { test: /\.css$/,loader: 'style-loader!css-loader?localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'},
            {test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    },
    postcss: function () {
        return [vars({ variables: varsFunc, silent: true}), autoprefixer];
    },

    resolve: {
        alias: {
            react: __dirname + '/node_modules/react'
        }
    }
};
