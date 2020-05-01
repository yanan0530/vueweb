import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routers.js'

Vue.use(Router)
//路由二次点击不抱错
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return routerPush.call(this, location).catch(err => err)
}

const router = new Router({
	mode: 'history',
	routes
})
router.addRoutes([{
	path: "/",
	redirect: {
		name: 'vegetables_vegetables'
	},
}, {
	path: "/login",
	name: "login",
	component: () => import("@/views/login/login.vue"),
}])



export default router
