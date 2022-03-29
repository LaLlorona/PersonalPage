<template>
	<div class="section-4 pos-rel">
		<div class="d-inline-flex pos-abs full-screen" style="overflow: hidden">
			<video id="video" controls autoplay loop muted class="ma-0 pa-0">
				<source src="@/assets/donut.mp4" type="video/mp4" />
			</video>
			<v-img
				src="@/assets/cycle1_compose.png"
				:width="getBrowserInnerWidth / 3"
				:height="getBrowserInnerHeight"
			></v-img>
			<v-img
				src="@/assets/drawing2.jpg"
				:width="getBrowserInnerWidth / 3"
				:height="getBrowserInnerHeight"
			>
			</v-img>

			<!-- area for background movie, and pictures -->
			<!-- <v-row no-gutters>
				<v-col cols="2">
					
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

			<!-- <video
				id="video"
				controls
				autoplay
				loop
				muted
				width="50%"
				class="ma-0 pa-0 flex-grow-1"
			>
				<source src="@/assets/donut.mp4" type="video/mp4" />
			</video> -->

			<!-- <div class="right">
				<v-row>
					<v-img src="@/assets/cycle1_compose.png"></v-img>
					<v-img src="@/assets/drawing2.jpg"></v-img>
				</v-row>

				<v-row no-gutters>
					<v-col class="flex-shrink-1" cols="6">
						<v-img
							src="@/assets/cycle1_compose.png"
							:height="getBrowserInnerHeight"
						></v-img>
					</v-col>
					<v-col style="background-color: yellow" class="flex-shrink-1">
						<v-img
							src="@/assets/drawing2.jpg"
							:height="getBrowserInnerHeight"
						></v-img>
					</v-col>
				</v-row>
			</div> -->
		</div>

		<!-- <div class="d-flex align-center justify-center pos-abs full-screen">
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
		</div> -->
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
</style>
