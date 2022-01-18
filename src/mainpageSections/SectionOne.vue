<template>
	<div class="section-1 pos-rel">
		<div class="d-flex pos-abs full-screen">
			<!-- area for background movie, and pictures -->

			<img
				src="@/assets/face.png"
				alt="face"
				:width="getBrowserInnerWidth"
				height="auto"
			/>
		</div>

		<div class="d-flex align-center justify-center pos-abs full-screen">
			<v-card outlined color="transparent">
				<div class="pb-0 text-center text-h4">
					<i>Hey, I'm</i>
				</div>
				<div class="font-dohyeon pt-0 text-center font-weight-black name-title">
					KYUNGMO KIM
				</div>
			</v-card>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		getBrowserInnerWidth() {
			return window.innerWidth;
		},
	},
};
</script>

<style scoped>
.section-1 {
	background-color: rgb(71, 126, 71);
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

.font-dohyeon {
	font-family: 'Do Hyeon', sans-serif !important;
}
</style>
