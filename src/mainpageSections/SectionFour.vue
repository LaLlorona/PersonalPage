<template>
	<div class="section-4 pos-rel full-screen">
		<v-row
			class="fill-height ma-0 pa-0"
			align="center"
			justify="center"
			no-gutters
		>
			<v-col cols="4" class="fill-height">
				<video
					id="video"
					controls
					autoplay
					loop
					muted
					class="ma-0 pa-0 fill-current_container"
				>
					<source src="@/assets/donut.mp4" type="video/mp4" />
				</video>
			</v-col>
			<v-col cols="4">
				<v-img
					src="@/assets/cycle1_compose.png"
					class="fill-current_container mx-0 pa-0"
				></v-img>
			</v-col>
			<v-col cols="4">
				<v-img
					src="@/assets/drawing2.jpg"
					class="fill-current_container mx-0 pa-0"
				>
				</v-img>
			</v-col>
		</v-row>
		<!-- <div class="d-inline-flex pos-abs full-screen" style="overflow: hidden">
			<video id="video" controls autoplay loop muted class="ma-0 pa-0">
				<source src="@/assets/donut.mp4" type="video/mp4" />
			</video>

			
		
		</div> -->

		<div class="d-flex align-center justify-center pos-abs full-screen">
			<v-row align="center" justify="center">
				<v-col cols="12" align="center" justify="center">
					<div class="white--text text--lighten-1 text-h2 font-mosaic">
						I also love 3D art
					</div>
				</v-col>
				<v-col cols="12" align="center" justify="center">
					<div class="white--text text--lighten-1 text-h4 font-caveat">
						Except for computer science, I love making beautiful art
					</div>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		getBrowserInnerHeight() {
			return window.innerHeight;
		},
		getBrowserInnerWidth() {
			return window.innerWidth;
		},
	},
};
</script>

<style scoped>
.section-4 {
	background-color: orange;
}

.full-screen {
	height: 100vh;
	width: 100vw;
}

.pos-abs {
	position: absolute;
	top: 0px;
	left: 0px;
}

.pos-rel {
	position: relative;
}

.right {
	flex: 1;
	background-color: orange;
}

.font-mosaic {
	font-family: 'Lobster', cursive !important;
}

.font-caveat {
	font-family: 'Caveat', cursive !important;
}

.fill-current_container {
	height: 100%;
	width: 100%;
	object-fit: contain;
}
</style>
