<template>
	<div>
		<div>
			<el-form :model="searchForm" label-width="80px">
				<el-form-item label="查询词">
					<el-input v-model="searchForm.q"></el-input>
				</el-form-item>
				<el-form-item label="排序">
					<el-radio-group v-model="searchForm.sort">
						<el-radio label="commission_rate_asc">佣金比例升序</el-radio>
						<el-radio label="commission_rate_des">佣金比例降序</el-radio>
						<el-radio label="auction_count_des">商品数量降序</el-radio>
						<el-radio label="auction_count_asc">商品数量升序</el-radio>
						<el-radio label="total_auction_des">销售总数量降序</el-radio>
						<el-radio label="total_auction_asc">销售总数量升序</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="店铺类型">
					<el-radio-group v-model="searchForm.is_tmall">
						<el-radio label="true">天猫</el-radio>
						<el-radio label="false">淘宝</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="链接形式">
					<el-radio-group v-model="searchForm.platform">
						<el-radio label="1">PC</el-radio>
						<el-radio label="2">无线</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="getList">搜 索</el-button>
					<el-button >重 置</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="btns">
			<div>
			</div>
			<div>
				<el-button type="primary" icon="el-icon-refresh" @click="getList()"></el-button>
			</div>
		</div>
		<el-table :data="list" border>
			<el-table-column label="封面" width="125px">
				<template slot-scope="scope">
					<el-image :src="scope.row.pict_url" style="width: 100px; height: 100px" fit="contain"></el-image>
				</template>
			</el-table-column>
			<el-table-column label="店铺" prop="shop_title"></el-table-column>
			<el-table-column label="掌柜" prop="seller_nick"></el-table-column>
			<el-table-column label="地址" prop="shop_url"></el-table-column>
			<!-- <el-table-column label="店铺类型" prop="shop_type"></el-table-column> -->
		</el-table>
		<x-pag ref="page" :page="page" @changesize="changesize" @changepage="changepage"></x-pag>
	</div>
</template>
<script>
	import {tbkshopgetApi,mmaterialApi} from "@/api/taobao.js"
	import xPag from "@/components/pagination/index.vue"
	export default {
		components:{xPag},
		data() {
			return {
				searchForm:{
					q:"女装",
					sort:"",
					platform:"2",
					is_tmall:"true"
					
				},
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
			mmaterialApi().then(res=>{
				console.info(res)
			})
		},
		methods: {
			getList() {
				if(this.searchForm.q){
					let data={
						page_no:this.page.page,
						page_size:this.page.size,
					}
					tbkshopgetApi(Object.assign(data,this.searchForm)).then(res=>{
						this.list=res.data.tbk_shop_get_response.results.n_tbk_shop
						this.page.total = res.data.tbk_shop_get_response.total_results
					})
				}else{
					this.$message.error("请输入查询词")
				}
				
			},
			changesize(val) {
				this.$set(this.page, "size", val)
				this.getList()
			},
			changepage(val) {
				this.$set(this.page, "page", val)
				this.getList()
			},
		},
	}
</script>

<style>
</style>
