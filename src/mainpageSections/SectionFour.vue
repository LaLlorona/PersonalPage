<template>
	<div class="section-4 pos-rel">
		<div class="d-inline-flex pos-abs full-screen">
			<!-- area for background movie, and pictures -->
			<!-- <v-row no-gutters>
				<v-col cols="2">
					<video
						id="video"
						controls
						autoplay
						loop
						muted
						:height="getBrowserInnerHeight"
						width="auto"
						class="ma-0 pa-0"
					>
						<source src="@/assets/donut.mp4" type="video/mp4" />
					</video>
				</v-col>
				<v-col cols="2">
					<v-img
						src="@/assets/boxing_close.png"
						:height="getBrowserInnerHeight"
					></v-img>
				</v-col>
				<v-col cols="2">
					<v-img
						src="@/assets/drawing2.jpg"
						:height="getBrowserInnerHeight"
					></v-img>
				</v-col>
			</v-row> -->

			<video
				id="video"
				controls
				autoplay
				loop
				muted
				:height="getBrowserInnerHeight"
				width="auto"
				class="ma-0 pa-0"
			>
				<source src="@/assets/donut.mp4" type="video/mp4" />
			</video>

			<div class="right">
				<v-row no-gutters>
					<v-col cols="2">
						<v-img
							src="@/assets/cycle1_compose.png"
							:height="getBrowserInnerHeight"
						></v-img>
					</v-col>
					<v-col cols="2" style="background-color: yellow">
						<v-img
							src="@/assets/drawing2.jpg"
							:height="getBrowserInnerHeight"
						></v-img>
					</v-col>
				</v-row>
			</div>
		</div>

		<div class="d-flex align-center justify-center pos-abs full-screen">
			<!-- area for text -->
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
</style>
