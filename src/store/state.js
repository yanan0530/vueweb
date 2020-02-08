import {
	loadToken,
	getUserInfo,
} from '@/utils/cache'

const state = {
	// loginStatus: loadLoginStatus(), //登录状态
	token: loadToken(), //token
	userInfo: getUserInfo(), //用户登录信息
	couponStatus: [],
	category: [],
	wareHouse: [], //配送仓库
	orderStatus: {}, //订单状态
	tabs: [{
		path: "index",
		name: "index_index",
		meta:{
			title:"首页"
		}
	}],
}
export default state
