<template>
	<div>
		<mainpage-bar></mainpage-bar>

		<section-one></section-one>

		<div class="section-2 pos-rel">
			<div class="d-flex pos-abs full-screen">
				<!-- area for background movie, and pictures -->
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
					right side of movie on section 2 right side of movie on section 2right
					side of movie on section 2right side of movie on section 2right side
					of movie on section 2right side of movie on section 2
				</div>
			</div>

			<div class="d-flex align-center justify-center pos-abs full-screen">
				<!-- area for text -->
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
					beatae! Repudiandae doloribus natus eos quos voluptate labore quam
					tempora necessitatibus, porro accusamus facere magnam ipsum molestias
					autem consectetur mollitia vel voluptatibus. Repellat id rerum
					excepturi minus distinctio quis hic vero eligendi? Eveniet
					voluptatibus quasi mollitia nesciunt, reprehenderit excepturi tenetur
					corporis error qui vel vero unde consequuntur assumenda nihil totam
					est beatae quod alias facilis dolor, magni, explicabo magnam aliquid.
					Nulla sunt sapiente cum qui est ullam! Minima maxime porro perferendis
					magni animi iste modi harum sapiente est rerum velit eaque corrupti,
					voluptatum corporis sunt assumenda doloribus beatae sit omnis nihil!
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
					beatae! Repudiandae doloribus natus eos quos voluptate labore quam
					tempora necessitatibus, porro accusamus facere magnam ipsum molestias
					autem consectetur mollitia vel voluptatibus. Repellat id rerum
					excepturi minus distinctio quis hic vero eligendi? Eveniet
					voluptatibus quasi mollitia nesciunt, reprehenderit excepturi tenetur
					corporis error qui vel vero unde consequuntur assumenda nihil totam
					est beatae quod alias facilis dolor, magni, explicabo magnam aliquid.
					Nulla sunt sapiente cum qui est ullam! Minima maxime porro perferendis
					magni animi iste modi harum sapiente est rerum velit eaque corrupti,
					voluptatum corporis sunt assumenda doloribus beatae sit omnis nihil!
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
					beatae! Repudiandae doloribus natus eos quos voluptate labore quam
					tempora necessitatibus, porro accusamus facere magnam ipsum molestias
					autem consectetur mollitia vel voluptatibus. Repellat id rerum
					excepturi minus distinctio quis hic vero eligendi? Eveniet
					voluptatibus quasi mollitia nesciunt, reprehenderit excepturi tenetur
					corporis error qui vel vero unde consequuntur assumenda nihil totam
					est beatae quod alias facilis dolor, magni, explicabo magnam aliquid.
					Nulla sunt sapiente cum qui est ullam! Minima maxime porro perferendis
					magni animi iste modi harum sapiente est rerum velit eaque corrupti,
					voluptatum corporis sunt assumenda doloribus beatae sit omnis nihil!
				</div>
			</div>
		</div>

		<section-three></section-three>

		<div class="section-4">
			<div class="area-for-bar"></div>
			<v-container class="ma-0" fill-height fluid> section 4 </v-container>
		</div>
		<div class="section-5">
			<div class="area-for-bar"></div>
			<v-container class="ma-0" fill-height fluid> section5 </v-container>
		</div>
	</div>
</template>

<script>
import MainpageBar from '@/components/MainpageBar.vue';
import SectionOne from '@/mainpageSections/SectionOne.vue';
import SectionThree from '@/mainpageSections/SectionThree.vue';
import VueScrollTo from 'vue-scrollto';
export default {
	components: {
		MainpageBar,
		SectionOne,
		SectionThree,
	},
	data: function () {
		return {
			msg: 'asd',
			scrollPosition: 0,
			active: null,
			// lastActive: null,
			lastScrollTop: window.pageYOffset || document.documentElement.scrollTop,
			scrollStarted: false,
			down: true,
		};
	},
	mounted() {
		this.active = 1;
		// this.lastActive = 1;
		this.$store.commit('commonStore/updateCurrentMainpageSection', 1);
		window.addEventListener('scroll', this.handleScroll);
	},
	computed: {
		getBrowserInnerHeight() {
			return window.innerHeight;
		},
		getMainpageSectionOnStore() {
			return this.$store.state.commonStore.currentMainpageSection;
		},
	},
	watch: {
		getMainpageSectionOnStore(newValue, oldValue) {
			console.log(this.active);
			console.log(newValue);
			if (this.active != newValue) {
				VueScrollTo.scrollTo(`.section-${newValue}`, 500);
			}
			this.active = newValue;
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
					vm.$store.commit(
						'commonStore/updateCurrentMainpageSection',
						vm.active,
					);
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
			// if (this.active < 1) {
			// 	this.active = 1;
			// } else if (this.active > 5) {
			// 	this.active = 5;
			// }
			// VueScrollTo.scrollTo(`.section-${this.active + 1}`, 500, options);

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
/* * {
	padding: 0;
	margin: 0;
} */

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
	background-color: yellow;
}

.flex-container {
	display: flex;

	background-color: red;
}

.middle-screen {
	display: flex;
	align-items: center;
	justify-content: center;
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
</style>
