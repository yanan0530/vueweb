<template>
	<div>
		<el-option v-for="(item,index) in list" :label="item.name" :value="item.id" :key="index"></el-option>
	</div>
</template>

<script>
	import {vegetablesDictApi} from "@/api/dict.js"
	export default{
		data() {
			return {
				list: []
			}
		},
		mounted() {
			vegetablesDictApi().then(res=>{
				console.info(res)
				this.list=res.data
			})
		}
	}
</script>

<style>
</style>
