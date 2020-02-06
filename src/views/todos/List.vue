<template>
	<div>
		<el-table :data="list" border>
			<el-table-column label="Id" prop="id"></el-table-column>
			<el-table-column label="日记" prop="title"></el-table-column>
			<el-table-column label="添加时间" prop="add_time"></el-table-column>
			<el-table-column label="完成时间" prop="update"></el-table-column>
		</el-table>
	</div>
</template>

<script>
	import {
		todosListAllApi
	} from "@/api/todos.js"
	export default {
		data() {
			return {
				list: [],
				page: {
					total: 0, // 总页数
					page: 1, // 当前页数
					size: 10 // 每页显示多少条
				},
			}
		},
		mounted() {
			this.getList()
		},
		methods: {
			getList() {
				todosListAllApi().then(res => {
					let data = res.data
					console.info(data.results)
					this.list = data.results
					this.page.total = data.count
				})
			}
		}
	}
</script>

<style>
</style>
