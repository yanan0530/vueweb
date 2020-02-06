<template>
	<div>
		<Row>
			<Col span="8" v-for="(item,index) in list" :key="index">
				<Card style="width: 500px;height: 500px;">
					<div style="text-align:center">
						<img :src="item.goods.goods_front_image" style="width: 100%;">
						<h3>{{item.goods.name}}</h3>
					</div>
				</Card>
			</Col>
		</Row>
	</div>
</template>

<script>
	import {listFavsApi} from "@/api/user.js"
	export default{
		data() {
			return {
				list:[]
			}
		},
		mounted() {
			listFavsApi().then(res=>{
				console.info(res.data)
				this.list=res.data
			})
		}
	}
</script>

<style>
</style>
