<template>
	<div>
		<Upload :action="action" :on-success="success" :show-upload-list="false">
			<Button icon="ios-cloud-upload-outline">上传Excel</Button>
		</Upload>
		{{url}}
		<Table :columns="columns" border :data="data"></Table>
	</div>
</template>

<script>
	import {
		getCsrfToken
	} from '@/utils/cache.js'
	import config from "@/config/index.js"
	export default {
		data() {
			return {
				action: config + "/excelcms/fileExcel",
				url: "",
				columns: [],
				data: [],
			}
		},
		mounted() {},
		methods: {
			success(response, file, fileList) {
				this.url = response.url
				this.columns = response.columns
				this.data = response.datas
			}
		},
	}
</script>

<style>
</style>
