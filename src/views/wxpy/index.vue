<template>
	<div>
		<div v-html="totalInfo"></div>

		<el-dialog :visible.sync="loginWx" title="请扫码登陆" style="text-align: center;">
			<el-image :src="codeUrl"></el-image>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="close">返回</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import {
		getLoginApi,
		postLoginApi,
		wxfApi
	} from "@/api/home.js"
	export default {
		data() {
			return {
				codeUrl: "",
				loginWx: true,
				totalInfo: ""
			}
		},
		mounted() {
			getLoginApi().then(res => {
				if (res.status == 200) {
					this.loginWx = false
					wxfApi().then(res => {
						this.totalInfo = res.data.total.replace(/\n/gm,"<br/>")
					})
				}
			})
			postLoginApi().then(res => {
				this.codeUrl = "http://127.0.0.1:8000/" + res.data.img
			})
		},
		methods: {
			close() {
				this.$router.go(-1)
			},
		}
	}
</script>

<style lang="scss" scoped="scoped">

</style>
