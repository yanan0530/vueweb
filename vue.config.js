module.exports = {
	lintOnSave: false,
	productionSourceMap: false,
	devServer: {
		port: 9000,
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8000',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			},
		}
	},
	chainWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			if (process.env.npm_config_report) {
				config
					.plugin('webpack-bundle-analyzer')
					.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
					.end();
				config.plugins.delete('prefetch')
			}
		}
	}
}
