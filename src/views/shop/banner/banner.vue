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
		<el-table :data="list" border>
			<el-table-column label="商品" prop="goods_name">
			</el-table-column>
			<el-table-column label="排序" prop="index"></el-table-column>
			<el-table-column label="图片" prop="image_url">
			</el-table-column>
			<el-table-column label="添加时间" prop="add_time"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="primary" icon="el-icon-edit" @click="editClick(scope.row)" circle></el-button>
					<el-button type="primary" icon="el-icon-delete" @click="delClick(scope.row.id)" circle></el-button>
				</template>
			</el-table-column>
		</el-table>
		<x-pag ref="page" :page="page" @changesize="changesize" @changepage="changepage"></x-pag>
		<el-dialog title="添加/编辑 轮播图" :visible.sync="visi" :close-on-click-modal="false">
			<el-form :model="saveForm" label-width="120px">
				<el-form-item label="图片">
					<!-- <el-input v-model="saveForm.image_url" ></el-input> -->
					<x-upload ref="uploadImage" :imageUrl="saveForm.image_url"></x-upload>
				</el-form-item>
				<el-form-item label="排序">
					<el-input v-model="saveForm.index" type="number"></el-input>
				</el-form-item>
				<el-form-item label="商品">
					<el-input v-model="saveForm.goods" type="number"></el-input>
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
		bannerListApi,
		bannerAddApi,
		bannerEditApi,
		bannerDelApi
	} from "@/api/shop.js"
	import xUpload from "@/components/upload/upload.vue"
	import xPag from "@/components/pagination/index.vue"
	export default {
		components: {
			xPag,xUpload
		},
		watch: {
			visi(newValue) {
				if(!newValue){
					this.saveForm={
						index: 0
					}
					this.$refs.uploadImage.image_url=""
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
					index: 0
				},

			}
		},
		mounted() {
			this.getList()
		},
		methods: {
			getList() {
				bannerListApi(this.page).then(res => {
					let data = res.data
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
			editClick(data) {
				this.visi = true
				this.saveForm = data
			},
			saveClick() {
				
				this.saveForm.image_url=this.$refs.uploadImage.image_url
				
				
				let api
				if (this.saveForm.id) {
					api = bannerEditApi(this.saveForm)
				} else {
					api = bannerAddApi(this.saveForm)
				}
				api.then(res => {
					if (res.status == 201) {
						this.$message.success("添加成功")
						this.getList()
						this.visi = false
					}
				}).catch(() => {
					this.$message.error("添加失败")
				})
			},
			delClick(id) {
				this.$confirm("此操作将永久删除该数据，是否继续", '提示', {
					type: "warning"
				}).then(() => {
					bannerDelApi(id).then(res => {
						console.info(res.status)
						this.$message.success("删除成功")
						this.getList()
					}).catch(() => {
						this.$message.error("操作失败")
					})
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.btns {
		margin: 12px 0;
		display: flex;
		justify-content: space-between;
	}
</style>
