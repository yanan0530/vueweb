export default [{
	path: "/index",
	name: "index",
	redirect: {
		name: 'index_index'
	},
	component: () => import("@/components/main/index.js"),
	children: [{
		path: "index",
		name: "index_index",
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
