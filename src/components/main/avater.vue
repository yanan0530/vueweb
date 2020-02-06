<template>
	<div class="ava">
		<div style="text-align: center;">
			<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
			<h3>{{userInfo.company}}</h3>
		</div>
	</div>
</template>

<script >
	import {mapGetters} from "vuex"
	export default{
		computed:mapGetters(['userInfo']),
		mounted() {
		}
	}
</script>

<style scoped="scoped">
	.ava{
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: solid 1px #e6e6e6;
		border-bottom: solid 1px #e6e6e6;
	}
</style>
