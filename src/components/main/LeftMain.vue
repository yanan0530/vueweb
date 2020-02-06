<template>
	<el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect">
		<el-menu-item :index="item.name" v-for="(item,index) in list" :key="index">
			<i v-if="item.meta.icon" :class="item.meta.icon"></i>
			<span slot="title">{{item.meta.title}}</span>
		</el-menu-item>
	</el-menu>
</template>

<script>
	import routers from "@/router/routers.js"
	export default {
		watch: {
			$route: {
				handler: function(val) {
					this.setMenu(val)
				},
				deep: true
			}
		},
		data() {
			return {
				routers,
				activeIndex: "",
				list: []
			}
		},
		mounted() {
			this.setMenu(this.$route)
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			handleSelect(key) {
				this.activeIndex = key
				this.$router.push({
					name: key
				})
			},
			setMenu(router) {
				this.activeIndex = router.name
				let topMenuName = this.activeIndex.split("_")[0]
				let topMenu = routers.find(item => item.name == topMenuName)
				this.list = topMenu.children
			}
		}
	}
</script>

<style scoped="scoped">
	.el-menu {
		height: calc(100vh - 101px);
		overflow-y: auto;
	}
</style>
