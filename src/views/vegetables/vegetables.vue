<template>
	<div>
		<div class="btns">
			<div>
				<el-button type="primary" icon="el-icon-plus" @click="addClick">添 加</el-button>
			</div>
			<div>
				<el-button type="primary" icon="el-icon-refresh" @click="getList"></el-button>
			</div>
		</div>
		{{list}}
		<el-table :data="list" border>
			<el-table-column label="蔬菜" prop="name">
			</el-table-column>
			<el-table-column label="创建时间" prop="create_time">
			</el-table-column>
			<el-table-column label="跟新时间" prop="update_time">
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="primary" icon="el-icon-edit" @click="editClick(scope.row)" circle></el-button>
					<el-button type="primary" icon="el-icon-delete" @click="delClick(scope.row.id)" circle></el-button>
				</template>
			</el-table-column>
		</el-table>
		<x-pag ref="page" :page="page" @changesize="changesize" @changepage="changepage"></x-pag>
		<el-dialog title="添加/编辑" :visible.sync="visi" width="500px">
			<el-form :model="saveForm" label-width="80px">
				<el-form-item label="蔬菜名称">
					<el-input v-model="saveForm.name"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="visi=false">取 消</el-button>
				<el-button type="primary" @click="saveClick">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import {
		vegetablesListApi,
		vegetablesUpdateApi,
		vegetablesCreateApi,
		vegetablesDeleteApi
	} from "@/api/vegetables.js"
	import xPag from "@/components/pagination/index.vue"
	export default {
		components: {
			xPag
		},
		watch: {
			visi(newValue, oldValue) {
				if(oldValue){
					this.getList()
					this.saveForm={
						
					}
				}
			}
		},
		data() {
			return {
				visi: false,
				list: [],
				page: {
					total: 0, // 总页数
					page: 1, // 当前页数
					size: 10 // 每页显示多少条
				},
				saveForm: {
				}
			}
		},
		mounted() {
			this.getList()
		},
		methods: {
			getList() {
				vegetablesListApi(this.page).then(res => {
					let data = res.data
					console.info(data)
					this.list = data.results
					this.page.total = data.count
				})
			},
			changesize(val) {
				this.$set(this.page, "size", val)
				this.getList()
			},
			changepage(val) {
				this.$set(this.page, "page", val)
				this.getList()
			},
			addClick() {
				this.visi = true
			},
			editClick(row){
				this.visi=true
				this.saveForm=Object.assign({},row)
			},
			saveClick() {
				let data = Object.assign({}, this.saveForm)
				let saveApi
				if (data.id) {
					saveApi = vegetablesUpdateApi(data)
				} else {
					saveApi = vegetablesCreateApi(data)
				}
				saveApi.then(res => {
					if(res.status==201||res.status==200){
						this.$message.success("操作成功")
					}
				}).then(()=>{
					this.visi=false
				})
			},
			delClick(id){
				this.$confirm("确定要删除当前蔬菜分类么?").then(()=>{
					vegetablesDeleteApi(id).then(res=>{
						this.$message.success("删除成功")
						this.getList()
					})
				})
			}
		}
	}
</script>

<style>
</style>
