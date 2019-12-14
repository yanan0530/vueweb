let baseUrl = '';
if (process.env.NODE_ENV == 'development') {
	baseUrl = '';
} else if (process.env.NODE_ENV == 'production') {
	baseUrl = 'http://apps.xiletongcheng.com:8089/qiganshop';
}
export {
	baseUrl
}
