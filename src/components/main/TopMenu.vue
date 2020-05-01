<template>
	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#438EB9" text-color="#FFF" active-text-color="#FFF">
		<el-menu-item :index="item.name"  v-for="(item,index) in routers" :key="index">{{item.name=='user'?userInfo.username:item.meta.title}}</el-menu-item>
	</el-menu>
</template>

<script>
	import routers  from "@/router/routers.js"
	import {mapGetters} from "vuex"
	export default {
		watch: {
			'$route'(newValue) {
				this.activeIndex=newValue.name.split("_")[0]
			}
		},
		computed:mapGetters(['userInfo']),
		data() {
			return {
				routers,
				activeIndex: "index"
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
		justify-content:flex-end
	}
</style>
