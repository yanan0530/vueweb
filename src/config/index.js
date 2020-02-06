let baseUrl = '';
if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://127.0.0.1:8000';
} else if (process.env.NODE_ENV == 'production') {
	baseUrl = 'https://api.yananie.com';
}
export default baseUrl
