<template>
	<router-view></router-view>
</template>

<script>
	import {
		userInfoApi
	} from "@/api/userinfo.js"
	import {
		mapActions
	} from "vuex"
	export default {
		mounted() {
			userInfoApi().then(res => {
				if (res.res == 1) {
					this.setUserInfo(res.userinfo)
				}
			})
		},
		methods: {
			...mapActions(['setUserInfo']),
		},
	}
</script>
