export default [{
	path: "/index",
	component: () => import("@/components/main/index.js"),
	children: [{
		path: "",
		name: "index",
		component: () => import("@/views/home/index.vue"),
		meta: {
			title: "首页",
		},
	}],
	meta: {
		title: "首页",
		sort: 0,
		show: false,
	},
}]
