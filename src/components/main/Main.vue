<template>
	<el-container>
		<el-aside width="200px">
			<xAvater style="height: 101px;"></xAvater>
			<left-main ref="leftmain"></left-main>
		</el-aside>
		<el-container>
			<el-header>
				<top-menu ref="topmenu" class="topmenu"></top-menu>
			</el-header>
			<div class="daohang">
				<el-tabs type="border-card">
				  <el-tab-pane closable  ><span slot="label"><i class="el-icon-date"></i> 我的行程</span></el-tab-pane>
				  <el-tab-pane closable  ><span slot="label"><i class="el-icon-date"></i> 我的行程</span></el-tab-pane>
				</el-tabs>
			</div>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import TopMenu from "@/components/main/TopMenu.vue"
	import LeftMain from "@/components/main/LeftMain.vue"
	import  xAvater from "@/components/main/avater.vue"
	export default {
		components: {
			TopMenu,
			LeftMain,xAvater
		}
	}
</script>
<style scoped>
	.topmenu {
		z-index: 1;
	}

	.el-header {
		padding: 0px !important;
	}

	.el-main {
		height: calc(100vh - 101px);
	}
	.daohang{
		height: 40px !important;
	}
	.el-tabs>>>.el-tabs__content{
		padding: 0px !important;
	}
</style>
