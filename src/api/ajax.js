import axios from "axios"
// import qs from 'qs'
// import baseUrl from "@/config/index.js"
// axios.defaults.baseURL = baseUrl
// import store from '@/store'

axios.interceptors.request.use(function(config) {
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

export default function ajax(url, data = {}, type = "GET") {
	return new Promise(function(resolve, reject) {
		let promise
		switch (type) {
			case "GET":
				var dataStr = '';
				Object.keys(data).forEach(key => {
					dataStr += key + '=' + data[key] + '&'
				})
				if (dataStr !== '') {
					dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
					url = url + '?' + dataStr
				}
				promise = axios.get(url)
				break;
			default:
				promise = axios.post(url, data)
				break;
		}
		promise.then(res => {
			resolve(res.data)
		}).catch(error => {
			reject(error)
		})
	})
}
