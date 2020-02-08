import * as types from '@/store/mutationTypes'

const mutations = {
	[types.SET_USERINFO](state, userInfo) {
		state.userInfo = userInfo
	},
	[types.SET_TOKEN](state, token) {
		state.token = token
	},
	[types.SET_TABS](state, data) {
		state.tabs.push(data)
	},
	DEL_TABS(state, index) {
		state.tabs.splice(index,1)
	}
}

export default mutations
