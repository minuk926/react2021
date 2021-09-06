module.exports = {
	presets: ['@babel/preset-env'],
	// async 사용시 : regeneratorRuntime is not defined 에러 해결
	plugins: [
		'@babel/plugin-transform-runtime'
	]
}