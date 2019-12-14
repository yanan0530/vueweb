<template>
	<div>
		<Form :model="form" :label-width="80">
			<FormItem label="列编号">
				<Input v-model="form.cell" placeholder="请填写拼接列号如:A"></Input>
			</FormItem>
			<FormItem label="拼接字符">
				<Input v-model="form.character" placeholder="请填写拼接字符如:,"></Input>
			</FormItem>
		</Form>
		<Upload action="/excelcms/splicingCell" :headers="headers" :data="form" :on-success="success">
			<Button icon="ios-cloud-upload-outline">上传Excel</Button>
		</Upload>

		<Input v-model="str" type="textarea" :rows="20" placeholder="" />

	</div>
</template>

<script>
	import {
		getCsrfToken
	} from '@/utils/cache.js'
	export default {
		data() {
			return {
				headers: {
					'X-CSRFTOKEN': '',
				},
				form: {
					cell: "c",
					character: ","
				},
				str: ""
			}
		},
		mounted() {
			this.headers['X-CSRFTOKEN'] = getCsrfToken()
		},
		methods: {
			success(response, file, fileList) {
				this.str = response.str
			}
		},
	}
</script>

<style>
</style>
