<template>
	<div>
		<router-view></router-view>
		<el-dialog title="登录" :visible.sync="loginShow">
			<el-form :model="formInline" label-width="100">
				<el-form-item label="账号">
					<el-input v-model="formInline.username" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input type="password" v-model="formInline.password" autocomplete="off"></el-input>
				</el-form-item>
				<!-- <el-form-item>
					<el-button @click="weiboSubmit">微博登陆</el-button>
				</el-form-item> -->
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="ok">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import {
		loginApi,
		registerApi,
		loginWeiboApi
	} from "@/api/login.js"
	import {
		mapActions,
		mapGetters
	} from "vuex"
	export default {
		data() {
			return {
				loginShow: false,
				formInline: {
					username: 'admin',
					password: '123456789',
					mobile: "13176377715"
				},
			}
		},
		mounted() {
			console.info(this.token)
			if (this.token != "") {
				this.loginShow = false
			} else {
				this.loginShow = true
			}
		},
		computed: {
			...mapGetters(['token']),
		},
		methods: {
			...mapActions(['setUserInfo', 'setToken']),
			ok() {
				loginApi(this.formInline).then(res => {
					if(res.status==200){
						this.setToken(res.data.token)
						this.setUserInfo(res.data.userinfo)
						this.loginShow=false
					}
				})
			},
			weiboSubmit() {
				window.location.href = "http://127.0.0.1:8000/login/weibo/"
			},
			registerSubmit(name) {
				this.$refs[name].validate((valid) => {
					if (valid) {
						this.$Message.success('Success!');
						registerApi(this.formInline).then(res => {
							console.info(res)
						})
					} else {
						this.$Message.error('Fail!');
					}
				})
			}
		},
	}
</script>
<style>
	.el-table thead th{
		background: #f5f7fa;
	}
</style>