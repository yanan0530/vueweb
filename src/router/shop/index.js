export default [{
	path: "/shop",
	name: "shop",
	redirect: { name: 'shop_banner' },
	component: () => import("@/components/main/index.js"),
	children: [{
		path:"banner",
		name:"shop_banner",
		component:()=>import("@/views/shop/banner/banner.vue"),
		meta:{
			title:"轮播图"
		}
	},{
		path: "categroy",
		name: "shop_categroy",
		component: () => import("@/views/shop/categroy/categroy.vue"),
		meta: {
			title: "商品分类",
		},
	}, {
		path: "goods",
		name: "shop_goods",
		component: () => import("@/views/shop/goods/GoodsIndex.vue"),
		meta: {
			title: "商品管理",
		},
	},{
		path: "order",
		name: "shop_order",
		component: () => import("@/views/shop/order/order.vue"),
		meta: {
			title: "订单管理",
		},
	}],
	meta: {
		title: "商城",
		sort: 2,
		show: true,
	},
}]
