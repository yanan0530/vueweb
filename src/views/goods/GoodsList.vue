<template>
	<div>
		
		<el-carousel indicator-position="outside">
		    <el-carousel-item v-for="item in bannerList" :key="item.id">
		     <el-image
		           :src="item.image"
		           fit="contain"></el-image>
		    </el-carousel-item>
		  </el-carousel>
		
		<Row>
			<Col span="8" v-for="(item,index) in list" :key="index">
				<Card style="width: 500px;height: 500px;">
					<div style="text-align:center">
						<img :src="item.goods_front_image" style="width: 100%;">
						<h3>{{item.name}}</h3>
						<Button type="primary" @click="toDetai(item.id)">进入商品</Button>
					</div>
				</Card>
			</Col>
		</Row>
	</div>
</template>

<script>
	import {
		goodsListApi,listGoodsBannerApi
	} from "@/api/goods.js"
	export default {
		data() {
			return {
				list: [],
				bannerList:[]
			}
		},
		mounted() {
			this.getList()
		},
		methods: {
			getList() {
				goodsListApi().then(res => {
					this.list = res.data
				})
				listGoodsBannerApi().then(res=>{
					this.bannerList=res.data
				})
			},
			toDetai(id){
				this.$router.push({
					path:"/goods/detail",
					query:{ id }
				})
			}
		}
	}
</script>

<style>
</style>
