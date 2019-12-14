<template>
	<div>
		<Upload action="/excelcms/fileExcel" :headers="headers" :on-success="success">
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
	export default {
		data() {
			return {
				text: "首页",
				headers: {
					'X-CSRFTOKEN': '',
					
				},
				url: "",
				columns: [],
				data: []
			}
		},
		mounted() {
			this.headers['X-CSRFTOKEN'] = getCsrfToken()
		},
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
