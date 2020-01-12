<template>
	<div>
		<router-view></router-view>
		<Modal v-model="loginShow" title="登陆">
			<Form ref="formInline" :model="formInline" :rules="ruleInline" @on-ok="ok">
				<FormItem prop="username">
					<Input type="text" v-model="formInline.username" placeholder="Username">
						<Icon type="ios-person-outline" slot="prepend"></Icon>
					</Input>
				</FormItem>
				<FormItem prop="password">
					<Input type="password" v-model="formInline.password" placeholder="Password">
						<Icon type="ios-lock-outline" slot="prepend"></Icon>
					</Input>
				</FormItem>
				<!-- <FormItem >
					<Input type="text" v-model="formInline.mobile" placeholder="Password">
					<Icon type="ios-lock-outline" slot="prepend"></Icon>
					</Input>
				</FormItem> -->
				<!-- <FormItem>
					<Button type="primary" @click="handleSubmit('formInline')">登录</Button>
					<Button type="primary" @click="registerSubmit('formInline')">注册</Button>
				</FormItem> -->
			</Form>
		</Modal>
	</div>
</template>

<script>
	import {
		loginApi,
		registerApi
	} from "@/api/login.js"
	import {
		mapActions,
		mapGetters
	} from "vuex"
	export default {
		data() {
			return {
				loginShow: true,
				formInline: {
					username: 'admin',
					password: '123456789',
					mobile: "13176377715"
				},
				ruleInline: {
					username: [{
						required: true,
						message: 'Please fill in the username name',
						trigger: 'blur'
					}],
					password: [{
							required: true,
							message: 'Please fill in the password.',
							trigger: 'blur'
						},
						{
							type: 'string',
							min: 6,
							message: 'The password length cannot be less than 6 bits',
							trigger: 'blur'
						}
					]
				}
			}
		},
		mounted() {
			if(this.token != ""){
				this.loginShow=false
			}
		},
		computed: {
			...mapGetters(['token']),
			
		},
		methods: {
			...mapActions(['setUserInfo', 'setToken']),
			ok(){
				this.$refs['formInline'].validate((valid) => {
					if (valid) {
						this.$Message.success('Success!');
						loginApi(this.formInline).then(res => {
							this.setToken(res.data.token)
						})
					} else {
						this.$Message.error('Fail!');
					}
				})
			},
			handleSubmit(name) {
				this.$refs[name].validate((valid) => {
					if (valid) {
						this.$Message.success('Success!');
						loginApi(this.formInline).then(res => {
							this.setToken(res.data.token)
						})
					} else {
						this.$Message.error('Fail!');
					}
				})
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
