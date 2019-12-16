import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routers.js'
Vue.use(Router)
const router = new Router({
	mode: 'history',
	routes
})

router.addRoutes([{
	path: "/",
	redirect: '/excel/splicing',
}])
export default router
