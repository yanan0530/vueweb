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
			<el-table-column label="分类" prop="category_name"></el-table-column>
			<el-table-column label="商品编码" prop="goods_sn"></el-table-column>
			<el-table-column label="商品" prop="name"></el-table-column>
			<el-table-column label="售价" prop="shop_price">
				<template slot-scope="scope">
					¥{{scope.row.shop_price}}(<s>¥{{scope.row.market_price}}</s>)
				</template>
			</el-table-column>
			<el-table-column label="点击数" prop="click_num"></el-table-column>
			<el-table-column label="销量" prop="sold_num"></el-table-column>
			<el-table-column label="收藏数" prop="fav_num"></el-table-column>
			<el-table-column label="库存" prop="goods_num"></el-table-column>
			<!-- <el-table-column label="市场价格" prop="market_price"></el-table-column> -->
			<!-- <el-table-column label="运费" prop="ship_free"></el-table-column> -->
			<!-- <el-table-column label="图片地址" prop="image_url"></el-table-column> -->
			<!-- <el-table-column label="是否新品" prop="is_new"></el-table-column> -->
			<!-- <el-table-column label="是否热销" prop="is_hot"></el-table-column> -->
			<!-- <el-table-column label="商品描述" prop="goods_brief "></el-table-column> -->
			<el-table-column label="添加时间" prop="add_time" width="160"></el-table-column>
			<el-table-column label="操作" width="160">
				<template slot-scope="scope">
					<el-button type="primary" size="mini" icon="el-icon-edit" @click="editClick(scope.row)" circle></el-button>
					<el-button type="primary" size="mini" icon="el-icon-picture-outline" @click="imageClick(scope.row)" circle></el-button>
					<el-button type="primary" size="mini" icon="el-icon-delete" @click="delClick(scope.row.id)" circle></el-button>
				</template>
			</el-table-column>
		</el-table>
		<x-pag ref="page" :page="page" @changesize="changesize" @changepage="changepage"></x-pag>
		<!-- 添加商品 -->
		<el-dialog title="添加/编辑" :visible.sync="visi" :close-on-click-modal="false" width="500px">
			<el-form :model="saveForm" label-width="120px">
				<el-form-item label="封面图">
					<x-upload ref="uploadImage" :imageUrl="saveForm.image_url"></x-upload>
				</el-form-item>
				<el-form-item label="商品分类">
					<el-cascader :options="categroy" filterable v-model="saveForm.category" :props="props" :show-all-levels="false" style="width: 100%;"></el-cascader>
				</el-form-item>
				<el-form-item label="商品编码">
					<el-input v-model="saveForm.goods_sn"></el-input>
				</el-form-item>
				<el-form-item label="商品名称">
					<el-input v-model="saveForm.name"></el-input>
				</el-form-item>
				<el-form-item label="商品描述">
					<el-input v-model="saveForm.goods_brief"></el-input>
				</el-form-item>
				<el-form-item label="本店价格">
					<el-input v-model.number="saveForm.shop_price"></el-input>
				</el-form-item>
				<el-form-item label="市场价格">
					<el-input v-model.number="saveForm.market_price"></el-input>
				</el-form-item>
				<el-form-item label="库存数量">
					<el-input v-model.number="saveForm.goods_num"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="visi=false">取 消</el-button>
				<el-button type="primary" @click="saveClick">确 定</el-button>
			</span>
		</el-dialog>
		<el-dialog title="商品图片" :visible.sync="imageVisi">
			<upload-list :images="images" @imagesDel="imagesDel" @addImage="addImage"></upload-list>
			<span slot="footer" class="dialog-footer">
				<el-button @click="imageVisi=false">取 消</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import {categroyListApi} from "@/api/commons.js"
	import {
		goodsListApi,
		goodsAddApi,
		goodsEditApi,
		goodsDelApi,imagesListApi,imagesDelApi,imagesAddApi
	} from "@/api/shop.js"
	import xUpload from "@/components/upload/upload.vue"
	import xPag from "@/components/pagination/index.vue"
	import UploadList  from "@/components/upload/UploadList.vue"
	export default {
		components: {
			xPag,xUpload,UploadList
		},
		watch: {
			visi(newValue) {
				if(!newValue){
					this.saveForm={
					}
					this.$refs.uploadImage.image_url=""
				}
			}
		},
		data() {
			return {
				visi: false,
				imageVisi:false,
				list: [],
				categroy:[],
				images:[],
				clickrow:{},//单击行按钮
				page: {
					total: 0, // 总页数
					page: 1, // 当前页数
					size: 10 // 每页显示多少条
				},
				saveForm: {
					goods_num: 0
				},
				props:{
					value:"id",
					label:"name",
					children:"sub_cat"
				}
			}
		},
		mounted() {
			categroyListApi().then(res=>{
				this.categroy=res.data
			})
			this.getList()
		},
		methods: {
			getList() {
				goodsListApi(this.page).then(res => {
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
				let data=Object.assign({},this.saveForm)
				data.image_url=this.$refs.uploadImage.image_url
				if(typeof(data.category) != "number"){
					data.category=data.category.pop()
				}
				let api
				if (data.id) {
					api = goodsEditApi(data)
				} else {
					api = goodsAddApi(data)
				}
				api.then(res => {
					if (res.status >= 200) {
						this.$message.success("操作成功")
						this.getList()
						this.visi = false
					}
				}).catch(() => {
					this.$message.error("操作失败")
				})
			},
			delClick(id) {
				this.$confirm("此操作将永久删除该数据，是否继续", '提示', {
					type: "warning"
				}).then(() => {
					goodsDelApi(id).then(res => {
						console.info(res.status)
						this.$message.success("删除成功")
						this.getList()
					}).catch(() => {
						this.$message.error("操作失败")
					})
				})
			},
			imageClick(row){
				this.clickrow=row
				let goods=row.id
				imagesListApi({goods}).then(res=>{
					if(res.status==200){
						this.images=res.data
						this.imageVisi=true
					}
				})
			},
			imagesDel(row){
				imagesDelApi(row.id).then(res=>{
					if(res.status==204){
						this.$message.success("删除成功！")
					}
				})
			},
			addImage(i){
				let data={
					goods:this.clickrow.id,
					image_url:i
				}
				imagesAddApi(data).then(res=>{
					if(res.status==201){
						this.$message.success("操作成功")
					}
				}).then(()=>{
					imagesListApi({goods:this.clickrow.id}).then(res=>{
						if(res.status==200){
							this.images=res.data
							this.imageVisi=true
						}
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
