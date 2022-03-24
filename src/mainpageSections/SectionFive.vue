<template>
	<div class="section-5 pos-rel">
		<div class="area-for-bar"></div>
		<v-container class="ma-0" fill-height fluid>
			<v-row align="center" justify="center" class="mt-10">
				<v-col cols="12" align="center" justify="center">
					<div class="font-yanone text-h5">
						I'm Korean-bred, small country in the Asia.
					</div>

					<div class="font-yanone">However,</div>
				</v-col>
				<v-col cols="2" align="center" justify="center">
					<v-divider class="test"></v-divider>
				</v-col>
				<v-col align="center" justify="center" cols="5" class="text-h2">
					<div class="font-amatic">my mind wanders</div>
					<div class="font-amatic">from coast to coast,</div>
					<div class="font-amatic">from continent to continent</div>
				</v-col>
				<v-col cols="2" align="center" justify="center">
					<v-divider class="test"></v-divider>
				</v-col>
				<v-col cols="12" align="center" justify="center">
					<div class="font-yanone text-h4">
						Let's connect, communicate, and grow together.
					</div>
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
.section-5 {
	background-color: #ffce54;
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

.line-word {
	display: flex;
	flex-direction: row;
}

.line-word:before,
.line-word:after {
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

.test {
	border-width: 4px !important;
	border-color: black !important;
}

.font-amatic {
	font-family: 'Amatic SC', cursive !important;
}

.font-yanone {
	font-family: 'Yanone Kaffeesatz', sans-serif !important;
}
</style>
