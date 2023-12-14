module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // when we import file that ends in '.mjs' ir just '.js' we want it to be processed by babel
                exclude: /node_modules/, // do not try to run babel on node module directory
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'], // preset-react converts jsx, preset-env take es15 es16 syntax to es5
                        plugins: ['@babel/plugin-transform-runtime'], // add additional code to enable feature such as 'asych' and 'await' syntax.
                    }
                }

            }
        ]
    }
}
