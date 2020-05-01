<template>
	<div>
		<el-form :model="searchForm">
			<el-form-item label="选品库">
				<el-radio-group v-model="searchForm.favorites_id">
					<el-radio v-for="item in favorites" :label="item.favorites_id" :key="item.favorites_id">{{item.favorites_title}}</el-radio>
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
				<el-button>重 置</el-button>
			</el-form-item>
		</el-form>
		<div class="btns">
			<div>
			</div>
			<div>
				<el-button type="primary" icon="el-icon-refresh" @click="getList"></el-button>
			</div>
		</div>
		<el-table :data="list" border v-loading="loading">
			<el-table-column label="商品ID" prop="num_iid"></el-table-column>
			<el-table-column label="商品标题" prop="title"></el-table-column>
			<el-table-column label="商品主图">
				<template slot-scope="scope">
					<el-image :src="scope.row.pict_url" style="width: 100px; height: 100px" fit="contain"></el-image>
				</template>
			</el-table-column>
			<el-table-column label="商品一口价格" prop="reserve_price"></el-table-column>
			<el-table-column label="商品折扣价格" prop="zk_final_price"></el-table-column>
			<el-table-column label="卖家类型" prop="user_type"></el-table-column>
			<el-table-column label="宝贝所在地" prop="provcity"></el-table-column>
			<el-table-column label="商品地址" prop="item_url"></el-table-column>
			<el-table-column label="淘客地址" prop="click_url"></el-table-column>
			<el-table-column label="30天销量" prop="volume"></el-table-column>
			<!-- 收入比例，举例，取值为20.00，表示比例20.00% -->
			<el-table-column label="收入比例" prop="tk_rate"></el-table-column>
			<!-- <el-table-column label="商品优惠券推广链接" prop="coupon_click_url"></el-table-column> -->
			<el-table-column label="优惠券结束时间" prop="coupon_end_time"></el-table-column>
			<el-table-column label="优惠券面额" prop="coupon_info"></el-table-column>
			<el-table-column label="优惠券总量" prop="coupon_total_count"></el-table-column>
			<el-table-column label="优惠券剩余量" prop="coupon_remain_count"></el-table-column>
			<el-table-column>
				<template slot-scope="scope">
					<el-button type="primary" @click="detail(scope.row)">详情</el-button>
				</template>
			</el-table-column>
		</el-table>
		<x-pag ref="page" :page="page" @changesize="changesize" @changepage="changepage"></x-pag>
		<el-dialog title="详情" :visible.sync="visi"></el-dialog>
	</div>
</template>

<script>
	import {
		taobaoApi
	} from "@/api/taobao.js"
	import xPag from "@/components/pagination/index.vue"
	export default {
		name: "taobaogoods",
		components: {
			xPag
		},
		data() {
			return {
				visi:false,
				favorites: [],
				list: [],
				loading: false,
				searchForm: {
					favorites_id: "",
					platform: ""
				},
				page: {
					total: 0, // 总页数
					page: 1, // 当前页数
					size: 10 // 每页显示多少条
				},
			}
		},
		mounted() {
			this.favoritesList()
			let k={
				method: "taobao.tbk.content.get",
				adzone_id: "110116300145",
			}
			taobaoApi(k).then(res=>{
				console.info(res)
			})
		},
		methods: {
			detail(row){
				
				console.info(row.num_iid)
				let data={
					method:"taobao.tbk.item.info.get",
					num_iids:row.num_iid
				}
				taobaoApi(data).then(res=>{
					console.info(res)
				})
				
			},
			favoritesList() {
				let data = {
					method: "taobao.tbk.uatm.favorites.get",
					fields: "favorites_title,favorites_id,type"
				}
				taobaoApi(data).then(res => {
					this.favorites = res.data.tbk_uatm_favorites_get_response.results.tbk_favorites
					// console.info(res.data.tbk_uatm_favorites_get_response.total_results)
				})
			},
			getList() {
				this.loading = true
				let data = {
					method: "taobao.tbk.uatm.favorites.item.get",
					page_no: this.page.page,
					page_size: this.page.size,
					fields: `coupon_click_url,num_iid,title,pict_url,small_images,reserve_price,zk_final_price,
							user_type,provcity,item_url,seller_id,volume,nick,shop_title,zk_final_price_wap,coupon_info
							event_start_time,event_end_time,tk_rate,status,type,coupon_end_time,coupon_remain_count`
				}
				taobaoApi(Object.assign(data, this.searchForm)).then(res => {
					this.loading = false
					this.list = res.data.tbk_uatm_favorites_item_get_response.results.uatm_tbk_item
					this.page.total = res.data.tbk_uatm_favorites_item_get_response.total_results
				}).catch(err => {
					console.info(err)
					this.loading = false
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
		}
	}
</script>

<style>
</style>
