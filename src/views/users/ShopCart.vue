<template>
	<div>
		{{list}}
		<div v-for="(item,index) in list" :key="index">
			商品名称：
			{{item.goods.name}}
			商品购买数量：{{item.nums}}
			价格{{item.goods.shop_price*item.nums}}
			<Button @click="updateClick(`${item.goods.id}`,index)">修改</Button>
			<Button @click="delClick(`${item.goods.id}`,index)">删除</Button>
		</div>
		<el-button @click="jiesuan">结算</el-button>
	</div>
</template>

<script>
	import {listShopCartApi,updateShopCartApi,delShopCartApi}  from "@/api/shopcart.js"
	import {addOrderApi} from "@/api/order.js"
	export default{
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			this.listShopCart()
		},
		methods:{
			listShopCart(){
				listShopCartApi().then(res=>{
					this.list=res.data
				})
			},
			delClick(goods){
				console.info(goods)
				delShopCartApi(goods).then(res=>{
					this.$Message.success("删除成功")
					this.listShopCart()
				})
			},
			updateClick(goods,index){
				updateShopCartApi({goods,nums:10}).then(res=>{
					this.$set(this.list[index],"nums",res.data.nums)
				})
			},
			jiesuan(){
				let order_mount=this.list[0].goods.shop_price*this.list[0].nums
				let data={
					post_scipt:"订单留言",
					order_mount,
					address:"地址",
					signer_name:"签收人孙",
					singer_mobile :"13176377715"
				}
				addOrderApi(data).then(res=>{
					if(res.status==201){
						alert("添加成功")
					}
				})
			}
		}
	}
</script>

<style>
</style>
