export default [{
	path: "/excel",
	component: () => import("@/components/main/index.js"),
	children: [{
		path: "",
		name: "excel_index",
		component: () => import("@/views/excel/index.vue"),
		meta: {
			title: "首页",
		},
	}, {
		path: "splicing",
		name: "excel_splicing",
		component: () => import("@/views/excel/splicing.vue"),
		meta: {
			title: "首页",
		},
	}],
	meta: {
		// title: "首页",
		// sort: 0,
		// show: true,
	},
}]
