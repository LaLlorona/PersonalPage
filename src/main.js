import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from '@/store/index';
import vuetify from './plugins/vuetify';
import VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false;

new Vue({
	vuetify,
	router,
	VueScrollTo,
	store,
	render: h => h(App),
}).$mount('#app');
