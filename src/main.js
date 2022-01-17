import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import vuetify from './plugins/vuetify';
import VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false;

new Vue({
	vuetify,
	router,
	VueScrollTo,
	render: h => h(App),
}).$mount('#app');
