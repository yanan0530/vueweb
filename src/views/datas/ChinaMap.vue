<template>
	<div>
		<div id="chinaMap"></div>
	</div>
</template>

<script>
	import {
		getMapApi
	} from "@/api/datas.js"
	import ShanDongMap from "@/views/datas/ShanDongMap.vue"
	import DataSet from "@antv/data-set"
	import {
		yqApi,
	} from "@/api/home.js"
	export default {
		components: {
			ShanDongMap
		},
		data() {
			return {
				list: [],
				mapUrl: "/upload/china.geo.json",
			}
		},
		computed: {
			chinaDatas() {
				let data = [{
					name: '北京市',
				}]
				// let jsonData = this.list
				// jsonData.forEach(item => {
				// 	let obj={}
				// 	if(item.province=="北京"){
				// 		obj=item
				// 		obj.name=item.province+"市"
				// 		console.info(obj)
				// 	}
				// })
				return data
			}
		},
		mounted() {
			yqApi().then(res => {
				this.list = res.data.data.list
				this.getMap()
			})
		},
		methods: {
			getMap() {
				getMapApi(this.mapUrl).then(res => res.data)
					.then(mapData => {
						this.drawMap(mapData)
					})
			},
			drawMap(data) {
				const mapChart = new G2.Chart({
					container: "chinaMap",
					width: 750,
					height: 750,
				})
				mapChart.scale({
					longitude: {
						sync: true
					},
					latitude: {
						sync: true
					}
				});
				mapChart.tooltip(true, {
					showTitle: false
				})
				mapChart.axis(false);
				const ds = new DataSet();
				const worldMap = ds.createView('back')
					.source(data, {
						type: 'GeoJSON'
					});
				const worldMapView = mapChart.view();
				worldMapView.source(worldMap);
				worldMapView.tooltip(false);
				worldMapView.polygon().position('longitude*latitude').style({
					fill: '#fff',
					stroke: '#ccc',
					lineWidth: 1
				});
				const userData = this.chinaDatas;

				const userDv = ds.createView()
					.source(userData)
					.transform({
						geoDataView: worldMap,
						field: 'name',
						type: 'geo.region',
						as: ['longitude', 'latitude']
					})
					.transform({
						type: 'map',
						callback: obj => {
							obj.trend = (obj.value > 100) ? '男性更多' : '女性更多';
							return obj;
						}
					});
				const userView = mapChart.view();
				userView.source(userDv, {
					name: {
						alias: "城市"
					},
					trend: {
						alias: '每100'
					}
				});
				userView.polygon()
					.position('longitude*latitude')
					.color('name', ['#F51D27', '#0A61D7'])
					.opacity('value')
					.tooltip('name*value*value1*trend')
					.animate({
						leave: {
							animation: 'fadeOut'
						}
					});
				mapChart.render();
			}

		}
	}
</script>

<style>
</style>
