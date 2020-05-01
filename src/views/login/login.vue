<template>
	<div class="login">
		<div class="login-con">
			<el-card>
				<div slot="header">
					登陆
				</div>
				<el-form :model="loginForm" size="mini">
					<el-form-item>
						<el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input v-model="loginForm.password" prefix-icon="el-icon-connection" type="password" clearable placeholder="请输入密码"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="login">登 陆</el-button>
						<el-button type="primary">注 册</el-button>
					</el-form-item>
				</el-form>
			</el-card>
		</div>
	</div>
</template>

<script>
	import { loginApi, registerApi, } from "@/api/login.js"
	import {mapActions} from "vuex"
	export default{
		data() {
			return {
				loginForm: {}
			}
		},
		methods:{
			...mapActions(['setUserInfo', 'setToken']),
			login(){
				loginApi(this.loginForm).then(res=>{
					if(res.status==200){
						this.setToken(res.data.token)
						this.setUserInfo(res.data.userinfo)
						this.$router.push({path:"/"})
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.login {
		width: 100%;
		height: 100vh;
		background-image: url('../../assets/images/login-bg.jpg');
		background-size: cover;
		background-position: center;
		position: relative;
	}

	.login-con {
		position: absolute;
		right: 50%;
		top: 35%;
		transform: translateX(50%);
		width: 300px;
	}
</style>
