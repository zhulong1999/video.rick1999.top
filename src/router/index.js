import Vue from 'vue'
import VueRouter from 'vue-router'
// 影视首页
import Home from '../views/Home.vue'
//影视分类
const Type = ()=>import('../views/video/Type.vue');
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},{
		path:"/type",
		name:"Type",
		component:Type

	}

]

const router = new VueRouter({
	mode: 'history',
	// mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
