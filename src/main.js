import Vue from 'vue'
import ElementUI from 'element-ui';
import '@/assets/element-variables.scss'
import App from './App.vue'
// import G2 from "@antv/g2"


import Api from "@/api/index.js"

Vue.use(ElementUI, {
	size: 'small',
	zIndex: 3000
});
import router from './router'
import store from './store'
import './registerServiceWorker'

router.beforeEach((to, from, next) => {
	if (store.getters.token||to.name=="login") {
		next()
	} else {
		next({ path: '/login' });
	}
})
Vue.prototype.$Api = Api
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

/* eslint-disable no-console */
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/serviceWorker.js').then(registration => {
//       console.log('SW registered: ', registration)
//     }).catch(registrationError => {
//       console.log('SW registration failed: ', registrationError)
//     })
//   })
// }
