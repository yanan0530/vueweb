<template>
	<div>
		<el-button style="margin-bottom: 20px;" icon="el-icon-edit-outline" @click="savevisi=true">写日志</el-button>
		<el-table :data="list">
			<el-table-column prop="title" label="日志"></el-table-column>
			<el-table-column prop="add_time" label="创建时间"></el-table-column>
			<el-table-column prop="update" label="完成时间"></el-table-column>
			<el-table-column label="状态">
				<template slot-scope="scope">
					<el-switch v-model="scope.row.status" @change="updateStatus(scope.row)"></el-switch>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button @click="updateClick(scope.row)">编辑</el-button>
					<el-button @click="delTodosTody(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog :visible.sync="savevisi" title="添加/编辑日志">
			<el-form :model="saveForm">
				<el-form-item label="日计划">
					<el-input v-model="saveForm.title"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="savevisi=false">取 消</el-button>
				<el-button @click="saveToday()">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import {
		listTodosTodayApi,
		addTodosTodayApi,
		updateTodosTodayApi,
		delTodosTodyApi
	} from "@/api/todos.js"
	import {dateFormat} from "@/utils/date.js"
	export default {
		watch: {
			savevisi(newValue) {
				if (!newValue) {
					this.saveForm = {
						title: ""
					}
				}
			}
		},
		data() {
			return {
				list: [],
				savevisi: false,
				saveForm: {
					title: ""
				}
			}
		},
		mounted() {
			this.listTodosToday()
		},
		methods: {
			listTodosToday() {
				listTodosTodayApi().then(res => {
					this.list = res.data
				})
			},
			updateTodosToday(data) {
				updateTodosTodayApi(data).then(res => {
					if (res.status == 200) {
						this.savevisi = false
						this.listTodosToday()
						this.$message.success("修改成功")
					}
				})
			},
			updateClick(row) {
				this.saveForm.id = row.id
				this.saveForm.title = row.title
				this.savevisi = true
			},
			saveToday() {
				if (this.saveForm.title == "") {
					this.$message.error("内容不允许为空")
				}
				if (this.saveForm.id == undefined) {
					let data=this.saveForm
					data.add_time=dateFormat(new Date())
					addTodosTodayApi(data).then((res) => {
						if (res.status == 201) {
							this.$message.success("添加成功")
							this.listTodosToday()
							this.savevisi = false
						}
					})
				} else {
					this.updateTodosToday(this.saveForm)
				}
			},
			delTodosTody(row) {
				delTodosTodyApi(row.id).then(res => {
					if (res.status == 204) {
						this.$message.success("删除成功")
						this.listTodosToday()
					}
				})
			},
			updateStatus(row) {
				let data = Object.assign({},row)
				data.update = dateFormat(new Date())
				updateTodosTodayApi(data).then(res => {
					this.listTodosToday()
				})
			}
		}
	}
</script>

<style>
</style>
