import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import G2 from "@antv/g2"
import echarts from "echarts"
Vue.use(ElementUI, {
	size: 'small',
	zIndex: 3000
});
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
// Vue.prototype.$G2 = G2
Vue.prototype.$echarts = echarts



Vue.use(G2)
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
