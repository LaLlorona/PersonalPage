const commonStore = {
	namespaced: true,
	state: {
		currentMainpageSection: 1,
	},

	mutations: {
		updateCurrentMainpageSection(state, payload) {
			state.currentMainpageSection = payload;
		},
	},
};

export default commonStore;
