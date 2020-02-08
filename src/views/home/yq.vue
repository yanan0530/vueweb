<template>
	<div>
		<el-image :src="imgurl"></el-image>
		<div id="c1" style="width: 100%;height:400px;"></div>
	</div>
</template>

<script>
	import {
		yqApi,
		getLoginApi,
		postLoginApi,
		wxfApi
	} from "@/api/home.js"
	export default {
		data() {
			return {
				imgurl: "",
				list: []
			}
		},
		computed: {
			sd() {
				let data = this.list.filter(item => item.province == "山东")
				let arr = [
					['product', '确诊', '疑似', "死亡", "恢复"]
				]
				for (var i of data) {
					let oArr = []
					oArr[0] = i.name
					oArr[1] = i.confirm
					oArr[2] = i.suspect
					oArr[3] = i.heal
					oArr[4] = i.dead
					arr.push(oArr)
				}
				let l = arr.length
				return {
					arr,
					l
				}
			}
		},
		mounted() {
			yqApi().then(res => {
				this.list = res.data.data.list
				this.g(this.sd)
			})

			// getLoginApi().then(res => {
			// 	console.info(res)
			// 	if (res.status == 200) {
			// 		wxfApi().then(res => {
			// 			console.info(res)
			// 		})
			// 	}
			// })

			// postLoginApi().then(res => {
			// 	console.info(res)
			// 	this.imgurl = "http://127.0.0.1:8000/" + res.data.img
			// })
		},
		methods: {
			g(data) {
				let myChart = this.$echarts.init(document.getElementById("c1"))
				let options = {
					legend: {},
					tooltip: {},
					dataset: {
						source: data.arr
					},
					xAxis: {
						type: 'category'
					},
					yAxis: {},
					series: [{
							type: 'bar'
						},
						{
							type: 'bar'
						},
						{
							type: 'bar'
						},
						{
							type: 'bar'
						}
					]
				}
				myChart.setOption(options)
			}
		}
	}
</script>

<style>
</style>
