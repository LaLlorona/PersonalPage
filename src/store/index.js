import Vue from 'vue';
import Vuex from 'vuex';
import commonStore from './modules/common';
// import persistStore from './modules/persist';

// import chatCommonStore from './modules/chatCommon';
// import chatPersistStore from './modules/chatPersist';

// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		commonStore,
		// persistStore,
		// chatCommonStore,
		// chatPersistStore,
	},

	// plugins: [
	// 	createPersistedState({
	// 		paths: ['persistStore', 'chatPersistStore'],
	// 	}),
	// ],
});
