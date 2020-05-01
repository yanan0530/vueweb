<template>
		<quill-editor v-model="contents" ref="myQuillEditor" :options="editorOption">
		</quill-editor>
</template>

<script>
	import {
		mapGetters
	} from "vuex"
	import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.bubble.css'
	import {
		quillEditor,
		Quill
	} from 'vue-quill-editor'
	import {
		container,
		ImageExtend,
		QuillWatch
	} from 'quill-image-extend-module'
	Quill.register('modules/ImageExtend', ImageExtend)

	import baseUrl from "@/config/index.js"
	export default {
		components: {
			quillEditor
		},
		computed: {
			...mapGetters(['token']),
		},
		props:{
			des:String
		},
		data() {
			return {
				contents: "",
				editorOption: {
					modules: {
						ImageExtend: {
							name: 'file',
							action: `${baseUrl}/upload/image`,
							response: (res) => {
								console.info(baseUrl + "/" + res.url)
								return baseUrl + "/" + res.url
							},
						},
						toolbar: {
							container:container,
							handlers: {
								'image': function() { // 劫持原来的图片点击按钮事件
									QuillWatch.emit(this.quill.id)
								}
							}
						}
					}
				}
			}
		},
		mounted() {
			if(this.des){
				this.contents=this.des
			}
		},
		
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>
