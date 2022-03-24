<template>
	<div class="section-2 pos-rel">
		<div class="area-for-bar"></div>
		<v-container class="ma-0" fill-height fluid>
			<v-row align="center" justify="center">
				<v-col cols="2" offset="1" align="center" justify="center"> </v-col>
				<v-col align="center" justify="center" cols="6">
					<h1 class="pt-5 font-bebas font-white">My Journey</h1>
				</v-col>
				<v-col cols="2" offset="1" align="center" justify="center"> </v-col>

				<v-col cols="6">
					<v-timeline :dense="$vuetify.breakpoint.smAndDown">
						<v-timeline-item color="purple lighten-2" fill-dot right small>
							<template v-slot:opposite>
								<img
									src="@/assets/ksa.jpg"
									alt="face"
									width="100%"
									class="border-round"
								/>
							</template>
							<v-card>
								<v-card-title class="purple lighten-2">
									<v-icon dark size="42" class="mr-4"> mdi-school </v-icon>
									<h2 class="text-h6 white--text font-weight-light">
										KSA science high school
									</h2>
								</v-card-title>
								<v-container>
									<v-row>
										<v-col cols="12">
											My three years of phenomenal teachers across the
											disciplines pushed me to expand, challenge, and adjust my
											worldview.
										</v-col>
									</v-row>
								</v-container>
							</v-card>
						</v-timeline-item>

						<v-timeline-item color="amber lighten-1" fill-dot left small>
							<template v-slot:opposite>
								<img
									src="@/assets/kaist.jpg"
									alt="face"
									width="50%"
									class="border-round"
								/>
							</template>
							<v-card>
								<v-card-title class="amber lighten-1 justify-end">
									<h2 class="text-h6 mr-4 white--text font-weight-light">
										KAIST
									</h2>
									<v-icon dark size="42" class="mr-4"> mdi-laptop </v-icon>
								</v-card-title>
								<v-container>
									<v-row>
										<v-col cols="12">
											<strong>B.S. in Computer science.</strong> <br />I learned
											how to articulate my ideas through code, and the basics of
											computer science
										</v-col>
									</v-row>
								</v-container>
							</v-card>
						</v-timeline-item>
					</v-timeline>
				</v-col>
				<v-col cols="6">
					<v-timeline :dense="$vuetify.breakpoint.smAndDown">
						<v-timeline-item color="cyan lighten-2" fill-dot right small>
							<template v-slot:opposite>
								<img
									src="@/assets/ucsc.jpg"
									alt="face"
									width="80%"
									class="border-round"
								/>
							</template>
							<v-card>
								<v-card-title class="cyan lighten-1">
									<v-icon dark size="42" class="mr-4"> mdi-earth </v-icon>
									<h2 class="text-h6 white--text font-weight-light">
										UCSC exchange student
									</h2>
								</v-card-title>
								<v-container>
									<v-row>
										<v-col cols="12">
											While communicating with foreign students, I gained
											confidence in communication in the software development
											process.
										</v-col>
									</v-row>
								</v-container>
							</v-card>
						</v-timeline-item>

						<v-timeline-item color="red lighten-1" fill-dot left>
							<template v-slot:opposite>
								<img
									src="@/assets/sunset2.jpg"
									alt="face"
									width="50%"
									class="border-round"
								/>
							</template>
							<v-card>
								<v-card-title class="red lighten-1 justify-end">
									<h2 class="text-h4 mr-4 white--text font-weight-light">
										...and Future
									</h2>
									<v-icon dark size="42"> mdi-star-four-points </v-icon>
								</v-card-title>
								<v-container>
									<v-row>
										<v-col cols="12">
											I will always persue passions, be crafty, lovable,
											systematic, and relentless.
										</v-col>
									</v-row>
								</v-container>
							</v-card>
						</v-timeline-item>
					</v-timeline>
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
.section-2 {
	background-color: #ac92eb;
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
</style>
