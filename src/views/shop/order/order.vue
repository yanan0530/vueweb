<template>
	<div>
		<div class="btns">
			<div>
				<!-- <el-button type="primary" icon="el-icon-plus" @click="addClick">添 加</el-button> -->
			</div>
			<div>
				<el-button type="primary" icon="el-icon-refresh" @click="onLoad"></el-button>
			</div>
		</div>
		<el-table :data="list" v-loading="loading" border>
			<el-table-column label="订单号" prop="order_sn"></el-table-column>
			<el-table-column label="支付编号" prop="trade_no"></el-table-column>
			<el-table-column label="订单状态" prop="pay_status" width="100"></el-table-column>
			<el-table-column label="订单金额" prop="order_mount" width="100"></el-table-column>
			<el-table-column label="支付时间" prop="pay_time"></el-table-column>
			<el-table-column label="签收人" prop="signer_name" width="100"></el-table-column>
			<el-table-column label="收货地址" prop="address"></el-table-column>
			<el-table-column label="联系电话" prop="singer_mobile"></el-table-column>
			<el-table-column label="添加时间" prop="add_time"></el-table-column>
			<el-table-column label="订单留言" prop="post_scipt"></el-table-column>
		</el-table>
		<x-pag ref="page" :page="page" @changesize="changesize" @changepage="changepage"></x-pag>
	</div>
</template>

<script>
	import xPag from "@/components/pagination/index.vue"
	export default{
		components:{
			xPag
		},
		data() {
			return {
				loading:true,
				list:[],
				page: {
					total: 0, // 总页数
					page: 1, // 当前页数
					size: 10 // 每页显示多少条
				},
			}
		},
		mounted() {
			this.onLoad()
		},
		methods:{
			onLoad(){
				this.loading=true
				let data=Object.assign(this.page)
				this.$Api.shop.orderListApi(data).then(res=>{
					this.loading=false
					this.list=res.data.results
					this.page.total=res.data.count
				}).catch(()=>{
					this.loading=false
				})
			},
			changesize(val) {
				this.$set(this.page, "size", val)
				this.onLoad()
			},
			changepage(val) {
				this.$set(this.page, "page", val)
				this.onLoad()
			},
		}
	}
</script>

<style>
</style>
