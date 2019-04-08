const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.jsx?/,
				loader: 'babel-loader',
			},
			{
				test: /\.json/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]',
					}
				}],

			}
		]
	},

	// devServer: {
	// 	contentBase: path.join(__dirname, 'dist'),
	// 	watchContentBase: true,

	// 	compress: true,
	// 	port: 5000,
	// },
}