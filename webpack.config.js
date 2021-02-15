const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
    entry: 'src/index.tsx',
    output: {
        filename: pkg.main,
        path: path.join(__dirname, 'dist'),
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '.jsx' ,'.tsx'],
        plugins: [
            new TsconfigPathsPlugin({ configFile: './tsconfig.json'})
        ]
    },
    module: {
        rules: [{
            enforce: "pre",
            test: /\.js$/,
            loader: 'source-map-loader'
        }, {
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }, {
            test: /\.scss$/,
            use: ['style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        mode: 'local',
                        localIdentName: '[local]--[hash:base64:5]',
                    }
                }
            }, {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        require('postcss-short'),
                        require('autoprefixer')
                    ]
                }
            }, {
                loader: 'sass-loader'
            }]
        }]
    },
    plugins: []
};
