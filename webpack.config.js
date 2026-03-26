const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, 
    },
    
    module: {
        rules: [
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
              },
            ],
          },
          {
            test: /\.(png|jpg|gif)$/i,
            type: 'asset/resource',
    
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', ],
          },    
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
          template: './src/index.html',
          filename: 'index.html',
        }),
        new MiniCssExtractPlugin(),
        new ESLintPlugin({
            extensions: ['js'],
            failOnError: false,    // Не останавливать сборку при ошибках
            failOnWarning: false,  // Не останавливать при предупреждениях
            emitError: true,       // Показывать ошибки в консоли
            emitWarning: true,     // Показывать предупреждения в консоли
            // Для ESLint 9 указываем тип конфигурации
            configType: 'flat',    // 👈 Важно для ESLint 9
          }),
    ],

    devServer: {
        static: './dist',
        hot: true,
        port: 3000,
        open: true,
    },
};