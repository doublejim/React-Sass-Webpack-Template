var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	devtool: 'inline-source-map',
	entry: __dirname + '/app/index.js',
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
				  presets: ["react"]
				}
			},
			{ test: /\.sass$/, loader: 'style-loader!css-raw-loader!sass-loader' },
			{ test: /\.css$/, loader: 'style-loader!css-raw-loader' },
		]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/build'
	},
	plugins:
	[HTMLWebpackPluginConfig],
};