<template>
	<el-menu :default-active="active" class="el-menu-vertical-demo" background-color="#f2f2f2" active-text-color="#fff"
	 router>
		<el-menu-item :index="item.name" v-for="(item,index) in list" :key="index" :route="{'name':item.name}" v-if="item.name.split('_')[0]==$route.name.split('_')[0]">
			<i v-if="item.meta.icon" :class="item.meta.icon"></i>
			<span slot="title">{{item.meta.title}}</span>
		</el-menu-item>
	</el-menu>
</template>

<script>
	import {
		mapActions
	} from 'vuex'
	import routers from "@/router/routers.js"
	export default {
		data() {
			return {
				routers,
			}
		},
		watch: {
			'$route'(newValue) {
				this.setTabs(newValue)
			}
		},
		created() {
			this.setTabs(this.$route)
		},
		computed: {
			active() {
				return this.$route.name
			},
			list() {
				let arr = []
				routers.forEach(item => {
					arr = [...arr, ...item.children]
				})
				return arr
			}
		},
		mounted() {},
		methods: {
			...mapActions(['setTabs'])
		}
	}
</script>

<style scoped="scoped">
	.el-menu {
		height: calc(100vh - 102px);
		overflow-y: auto;
	}

	.el-menu>>>.is-active {
		font-weight: 700;
		background-color: #438EB9 !important;
	}
</style>
