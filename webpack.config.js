const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'dist/',
	},

	module: {
		rules: [
			{
				test: /\.jsx?/,
				loader: 'babel-loader',
			},
			{
				test: /\.svg/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
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