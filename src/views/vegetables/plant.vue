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
		{{list[0]}}
		<el-table :data="list" border>
			<el-table-column label="种植时间" prop="plant_time"></el-table-column>
			<el-table-column label="蔬菜" prop="vegetables_name">
			</el-table-column>
			<el-table-column label="种植面积" prop="area">
			</el-table-column>
			<el-table-column label="收入">
				<template slot-scope="scope">
					{{scope.row.income_moneys.moneys__sum}}元
				</template>
			</el-table-column>
			<el-table-column label="产量">
				<template slot-scope="scope">
					{{scope.row.income_weight.weight__sum}}斤
				</template>
			</el-table-column>
			<el-table-column label="备注" prop="remark">
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
				<el-form-item label="种植蔬菜">
					<el-select v-model="saveForm.vegetables" style="width: 100%;" clearable>
						<vegetables-dict></vegetables-dict>
					</el-select>
				</el-form-item>
				<el-form-item label="种植面积">
					<el-input v-model.number="saveForm.area" clearable></el-input>
				</el-form-item>
				<el-form-item label="开始时间">
					<el-date-picker type="date" v-model="saveForm.plant_time" style="width: 100%;" clearable value-format="yyyy-MM-dd"></el-date-picker>
				</el-form-item>
				<el-form-item label="备注">
					<el-input v-model="saveForm.remark" type="textarea" maxlength="200" show-word-limit></el-input>
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
		plantListApi,
		plantUpdateApi,
		plantCreateApi,
		plantDeleteApi
	} from "@/api/vegetables.js"
	import VegetablesDict  from "@/components/dict/VegetablesDict.vue"
	import xPag from "@/components/pagination/index.vue"
	export default {
		components: {
			xPag,VegetablesDict
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
					
				},
				vegetables:[]
			}
		},
		mounted() {
			this.getList()
		},
		methods: {
			getList() {
				plantListApi(this.page).then(res => {
					let data = res.data
					this.list = data.results
					this.page.total = data.count
				})
				
			},
			init(){
				vegetablesDictApi().then(res=>{
					console.info(res)
					this.vegetables=res.data
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
					saveApi = plantUpdateApi(data)
				} else {
					saveApi = plantCreateApi(data)
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
					plantDeleteApi(id).then(res=>{
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
