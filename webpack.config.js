const webpack = require('webpack');

module.exports = {
    entry: {
        abstractFactory_structures:'./source/creational/abstractFactory/structure/Client.ts',
        abstractFactory_eg_pizza:'./source/creational/abstractFactory/examples/pizza/PizzaClient.ts',
        singleton_structure: './source/creational/singleton/structure/Singleton.ts',
        builder_structure: './source/creational/builder/structure/Client.ts',
        factoryMethod_structure: './source/creational/factoryMethod/structure/Client.ts',
        prototype_structure: './source/creational/prototype/structure/Client.ts',
        adapter_structure: './source/structural/adapter/structure/Client.ts',
        bridge_structure: './source/structural/bridge/structure/Client.ts'
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