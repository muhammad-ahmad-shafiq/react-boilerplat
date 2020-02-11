const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const common = {
	entry: './src',
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
	],
	module: {
		rules: [
			// Load JS
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader'
			},
			// Load Stylesheets
			{
				test: /\.(sa|sc|c)ss$/,
				include: path.resolve(__dirname, 'src/assets/styles'),
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // Load images
			{
				test: /\.(png|svg|jpg|gif)$/,
				include: path.resolve(__dirname, 'src/assets/images'),
        use: ['file-loader']
			}
		]
	},
}

module.exports = (_env, options) => {
	const envConfig = options.mode === 'production' ? prodConfig : devConfig;

	return merge(common, envConfig);
}
