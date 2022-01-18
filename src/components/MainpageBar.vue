<template>
	<v-app-bar app color="transparent" dark inverted-scroll elevation="0">
		<v-app-bar-nav-icon></v-app-bar-nav-icon>
		<v-toolbar-title>Title</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn-toggle
			tile
			color="deep-purple accent-3"
			group
			v-model="currentMainpageSection"
		>
			<v-btn plain v-for="section in mainSections" :key="section">
				{{ section }}
			</v-btn>
		</v-btn-toggle>
	</v-app-bar>
</template>

<script>
export default {
	data: () => ({
		collapseOnScroll: true,
		mainSections: ['section1', 'section2', 'section3', 'section4', 'section5'],
	}),

	computed: {
		currentMainpageSection: {
			get: function () {
				return this.$store.state.commonStore.currentMainpageSection - 1;
			},
			// set: function (newValue) {
			// 	this.$store.commit(
			// 		'commonStore/updateCurrentMainpageSection',
			// 		newValue + 1,
			// 	);
			// },
		},
	},
};
</script>

<style></style>
