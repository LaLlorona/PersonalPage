<template>
	<div class="section-3 pos-rel">
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
				<li>
					<ul>
						section2
					</ul>
					<ul>
						section2
					</ul>
					<ul>
						section2
					</ul>
					<ul>
						section2
					</ul>
					<ul>
						section2
					</ul>
				</li>
			</div>
		</div>

		<div class="d-flex align-center justify-center pos-abs full-screen">
			<!-- area for text -->
			<div>
				this is where you type introductionthis is where you type
				introductionthis is where you type introductionthis is where you type
				introductionthis is where you type introduction this is where you type
				introductionthis is where you type introductionthis is where you type
				introduction this is where you type introductionthis is where you type
				introductionthis is where you type introductionthis is where you type
				introduction
			</div>
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
.section-3 {
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

.right {
	flex: 1;
	background-color: yellow;
}
</style>
