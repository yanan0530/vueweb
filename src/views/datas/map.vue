<template>
	<div>
		<el-divider content-position="left">山东</el-divider>
		<shan-dong-map></shan-dong-map>
		<el-divider content-position="left">中国地图</el-divider>
		<china-map></china-map>
		<el-divider content-position="left">地图</el-divider>
		<div id="map"></div>
		<el-divider content-position="left">柱图</el-divider>
		<div id="c1"></div>
	</div>
</template>

<script>
	import {
		getWordMapApi,
		getMapApi
	} from "@/api/datas.js"
	import ShanDongMap from "@/views/datas/ShanDongMap.vue"
	import ChinaMap from "@/views/datas/ChinaMap.vue"
	import DataSet from "@antv/data-set"
	export default {
		components: {
			ShanDongMap,
			ChinaMap
		},
		data() {
			return {
				wordMapUrl: "/upload/world.geo.json",
				data: [{
						genre: 'Sports',
						sold: 275
					},
					{
						genre: 'Strategy',
						sold: 115
					},
					{
						genre: 'Action',
						sold: 120
					},
					{
						genre: 'Shooter',
						sold: 350
					},
					{
						genre: 'Other',
						sold: 150
					}
				]
			}
		},
		mounted() {
			this.g2Chart()
			this.getMap()
		},
		methods: {
			g2Chart() {
				const chart = new G2.Chart({
					container: "c1",
					width: 600,
					height: 300
				})
				chart.source(this.data)
				chart.interval().position('genre*sold').color('genre')
				chart.tooltip(true)
				chart.render()
			},
			getMap() {
				getMapApi(this.wordMapUrl).then(res => res.data)
					.then(mapData => {
						this.drawMap(mapData)
					})
			},
			drawMap(data) {
				const mapChart = new G2.Chart({
					container: "map",
					forceFit: true, //图表的宽度自适应开关
					height: 500,
					padding: [55, 20]
				})
				mapChart.tooltip({
					showTitle: false
				})
				mapChart.scale({
					longitude: {
						sync: true
					},
					latitude: {
						sync: true
					}
				});
				mapChart.axis(false);
				mapChart.legend('trend', {
					position: 'left'
				});
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
				const userData = [{
						name: 'Russia',
						value: 86.8
					},
					{
						name: 'China',
						value: 106.3
					},
					{
						name: 'Japan',
						value: 94.7
					},
					{
						name: 'Mongolia',
						value: 98
					},
					{
						name: 'Canada',
						value: 98.4
					},
					{
						name: 'United Kingdom',
						value: 97.2
					},
					{
						name: 'United States of America',
						value: 98.3
					},
					{
						name: 'Brazil',
						value: 96.7
					},
					{
						name: 'Argentina',
						value: 95.8
					},
					{
						name: 'Algeria',
						value: 101.3
					},
					{
						name: 'France',
						value: 94.8
					},
					{
						name: 'Germany',
						value: 96.6
					},
					{
						name: 'Ukraine',
						value: 86.3
					},
					{
						name: 'Egypt',
						value: 102.1
					},
					{
						name: 'South Africa',
						value: 101.3
					},
					{
						name: 'India',
						value: 107.6
					},
					{
						name: 'Australia',
						value: 99.9
					},
					{
						name: 'Saudi Arabia',
						value: 130.1
					},
					{
						name: 'Afghanistan',
						value: 106.5
					},
					{
						name: 'Kazakhstan',
						value: 93.4
					},
					{
						name: 'Indonesia',
						value: 101.4
					}
				];

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
					trend: {
						alias: '每100位女性对应的男性数量'
					}
				});
				userView.polygon()
					.position('longitude*latitude')
					.color('trend', ['#F51D27', '#0A61D7'])
					.opacity('value')
					.tooltip('name*trend')
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
