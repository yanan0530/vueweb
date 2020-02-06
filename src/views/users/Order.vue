<template>
	<div>
		订单中心
		{{list}}
		<el-table :data="list" border>
			<el-table-column label="id" prop="id"></el-table-column>
			<el-table-column label="订单号" prop="order_sn"></el-table-column>
			<el-table-column label="支付状态" prop="pay_status"></el-table-column>
			<el-table-column label="签收状态" prop="signer_name"></el-table-column>
			<el-table-column label="创建订单时间" prop="add_time"></el-table-column>
			<el-table-column label="订单金额" prop="order_mount"></el-table-column>
			<el-table-column>
				<template slot-scope="scope">
					<el-button @click="delOrder(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import {listOrderApi,delOrderApi} from "@/api/order.js"
	export default {
		data() {
			return {
				list:[]
			}
		},
		mounted() {
			this.listOrder()
		},
		methods:{
			listOrder(){
				listOrderApi().then(res=>{
					this.list=res.data
				})
			},
			delOrder(row){
				console.info(row.id)
				delOrderApi(row.id).then(res=>{
					this.listOrder()
				})
			}
		}
	}
</script>

<style>
</style>
