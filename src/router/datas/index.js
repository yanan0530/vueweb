export default [{
	path: "/datas",
	name: "datas",
	redirect: {
		name: 'datas_map'
	},
	component: () => import("@/components/main/index.js"),
	children: [{
		path: "yq",
		name: "datas_yq",
		component: () => import("@/views/datas/yq.vue"),
		meta: {
			title: "疫情",
			icon: "el-icon-pie-chart"
		},
	}, {
		path: "map",
		name: "datas_map",
		component: () => import("@/views/datas/map.vue"),
		meta: {
			title: "地图",
			icon: "el-icon-pie-chart"
		},
	}],
	meta: {
		title: "数据可视化",
		sort: 6,
		show: true,
	},
}]
