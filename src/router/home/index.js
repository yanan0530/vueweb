export default [{
	path: "/home",
	component: () => import("@/components/main/index.js"),
	children: [{
		path: "index",
		name: "home",
		component: () => import("@/views/home/index.vue"),
		meta: {
			title: "首页",
		},
	}, {
		path: "splicing",
		name: "home_splicing",
		component: () => import("@/views/home/splicing.vue"),
		meta: {
			title: "首页",
		},
	}],
	meta: {
		title: "首页",
		sort: 0,
		show: true,
	},
}]
