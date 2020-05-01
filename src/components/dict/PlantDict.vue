<template>
	<div>
		<el-option v-for="(item,index) in list" :label="item.plant_time+':'+item.vegetables_name" :value="item.id" :key="index"></el-option>
	</div>
</template>

<script>
	import {plantDictApi} from "@/api/dict.js"
	export default{
		data() {
			return {
				list: []
			}
		},
		mounted() {
			plantDictApi().then(res=>{
				this.list=res.data
			})
		}
	}
</script>

<style>
</style>
