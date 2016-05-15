const webpack = require('webpack');

module.exports = {
    entry: {
        abstractFactory_structures:'./source/abstractFactory/structures/Client.ts',
        abstractFactory_eg_pizza:'./source/abstractFactory/examples/pizza/PizzaClient.ts',
    },
    output: {
        path: './target',
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}