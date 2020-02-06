<template>
	<div>
		<div id="shandongMap"></div>
	</div>
</template>

<script>
	import {
		getMapApi
	} from "@/api/datas.js"
	import DataSet from "@antv/data-set"
	import {
		yqApi,
	} from "@/api/home.js"
	export default {
		data() {
			return {
				list: [],
				mapUrl: "/upload/sd.geo.json",
			}
		},
		computed: {
			chinaDatas() {
				let data = this.list.filter(item => {
					return item.province == "山东"
				})
				data.forEach(item => {
					item.name = item.name + "市"
				})
				return data
			},


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
					container: "shandongMap",
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
					stroke: '#5C5C5C',
					lineWidth: 1
				})
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
							let confNum = obj.confirm
							console.info(confNum)
							if (confNum > 30) {
								obj.title = "30 ~ "
							} else if (confNum > 20) {
								obj.title = "20 ~ 30"
							} else if (confNum > 10) {
								obj.title = "10 ~ 20"
							} else {
								obj.title = "0 ~ 10"
							}
							return obj;
						}
					});
				const userView = mapChart.view();
				userView.source(userDv, {
					name: {
						alias: '地区'
					},
					confirm: {
						alias: '确诊'
					},
					heal: {
						alias: '治愈'
					},
					dead: {
						alias: '治愈'
					}
				});
				userView.polygon()
					.position('longitude*latitude')
					.color('title', ['#FEF2D1', '#FBD1A3', '#FB8974', '#E24549', '#B9001D', '#7C0907'])
					.opacity('value')
					.tooltip('name*confirm*suspect*heal*dead')
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
