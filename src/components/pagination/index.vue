<template>
	<div class="pagination">
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.page"
		 background :page-sizes="[10, 20, 30, 40]" :page-size="page.size" layout="total, sizes, prev, pager, next, jumper"
		 :total="page.total">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		props: {
			page: {
				type: Object,
				required: true
			},
			changesize: {
				type: Function,
			},
			changepage: {
				type: Function,
			}
		},
		data() {
			return {
				currentPage4: 5
			}
		},
		mounted() {
			console.info(this.page)
		},
		methods: {
			//修改每页数量
			handleSizeChange(val) {
				this.$emit("changesize", val)
			},
			handleCurrentChange(val) {
				this.$emit("changepage", val)
			}
		},
	}
</script>

<style lang="scss" scoped="scoped">
	.pagination {
		height: 50px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
</style>
