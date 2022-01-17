import MainPage from '@/views/MainPage.vue';

import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);
const routes = [
	{
		path: '/',
		redirect: '/main',
	},

	{
		path: '/main',
		name: 'main',
		component: MainPage,
	},
];
const router = new VueRouter({
	mode: 'history',
	routes,
});

// testing

export default router;
