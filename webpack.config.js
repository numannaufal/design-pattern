const webpack = require('webpack');

module.exports = {
    entry: {
        abstractFactory_structures:'./source/abstractFactory/structure/Client.ts',
        abstractFactory_eg_pizza:'./source/abstractFactory/examples/pizza/PizzaClient.ts',
        singleton_structure: './source/singleton/structure/Singleton.ts'
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