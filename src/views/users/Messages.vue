<template>
	<div>
		{{list}}
		<Form :model="formItem" :label-width="80">
			<FormItem label="留言类型">
				<RadioGroup v-model="formItem.message_type">
					<Radio label="1">留言</Radio>
					<Radio label="2">投诉</Radio>
					<Radio label="3">询问</Radio>
					<Radio label="4">售后</Radio>
					<Radio label="5">求购</Radio>
				</RadioGroup>
			</FormItem>
			<FormItem label="主题">
				<Input v-model="formItem.subject" placeholder="Enter something..."></Input>
			</FormItem>
			<FormItem label="留言">
				<Input v-model="formItem.message" placeholder="Enter something..."></Input>
			</FormItem>
			<FormItem>
				<Button type="primary" @click="createMessage">Submit</Button>
				<Button style="margin-left: 8px">Cancel</Button>
			</FormItem>
		</Form>
	</div>
</template>

<script>
	import {
		listMessageApi,
		createMessageApi,
		delMessageApi
	} from "@/api/message.js"
	export default {
		data() {
			return {
				list: [],
				formItem: {}
			}
		},
		mounted() {
			this.listMessage()
		},
		methods: {
			listMessage() {
				listMessageApi().then(res => {
					this.list = res.data
				})
			},
			createMessage(){
				createMessageApi(this.formItem).then(res=>{
					console.info(res)
				})
			}
		}
	}
</script>

<style>
</style>
