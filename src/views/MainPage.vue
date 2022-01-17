<template>
	<div>
		<mainpage-bar></mainpage-bar>

		<v-container fill-height fluid class="section-1">
			<v-row align="center" justify="center">
				<v-card>
					<v-card-subtitle class="pb-0 text-center">
						hey, my name is
					</v-card-subtitle>
					<v-card-subtitle class="pt-0 text-center">
						Kyungmo Kim
					</v-card-subtitle>
				</v-card>
			</v-row>
		</v-container>

		<v-container fill-height fluid class="section-2">
			<div class="area-for-bar"></div>

			<v-row align="start" justify="center">
				<v-card> hey, my name is kyungmo kim </v-card>
			</v-row>
		</v-container>

		<v-container fill-height fluid class="section-3">
			<div class="area-for-bar"></div>
			<v-container class="pa-0 ma-0" fill-height fluid>
				<v-row align="center" justify="center">
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
						dignissimos velit officia. Voluptatibus dicta placeat possimus
						molestiae quasi earum id accusantium consequatur beatae nesciunt
						illum quo non labore eligendi ipsa vel aperiam provident maiores
						nobis, dolorem laborum quae ea voluptatem. Saepe vel ullam illo
						necessitatibus deleniti eos, impedit harum. Laborum beatae, hic modi
						ab cupiditate architecto obcaecati enim pariatur quasi mollitia
						ipsum esse quia sint expedita suscipit rerum consequatur quidem
						ducimus tempora sit? Eaque fugiat quia quas sequi debitis itaque
						amet similique numquam tempora. Voluptatibus dolorem numquam odit
						placeat eius, rem iste? Ipsum quia id tempora dolorem molestias
						laboriosam assumenda?
					</div>
				</v-row>
			</v-container>

			<!-- <v-card
				class="d-flex justify-center mb-6 align-center"
				:color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
				flat
				tile
			>
				<v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
					justify-center
				</v-card>
			</v-card> -->
		</v-container>

		<div class="section-4">
			<div class="area-for-bar"></div>
			<v-container class="ma-0" fill-height fluid>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
				dignissimos velit officia. Voluptatibus dicta placeat possimus molestiae
				quasi earum id accusantium consequatur beatae nesciunt illum quo non
				labore eligendi ipsa vel aperiam provident maiores nobis, dolorem
				laborum quae ea voluptatem. Saepe vel ullam illo necessitatibus deleniti
				eos, impedit harum. Laborum beatae, hic modi ab cupiditate architecto
				obcaecati enim pariatur quasi mollitia ipsum esse quia sint expedita
				suscipit rerum consequatur quidem ducimus tempora sit? Eaque fugiat quia
				quas sequi debitis itaque amet similique numquam tempora. Voluptatibus
				dolorem numquam odit placeat eius, rem iste? Ipsum quia id tempora
				dolorem molestias laboriosam assumenda?
			</v-container>
		</div>
		<div class="section-5">
			<div class="area-for-bar"></div>
			<v-container class="ma-0" fill-height fluid>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
				dignissimos velit officia. Voluptatibus dicta placeat possimus molestiae
				quasi earum id accusantium consequatur beatae nesciunt illum quo non
				labore eligendi ipsa vel aperiam provident maiores nobis, dolorem
				laborum quae ea voluptatem. Saepe vel ullam illo necessitatibus deleniti
				eos, impedit harum. Laborum beatae, hic modi ab cupiditate architecto
				obcaecati enim pariatur quasi mollitia ipsum esse quia sint expedita
				suscipit rerum consequatur quidem ducimus tempora sit? Eaque fugiat quia
				quas sequi debitis itaque amet similique numquam tempora. Voluptatibus
				dolorem numquam odit placeat eius, rem iste? Ipsum quia id tempora
				dolorem molestias laboriosam assumenda?
			</v-container>
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
</style>
