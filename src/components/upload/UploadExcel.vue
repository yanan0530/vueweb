<template>
	<el-upload :action="action" :on-success="success"  :headers="headers">
		<el-button size="small" type="primary">点击上传</el-button>
	</el-upload>
</template>

<script>
	import config from "@/config/index.js"
	import {
		mapGetters
	} from "vuex"
	export default{
		data() {
			return {
				action: config + "/excelcms/ceshi",
				headers:{}
			}
		},
		mounted() {
			this.headers = {
				Authorization: `JWT ${this.token}`
			}
		},
		computed:mapGetters(['token']),
		methods: {
			success(response, file) {
				console.info(response)
				this.$message.success("上传成功")
				// this.url = response.url
				// this.columns = response.columns
				// this.data = response.datas
			},
		},
	}
</script>

<style>
</style>
