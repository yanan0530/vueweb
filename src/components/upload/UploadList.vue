<template>
	<div>
		<el-upload :action="baseUrl+'/upload/image'" list-type="picture-card" 
		:file-list="fileList"
		:on-remove="handleRemove"
		:on-success="onSuccess"
		>
			<i class="el-icon-plus"></i>
		</el-upload>
	</div>
</template>

<script>
	import baseUrl from "@/config/index.js"
	export default {
		props:{
			images:Array,
			imagesDel:Function,
			addImage:Function,
		},
		computed:{
			fileList(){
				return this.images.map(item=>{
					item.url=this.baseUrl+"/"+item.image_url
					return item
				})
			},
		},
		data() {
			return {
				baseUrl,
				name:"image_url",
				dialogImageUrl: '',
				dialogVisible: false
			};
		},
		methods: {
			handleRemove(file) {
				this.$emit('imagesDel',file)
			},
			onSuccess(res){
				this.$emit('addImage',res.url)
			}
		}
	}
</script>
