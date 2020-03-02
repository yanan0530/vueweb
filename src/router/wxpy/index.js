export default [{
	path: "/wxpy",
	name: "wxpy",
	redirect: {
		name: 'wxpy_index'
	},
	component: () => import("@/components/main/index.js"),
	children: [{
		path: "list",
		name: "wxpy_index",
		component: () => import("@/views/wxpy/index.vue"),
		meta: {
			title: "微信",
			icon: "el-icon-edit-outline"
		},
	}, ],
	meta: {
		title: "微信",
		sort: 3,
		show: true,
	},
}]
