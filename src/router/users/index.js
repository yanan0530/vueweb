export default [{
	path: "/user",
	name:"user",
	redirect: { name: 'user_index' },
	component: () => import("@/components/main/index.js"),
	children: [{
			path: "index",
			name: "user_index",
			component: () => import("@/views/users/Index.vue"),
			meta: {
				title: "会员信息",
			}
		},
		// {
		// 	path: "favs",
		// 	name: "user_favs",
		// 	component: () => import("@/views/users/Favs.vue"),
		// 	meta: {
		// 		title: "用户收藏"
		// 	}
		// },
		// {
		// 	path: "message",
		// 	name: "user_message",
		// 	component: () => import("@/views/users/Messages.vue"),
		// 	meta: {
		// 		title: "留言"
		// 	}
		// },
		// {
		// 	path: "shopcart",
		// 	name: "user_shopcart",
		// 	component: () => import("@/views/users/ShopCart.vue"),
		// 	meta: {
		// 		title: "购物车"
		// 	}
		// },
		// {
		// 	path: "order",
		// 	name: "user_order",
		// 	component: () => import("@/views/users/Order.vue"),
		// 	meta: {
		// 		title: "订单中心"
		// 	}
		// }
	],
	meta: {
		title: "会员中心",
		sort: 10,
		show: true,
	},
}]
