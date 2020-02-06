import axios from "axios"
// import qs from 'qs'
import baseUrl from "@/config/index.js"
import store  from "@/store/index.js"
axios.defaults.headers.common['Authorization'] = `JWT `+store.getters.token;
axios.defaults.baseURL = baseUrl
axios.interceptors.request.use(function(config) {
	return config;
}, function(error) {
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
			case "delete":
				promise=axios.delete(url,data)
				break
			case "put":
				promise=axios.put(url,data)
				break;
			case "patch":
				promise=axios.patch(url,data)
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
