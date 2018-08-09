import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    entry: path.join(__dirname, './client/src/'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './client/dist/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, './client/src/'),
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.join(__dirname, './client/src/style')]
                        }
                    }]
                })
            },
            {
                test: /\.(?:png|jpg|svg)$/,
                loader: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [' ', '.js', '.scss'],
        alias: {
            components: path.resolve(__dirname, './client/src/components')
        }
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};