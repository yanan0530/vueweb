import * as types from '@/store/mutationTypes'

const mutations = {
	[types.SET_USERINFO](state, userInfo) {
		state.userInfo = userInfo
	},
	[types.SET_TOKEN](state, token) {
		state.token = token
	},
	// [types.SET_COUPONSTATUS](state, status) {
	// 	state.couponStatus = status
	// },
	// [types.CATEGORY](state, category) {
	// 	state.category = category
	// },
	// [types.WAREHOUSE](state, query) {
	// 	state.wareHouse = query
	// },
	// [types.ORDERSTATUS](state, query) {
	// 	state.orderStatus = query
	// },
}

export default mutations
