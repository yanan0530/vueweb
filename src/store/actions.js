import * as types from './mutationTypes'
// import { loginByCode } from '../api/wechatAuth'
import {
	saveToken,
	saveUserInfo,
} from '@/utils/cache'


//保存用户个人信息
export const setUserInfo = function({
	commit
}, query) {
	commit(types.SET_USERINFO, saveUserInfo(query))
}
export const setToken = function({
	commit
}, query) {
	commit(types.SET_TOKEN, saveToken(query))
}

// export const setCouponStatus = function({
// 	commit
// }, query) {
// 	commit(types.SET_COUPONSTATUS, query)
// }
// export const setCategory = function({
// 	commit
// }, query) {
// 	commit(types.CATEGORY, query)
// }
// export const setWareHouse = function({
// 	commit
// }, query) {
// 	commit(types.WAREHOUSE, query)
// }

// export const setOrderStatus = function({
// 	commit
// }, query) {
// 	commit(types.ORDERSTATUS, query)
// }

//设置openid
// export const setOpenId = function({
// 	commit,
// 	state
// }, query) {
// 	commit(types.SET_OPEN_ID, saveOpenId(query))
// }
//
