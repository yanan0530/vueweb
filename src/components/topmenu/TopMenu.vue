<template>
	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		<el-menu-item :index="item.name"  v-for="(item,index) in routers" :key="index">{{item.meta.title}}</el-menu-item>
	</el-menu>
</template>

<script>
	import routers  from "@/router/routers.js"
	export default {
		data() {
			return {
				routers,
				activeIndex: "1"
			}
		},
		mounted() {
			this.activeIndex=this.$route.name.split("_")[0]
		},
		methods: {
			handleSelect(key) {
				this.activeIndex=key
				this.$router.push({name:key})
			}
		}
	}
</script>

<style scoped="scoped">
	.el-menu-demo{
		display: flex;
		/* flex-direction: row-reverse; */
		justify-content:flex-end
	}
</style>
