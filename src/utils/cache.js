// import storage from 'good-storage'
const TokenKey = 'Access-Token' //token
const UserInfoKey = 'User-Info' //用户信息 {} {...}
const CsrfToken = 'csrftoken'
import Cookies from "js-cookie"
export function loadToken() {
const token = Cookies.get(TokenKey)
	if (token) return token
	else return ""
}

export function saveToken(token) {
	Cookies.set(TokenKey, token, {
		expires: 1
	})
	return token
}

export function removeToken() {
	Cookies.remove(TokenKey);
	return ""
}

export function getUserInfo() {
	const userInfo = Cookies.get(UserInfoKey)
	if (userInfo) return JSON.parse(userInfo)
	else return ""

}

export function saveUserInfo(userInfo) {
	Cookies.set(UserInfoKey, userInfo, {
		expires: 1
	})
	return userInfo
}

// export function removeUserInfo() {
// 	Cookies.remove(UserInfoKey);
// 	return false
// }
export function getCsrfToken() {
	let t = Cookies.get(CsrfToken)
	if (t) return t
}
//获取手机系统
// export function loadSystem() {
// 	let u = navigator.userAgent
// 	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
// 		return true
// 	} else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
// 		return false
// 	}
// }
