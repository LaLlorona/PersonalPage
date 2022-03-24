<template>
	<v-app-bar app color="transparent" dark inverted-scroll elevation="0">
		<v-toolbar-title class="font-dohyeon">KYUNGMO KIM</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn-toggle
			tile
			color="deep-purple accent-3"
			group
			v-model="currentMainpageSection"
		>
			<v-btn
				plain
				v-for="section in mainSections"
				:key="section"
				class="disable-events"
			>
				{{ section }}
			</v-btn>
		</v-btn-toggle>
	</v-app-bar>
</template>

<script>
export default {
	data: () => ({
		collapseOnScroll: true,
		mainSections: ['Hello', 'My Journey', 'My Interest', 'Hobby', 'Thank you'],
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

<style scoped>
.disable-events {
	pointer-events: none;
}

.font-dohyeon {
	font-family: 'Do Hyeon', sans-serif !important;
}
</style>
