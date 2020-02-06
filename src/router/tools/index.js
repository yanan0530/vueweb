export default [{
	path: "/todos",
	name: "todos",
	redirect: {
		name: 'todos_today'
	},
	component: () => import("@/components/main/index.js"),
	children: [{
			path: "today",
			name: "todos_today",
			component: () => import("@/views/todos/TodosToday.vue"),
			meta: {
				title: "写日志",
				icon:"el-icon-edit-outline"
			},
		},
		{
			path: "list",
			name: "todos_list",
			component: () => import("@/views/todos/List.vue"),
			meta: {
				title: "我的日志",
				icon:"el-icon-document"
			},
		}
	],
	meta: {
		title: "日志",
		sort: 2,
		show: true,
	},
}]
