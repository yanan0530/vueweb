export default [{
	path: "/vegetables",
	name: "vegetables_vegetables",
	redirect: {
		name: 'vegetables'
	},
	component: () => import("@/components/main/index.js"),
	children: [{
			path: "vegetables",
			name: "vegetables_vegetables",
			component: () => import("@/views/vegetables/vegetables.vue"),
			meta: {
				title: "蔬菜类目",
				icon: "el-icon-edit-outline"
			},
		},
		{
			path: "plant",
			name: "vegetables_plant",
			component: () => import("@/views/vegetables/plant.vue"),
			meta: {
				title: "种植计划",
				icon: "el-icon-edit-outline"
			}
		},{
			path:"jobtype",
			name:"vegetables_jobtype",
			component:()=>import("@/views/vegetables/JobType.vue"),
			meta:{
				title:"工作内容",
				icon:"el-icon-edit-outline"
			}
		},{
			path:"dayrecord",
			name:"vegetables_dayrecord",
			component:()=>import("@/views/vegetables/DayRecord.vue"),
			meta:{
				title:"日志",
				icon:"el-icon-edit-outline"
			}
		}, {
			path:"income",
			name:"vegetables_income",
			component:()=>import("@/views/vegetables/Income.vue"),
			meta:{
				title:"收入流水",
				icon:"el-icon-edit-outline"
			}
		},{
			path:"costtype",
			name:"vegetables_costtype",
			component:()=>import("@/views/vegetables/CostType.vue"),
			meta:{
				title:"支出类型",
				icon:"el-icon-edit-outline"
			}
		},{
			path:"cost",
			name:"vegetables_cost",
			component:()=>import("@/views/vegetables/Cost.vue"),
			meta:{
				title:"支出流水",
				icon:"el-icon-edit-outline"
			}
		},
	],
	meta: {
		title: "蔬菜种植",
		sort: 2,
		show: true,
	},
}]
