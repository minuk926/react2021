const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	// 진입점 설정
	entry: './js/main.js',
	// 출력 설정
	output: {
		// 반드시 절대경로로 설정해야 한다 : __dirname - 현재경로
		path: path.resolve(__dirname, 'dist'),
		// 진입파일명 : app.js 등으로 변경 가능
		filename: 'main.js'
	},

	// css
	module: {
		rules: [
			{
				test: /\.css$/,
				// 순서가 중요 : style-loader 먼저 load
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},

	// 번들링후 결과물의 처리 방식등의 플러그인 설정
	plugins: [
		new HtmlPlugin({
			template: './index.html'
		}),
		new CopyPlugin({
			patterns: [
				{from: 'static'}
			]
		})
	],

	devServer: {
		host: 'localhost'
	}
}