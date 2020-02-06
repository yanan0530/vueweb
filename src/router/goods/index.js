export default [{
	path: "/goods",
	name: "goods",
	redirect: { name: 'goods_list' },
	component: () => import("@/components/main/index.js"),
	children: [{
		path: "list",
		name: "goods_list",
		component: () => import("@/views/goods/GoodsList.vue"),
		meta: {
			title: "首页",
		},
	}, {
		path: "detail",
		name: "goods_detail",
		component: () => import("@/views/goods/GoodsDetail.vue"),
		meta: {
			title: "详情",
		},
	}],
	meta: {
		title: "商城",
		sort: 2,
		show: true,
	},
}]
