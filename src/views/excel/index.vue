<template>
	<div>
		<div class="btns">
			<div>
				<el-upload :action="action" :on-success="success" name="url" :headers="headers">
					<el-button size="small" type="primary">点击上传</el-button>
				</el-upload>
			</div>
			<div>
				<el-button type="primary" icon="el-icon-refresh" @click="onLoad"></el-button>
			</div>
		</div>
		<el-table :data="list" v-loading="loading" border>
			<el-table-column label="文件名称" prop="name" width="500"></el-table-column>
			<el-table-column label="上传时间" prop="create_time" width="220px"></el-table-column>
			<el-table-column label="上传地址" prop="url"></el-table-column>
		</el-table>
		<x-pag ref="page" :page="page" @changesize="changesize" @changepage="changepage"></x-pag>
	</div>
</template>

<script>
	import config from "@/config/index.js"
	import {
		mapGetters
	} from "vuex"
	import {
		excelListApi
	} from "@/api/excel.js"
	import xPag from "@/components/pagination/index.vue"
	export default {
		components: {
			xPag
		},
		data() {
			return {
				action: config + "/excelcms/recod/",
				url: "",
				columns: [],
				headers: {},
				data: [],
				loading: true,
				list: [],
				page: {
					total: 0, // 总页数
					page: 1, // 当前页数
					size: 10 // 每页显示多少条
				},
			}
		},
		computed: mapGetters(['token']),
		mounted() {
			this.headers = {
				Authorization: `JWT ${this.token}`
			}
			this.onLoad()
		},
		methods: {
			success(response, file) {
				console.info(response)
				this.$message.success("上传成功")
				// this.url = response.url
				// this.columns = response.columns
				// this.data = response.datas
			},
			onLoad() {
				this.loading = true
				let data = Object.assign(this.page)
				excelListApi(data).then(res => {
					this.loading = false
					this.list = res.data.results
					this.page.total = res.data.count
				}).catch(() => {
					this.loading = false
				})
			},
			changesize(val) {
				this.$set(this.page, "size", val)
				this.onLoad()
			},
			changepage(val) {
				this.$set(this.page, "page", val)
				this.onLoad()
			},
		},
	}
</script>

<style>
</style>
