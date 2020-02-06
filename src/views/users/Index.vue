<template>
	<div>
		<Form :model="info" :label-width="100">
			<FormItem label="username">
				<Input v-model="info.username" placeholder="Enter something..."></Input>
			</FormItem>
			<FormItem label="出生日期">
				<DatePicker type="date" placeholder="Select date" v-model="info.birthday"></DatePicker>
			</FormItem>
			<FormItem label="性别">
				<RadioGroup v-model="info.gender">
					<Radio label="male">Male</Radio>
					<Radio label="female">Female</Radio>
				</RadioGroup>
			</FormItem>
			<FormItem label="email">
				<Input v-model="info.email" placeholder="Enter something..."></Input>
			</FormItem>
			<FormItem label="mobile">
				<Input v-model="info.mobile" placeholder="Enter something..."></Input>
			</FormItem>
			<FormItem>
				<Button type="primary" @click="updateUser">确认修改</Button>
				<Button style="margin-left: 8px">Cancel</Button>
			</FormItem>
		</Form>
	</div>
</template>

<script>
	import {
		readUserApi,updateUserApi
	} from "@/api/user.js"
	export default {
		data() {
			return {
				info: {}
			}
		},
		mounted() {
			readUserApi().then(res => {
				console.info(res.data)
				this.info = res.data
			})
		},
		methods:{
			updateUser(){
				updateUserApi(this.info).then(res=>{
					this.$Message.success("修改成功")
				})
			}
		}
	}
</script>

<style>
</style>
