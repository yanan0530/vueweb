export default [{
	path: "/excel",
	name:"excel",
	redirect: { name: 'excel_index' },
	component: () => import("@/components/main/index.js"),
	children: [{
		path: "index",
		name: "excel_index",
		component: () => import("@/views/excel/index.vue"),
		meta: {
			title: "表格导入",
		},
	}, {
		path: "splicing",
		name: "excel_splicing",
		component: () => import("@/views/excel/splicing.vue"),
		meta: {
			title: "列拼接字符串",
		},
	}],
	meta: {
		title: "表单",
		sort: 3,
		show: true,
	},
}]
