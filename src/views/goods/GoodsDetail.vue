<template>
	<div>
		商品详情
		<Button v-if="hasFav" @click="delFav">已收藏</Button>
		<Button v-else @click="addFav">收藏</Button>
		{{info.id}}
		<Button type="primary" @click="addShopCart">加入购物车</Button>
		{{info}}
		
	</div>
</template>

<script>
	import { goodsDetailApi,goodsFavApi,goodsDelFavApi,goodsAddApi } from "@/api/goods.js"
	import { createShopCartApi } from "@/api/shopcart.js"
	export default{
		data() {
			return {
				info: [],
				hasFav:false,
			}
		},
		mounted() {
			this.getDetail()
		},
		methods: {
			getDetail() {
				goodsDetailApi(this.$route.query.id).then(res=>{
					console.info(res.data)
					this.info=res.data
					goodsFavApi(this.info.id,"GET").then(res=>{
						if(res.status==200){
							this.hasFav=true
						}
					})
				})
			},
			fav(){
				goodsFavApi(this.info.id,"GET").then(res=>{
					console.info(res)
				})
			},
			addFav(){
				goodsAddApi(this.info.id).then(res=>{
					if(res.status==201){
						this.hasFav=true
					}
				})
			},
			delFav(){
				goodsDelFavApi(this.info.id).then(res=>{
					if(res.status==204){
						this.hasFav=false
					}
				})
			},
			addShopCart(){
				let data={
					goods:this.info.id,
					nums:1
				}
				createShopCartApi(data).then(res=>{
					console.info(res.data)
					this.$Message.success("添加成功")
				})
			}
		},
	}
</script>

<style>
</style>
