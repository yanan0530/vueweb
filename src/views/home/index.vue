<template>
	<div>
		<el-upload :action="baseUrl+'/upload/image'" :on-success="onSuccess">
			<el-button>点击上传</el-button>
		</el-upload>
	</div>
</template>

<script>
	import baseUrl from "@/config/index.js"
	export default {
		data() {
			return {
				baseUrl
			}
		},
		methods: {
			onSuccess(response) {
				console.info(response)
			}
		}
	}
</script>

<style>
</style>
