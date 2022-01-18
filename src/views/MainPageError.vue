<template>
	<div>
		<mainpage-bar></mainpage-bar>

		<v-container fill-height fluid class="section-1">
			<v-row align="center" justify="center">
				<v-card outlined color="transparent">
					<div class="pb-0 text-center text-h4">
						<i>Hey, I'm</i>
					</div>
					<div
						class="font-dohyeon pt-0 text-center font-weight-black name-title"
					>
						KYUNGMOKIM
					</div>
				</v-card>
			</v-row>
		</v-container>

		<v-container
			fluid
			fill-height
			class="section-2 pa-0 ma-0 d-flex flex-row align-start"
		>
			<div class="flex-container">
				<div>
					<video
						id="video"
						controls
						autoplay
						loop
						muted
						:height="getBrowserInnerHeight"
						width="auto"
					>
						<source src="@/assets/donut.mp4" type="video/mp4" />

						Your browser does not support the video tag.
					</video>
				</div>

				<div class="right" justify="start" align="start">
					right side of movie on section 2
				</div>
			</div>

			<v-container
				fill-height
				fluid
				class="front_div d-flex justify-center align-center"
			>
				<v-card width="50%" class="my-auto">
					middle card of the section2
				</v-card>
			</v-container>
		</v-container>

		<!-- <v-container fill-height fluid class="section-2">
			<div class="area-for-bar"></div>

			<v-row align="start" justify="center">
				<v-card> hey, my name is kyungmo kim </v-card>
			</v-row>
		</v-container> -->

		<v-container
			fill-height
			fluid
			class="section-3 pa-0 ma-0 d-flex flex-row align-start"
		>
			<div>
				<video
					controls
					autoplay
					loop
					muted
					:height="getBrowserInnerHeight"
					width="auto"
				>
					<source src="@/assets/donut.mp4" type="video/mp4" />

					Your browser does not support the video tag.
				</video>
			</div>
			<div class="right" justify="start" align="start">section 3</div>
		</v-container>

		<v-container
			fill-height
			fluid
			class="section-4 pa-0 ma-0 d-flex flex-row align-start"
		>
			<div class="flex-container">
				<div>
					<video
						id="video"
						controls
						autoplay
						loop
						muted
						:height="getBrowserInnerHeight"
						width="auto"
					>
						<source src="@/assets/donut.mp4" type="video/mp4" />

						Your browser does not support the video tag.
					</video>
				</div>

				<div class="right" justify="start" align="start">section4</div>
			</div>

			<v-container
				fill-height
				fluid
				class="front_div d-flex justify-center align-center"
			>
				<v-card width="50%" class="my-auto"> section4 veniam? </v-card>
			</v-container>
		</v-container>

		<!-- <div class="section-4">
			<v-container class="ma-0 pa-0" fill-height fluid> </v-container>
		</div> -->
		<div class="section-5">
			<div class="area-for-bar"></div>
			<v-container class="ma-0" fill-height fluid> section 5 </v-container>
		</div>
	</div>
</template>

<script>
import MainpageBar from '@/components/MainpageBar.vue';
import VueScrollTo from 'vue-scrollto';
export default {
	components: {
		MainpageBar,
	},
	data: function () {
		return {
			msg: 'asd',
			scrollPosition: 0,
			active: null,
			lastActive: null,
			lastScrollTop: window.pageYOffset || document.documentElement.scrollTop,
			scrollStarted: false,
			down: true,
		};
	},
	mounted() {
		this.active = 1;
		this.lastActive = 1;
		window.addEventListener('scroll', this.handleScroll);
	},

	computed: {
		getBrowserInnerHeight() {
			return window.innerHeight;
		},
	},
	methods: {
		handleScroll(e) {
			let vm = this;
			let options = {
				container: 'body',
				easing: 'ease-in',
				offset: 0,
				cancelable: false,
				onStart: function () {
					document.body.style.overflow = 'hidden';
				},
				onDone: _.debounce(function (element) {
					if (vm.down) vm.active++;
					else vm.active--;
					vm.scrollStarted = false;
					document.body.style.overflow = 'auto';
				}, 100),
				x: false,
				y: true,
			};
			let st = window.scrollY;
			if (st > this.lastScrollTop) {
				this.down = true;
			} else {
				this.down = false;
			}
			this.lastScrollTop = st;
			if (!this.scrollStarted) {
				this.scrollStarted = true;
				if (this.down) {
					this.down = true;
					if (this.active === 1) {
						VueScrollTo.scrollTo('.section-2', 500, options);
					} else if (this.active === 2) {
						VueScrollTo.scrollTo('.section-3', 500, options);
					} else if (this.active === 3) {
						VueScrollTo.scrollTo('.section-4', 500, options);
					} else if (this.active === 4) {
						VueScrollTo.scrollTo('.section-5', 500, options);
					}
				} else {
					if (this.active === 2) {
						VueScrollTo.scrollTo('.section-1', 500, options);
					} else if (this.active === 3) {
						VueScrollTo.scrollTo('.section-2', 500, options);
					} else if (this.active === 4) {
						VueScrollTo.scrollTo('.section-3', 500, options);
					} else if (this.active === 5) {
						VueScrollTo.scrollTo('.section-4', 500, options);
					}
				}
			}
		},
	},
};
</script>

<style>
* {
	padding: 0;
	margin: 0;
}

.section-1,
.section-2,
.section-3,
.section-4,
.section-5 {
	min-height: 100vh;
}

.section-1 {
	background-color: rgb(99, 76, 76);
}

.section-2 {
	background-color: rgb(71, 126, 71);
}

.section-3 {
	background-color: rgb(68, 68, 116);
}

.section-4 {
	background-color: rgb(116, 116, 74);
}

.section-5 {
	background-color: rgb(124, 112, 90);
}

.area-for-bar {
	height: 64px;
}

.font-dohyeon {
	font-family: 'Do Hyeon', sans-serif !important;
}

.name-title {
	font-size: 100px;
}

.video-fit-size {
	min-height: 100vh;
}

.right {
	flex: 1;
}

.front_div {
	position: relative;

	bottom: 55vh;
}

.flex-container {
	display: flex;

	background-color: DodgerBlue;
}
</style>
