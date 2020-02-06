module.exports = {
	lintOnSave: false,
	productionSourceMap: false,
	devServer: {
		// port: 9000,
		// proxy: {
		// 	'/ug': {
		// 		target: 'https://c.m.163.com',
		// 		changeOrigin: true,
		// 		pathRewrite: {
		// 			'^/ug': '/'
		// 		}
		// 	},
		// }
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
