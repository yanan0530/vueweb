import Vue from 'vue'
import ElementUI from 'element-ui';
import '@/assets/element-variables.scss'
import App from './App.vue'
import G2 from "@antv/g2"
Vue.use(ElementUI, {
	size: 'small',
	zIndex: 3000
});
import router from './router'
import store from './store'
Vue.use(G2)
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
