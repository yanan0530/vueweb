import axios from "axios"
// import qs from 'qs'
// import * as comUrl from "@/config/index.js"
// console.info(comUrl.baseUrl)
axios.defaults.baseURL = 'http://127.0.0.1:8000'
// axios.interceptors.request.use(function(config) {
// 	return config;
// }, function(error) {
// 	return Promise.reject(error);
// });
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
			resolve(res)
		}).catch(error => {
			reject(error)
		})
	})
}
