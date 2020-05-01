<template>
	<div>
		<div class="btns">
			<div>
				<el-button type="primary" icon="el-icon-plus" @click="addCate">添 加</el-button>
			</div>
			<div>
				<el-button type="primary" icon="el-icon-refresh" @click="categoryList"></el-button>
			</div>
		</div>
		<el-table :data="categroyList" row-key="id" >
			<!-- <el-table-column label="Id" prop="id"></el-table-column> -->
			<!-- <el-table-column label="分类级别" prop="category_type"></el-table-column> -->
			<el-table-column label="分类编号" prop="code"></el-table-column>
			<el-table-column label="分类名称" prop="name"></el-table-column>
			<el-table-column label="类别描述" prop="desc"></el-table-column>
			<el-table-column label="添加时间" prop="add_time"></el-table-column>
			<el-table-column label="是否导航" prop="is_tab"></el-table-column>
			<el-table-column label="图片地址" prop="image"></el-table-column>
			<el-table-column label="父级分类" prop="title"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button v-if="scope.row.category_type<3" size="mini" type="primary" icon="el-icon-plus" @click="addCates(scope.row)" circle></el-button>
					<el-button type="primary" icon="el-icon-edit" size="mini" @click="editClick(scope.row)" circle></el-button>
					<el-button v-if="scope.row.children && scope.row.children.length==0 ||scope.row.category_type==3" size="mini" type="primary" icon="el-icon-delete" circle @click="delClick(scope.row)"></el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog title="添加编辑 商品分类" :visible.sync="visi" width="500px">
			<el-form :model="saveForm" label-width="120px">
				<el-form-item label="分类级别">
					<el-select v-model="saveForm.category_type" type="number" disabled>
						<el-option label="一级类目" :value="1"></el-option>
						<el-option label="二级类目" :value="2"></el-option>
						<el-option label="三级类目" :value="3"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="父级分类" v-if="saveForm.category_type != 1">
					<el-input v-model="saveForm.parent_name" disabled></el-input>
				</el-form-item>
				<el-form-item label="分类编号">
					<el-input v-model="saveForm.code"></el-input>
				</el-form-item>
				<el-form-item label="分类名称">
					<el-input v-model="saveForm.name"></el-input>
				</el-form-item>
				<el-form-item label="类别描述">
					<el-input v-model="saveForm.desc"></el-input>
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
		categoryAddApi,
		categoryListApi,
		categoryEditApi,
		categoryDelApi
	} from "@/api/shop.js"
	export default {
		watch: {
			visi(newValue) {
				if(!newValue){
					this.saveForm={
						parent_category: null
					}
				}
			}
		},
		computed:{
			categroyList(){
				let arr=this.list.filter(item=>item.category_type==1)
				let arr2=this.list.filter(item=>item.category_type==2)
				let arr3=this.list.filter(item=>item.category_type==3)
				arr2=arr2.map(item=>{
					item.children= arr3.filter(i=>i.parent_category==item.id)
					return item
				})
				arr=arr.map(item=>{
					item.children= arr2.filter(i=>i.parent_category==item.id)
					return item
				})
				return arr
			}
		},
		data() {
			return {
				visi: false,
				list: [],
				saveForm: {
					parent_category: null
				}
			}
		},
		mounted() {
			this.categoryList()
		},
		methods: {
			categoryList() {
				categoryListApi().then(res => {
					this.list = res.data
				})
			},
			editClick(row) {
				this.visi = true
				let data = Object.assign({}, row)
				delete data['sub_cat']
				this.saveForm = data
			},
			saveClick() {
				console.info(this.saveForm.id)
				// this.categoryAdd(this.saveForm)
				let apiF
				if(this.saveForm.id){
					apiF=categoryEditApi(this.saveForm)
				}else{
					apiF=categoryAddApi(this.saveForm)
				}
				apiF.then((res)=>{
					this.$message.success("操作成功")
					this.categoryList()
					this.visi=false
				})
			},
			addCate(){
				this.$set(this.saveForm,'category_type',1)
				this.visi=true
			},
			addCates(row){
				this.$set(this.saveForm,'category_type',row.category_type+1)
				this.$set(this.saveForm,'parent_name',row.name)
				this.$set(this.saveForm,'parent_category',row.id)
				this.visi=true
			},
			delClick(row){
				this.$confirm("此操作将永久删除该文件，是否继续？",'提示',{
					type:"warning"
				}).then(()=>{
					categoryDelApi(row.id).then(res=>{
						if(res.status==204){
							this.$message.success("删除成功")
							this.categoryList()
						}
					})
				})
			}
		}
	}
</script>

<style>
</style>
