let baseUrl = '';
if (process.env.NODE_ENV == 'development') {
	baseUrl = 'api/';
} else if (process.env.NODE_ENV == 'production') {
	baseUrl = 'http://api.yananie.com/';
}
export {
	baseUrl
}
