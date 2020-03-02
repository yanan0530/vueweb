<template>
	<el-upload class="upload-demo" :limit="1" :action="baseUrl+'/upload/image'" list-type="picture" :on-success="onSuccess"
	 :file-list="fileList">
		<el-button size="small" type="primary">点击上传</el-button>
		<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
	</el-upload>
</template>

<script>
	import baseUrl from "@/config/index.js"
	export default {
		props: {
			imageUrl: {
				type: String,
				default: null
			}
		},
		watch: {
			imageUrl(newValue) {
				this.imageFile(newValue)
			}
		},
		mounted() {
			this.imageFile(this.imageUrl)
		},
		data() {
			return {
				baseUrl,
				image_url: "",
				fileList: []
			};
		},
		methods: {
			onSuccess(response) {
				this.image_url = response.url
			},
			imageFile(url) {
				if (url) {
					let n = url.split('/')
					this.fileList = [{
						name: n.slice(-1)[0],
						url: this.baseUrl + '/' + url
					}]
					this.image_url = n
				}
			}
		}
	}
</script>

<style>
</style>
