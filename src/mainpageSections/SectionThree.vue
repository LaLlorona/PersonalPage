<template>
	<div class="section-3 pos-rel">
		<div class="area-for-bar"></div>
		<v-container class="ma-0" fill-height fluid>
			<v-row align="center" justify="center">
				<v-col cols="2" offset="1" align="center" justify="center"> </v-col>
				<v-col align="center" justify="center" cols="6">
					<h1 class="pt-5 font-bebas font-white">My INTEREST</h1>
				</v-col>
				<v-col cols="2" offset="1" align="center" justify="center"> </v-col>
			</v-row>
			<v-row>
				<v-col cols="3" offset="2" align="center" justify="center">
					<v-card height="100%">
						<v-card-title class="jinchung lighten-2">
							<v-icon dark size="42" class="mr-4"> mdi-school </v-icon>
							<h2 class="text-h6 white--text font-weight-light">
								Web development
							</h2>
						</v-card-title>
						<v-container>
							<v-row>
								<v-col cols="12">
									<v-img src="@/assets/logo.png" width="50%"></v-img>
									I'm interested in developing interactive front-end, especially
									using Vue.js
								</v-col>
							</v-row>
						</v-container>
					</v-card>
					<!-- <v-card>
						<div class="d-flex flex-no-wrap justify-space-between">
							<div>
								<v-card-title class="text-h5">Web development</v-card-title>

								<v-card-subtitle
									>I'm interested in developing interactive front-end
								</v-card-subtitle>

								<v-card-actions>
									<v-btn
										class="ml-2 mt-3"
										fab
										icon
										height="40px"
										right
										width="40px"
									>
										<v-icon>mdi-play</v-icon>
									</v-btn>
								</v-card-actions>
							</div>

							<v-avatar class="ma-3" size="125" tile>
								<v-img
									src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
								></v-img>
							</v-avatar>
						</div>
					</v-card> -->
				</v-col>
				<v-col cols="3" offset="2" align="center" justify="center">
					<v-card height="100%">
						<v-card-title class="jinchung lighten-2">
							<v-icon dark size="42" class="mr-4"> mdi-translate </v-icon>
							<h2 class="text-h6 white--text font-weight-light">
								Natural Language Processing
							</h2>
						</v-card-title>
						<v-container>
							<v-row>
								<v-col cols="12">
									<v-img src="@/assets/tf_logo.png" width="50%"></v-img>
									After 6 years of learning a second and third foreign language,
									I got interested in not only learning a new language, but also
									how to make a computer understand languages
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
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
.section-3 {
	background-color: #4fc1e8;
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
	background-color: yellow;
}

h1 {
	display: flex;
	flex-direction: row;
}

h1:before,
h1:after {
	content: '';
	flex: 1 1;
	border-bottom: 2px solid white;
	margin: auto;
}

.font-bebas {
	font-family: 'Bebas Neue', cursive;
	font-size: 80px !important;
}

.border-round {
	border-radius: 10%;
}

.font-white {
	color: white;
}

.theme--light.v-timeline:before {
	background: white;
}

.jinchung {
	background-color: #a0d568 !important;
}
</style>
