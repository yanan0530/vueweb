<template>
	<el-container>
		<el-aside width="200px">
			<xAvater style="height: 99px;background-color: #f2f2f2;"></xAvater>
			<left-main ref="leftmain"></left-main>
		</el-aside>
		<el-container>
			<el-header>
				<top-menu ref="topmenu" class="topmenu"></top-menu>
			</el-header>
			<div class="daohang">
				<el-tabs type="border-card" :value="activeName" @tab-click="handleClick" @tab-remove="removeTab">
					<el-tab-pane :closable="item.name=='index_index' ? false:true" v-for="(item,index) in tabs" :key="item.name" :name="item.name">
						<span slot="label"><i v-if="item.meta.icon" :class="item.meta.icon"></i> {{item.meta.title}}</span></el-tab-pane>
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
	import xAvater from "@/components/main/avater.vue"
	import {
		mapGetters,
		mapMutations
	} from "vuex"
	export default {
		components: {
			TopMenu,
			LeftMain,
			xAvater
		},
		computed: {
			...mapGetters(['tabs']),
			activeName() {
				return this.$route.name
			},
		},
		methods: {
			...mapMutations(['DEL_TABS']),
			handleClick(tab) {
				this.$router.push({
					name: tab.name
				})
			},
			removeTab(targetName) {
				this.tabs.forEach((item, index) => {
					if (item.name == targetName) {
						this.DEL_TABS(index)
						if (targetName == this.activeName) {
							let name = this.tabs[index - 1].name
							this.$router.push({
								name
							})
						}

					}
				})
			}
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
		height: calc(100vh - 102px);
		/* background-color: rgb(240, 242, 245); */
	}

	.daohang {
		height: 40px !important;
	}

	.el-tabs>>>.el-tabs__content {
		padding: 0px !important;
	}

	.el-aside {
		box-shadow: 2px 0 6px rgba(0, 21, 41, 0.15);
	}

	/* .el-card{
		min-height: calc(100vh - 144px);
		background-color: #f2f2f2;
	} */
</style>
