export default [{
	path: "/taobao",
	name: "taobao",
	redirect: {
		name: 'taobao_goods'
	},
	component: () => import("@/components/main/index.js"),
	children: [{
		path: "index",
		name: "taobao_index",
		component: () => import("@/views/taobao/index.vue"),
		meta: {
			title: "店铺搜索",
			icon: "el-icon-edit-outline"
		},
	}, {
		path: "goods",
		name: "taobao_goods",
		component: () => import("@/views/taobao/goods.vue"),
		meta: {
			title: "选品库商品",
			icon: "el-icon-edit-outline"
		},
	}],
	meta: {
		title: "淘宝",
		sort: 3,
		show: true,
	},
}]
