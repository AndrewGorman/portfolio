<template>
	<div class="portfolio-container pattern-diagonal-stripes-xl">
		<div class="card-container">
			<h1>Thanks for checking out my portfolio!</h1>
			<br />
			<p>I'm currently working on building an all new interactive portfolio experience from the ground up. Check back soon!</p>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'Home',
    components: {},
    computed: {
      portfolioURL() {
        return process.env.VUE_APP_PORTFOLIO_LINK;
      },
    },
    mounted() {
      //setInterval(() => {if (!this.hoveringAbout) {this.increaseAboutTab()}}, 10000);
    },
    data() {
      return {
        currentAboutTab: 2,
        hoveringAbout: false,
        tabTitles: ['Education', 'Work Experience', 'Skills & Proficiencies'],
      };
    },
    methods: {
      increaseAboutTab() {
        if (this.currentAboutTab === 2) {
          this.currentAboutTab = 0;
        } else {
          this.currentAboutTab += 1;
        }
      },
      decreaseAboutTab() {
        if (this.currentAboutTab === 0) {
          this.currentAboutTab = 2;
        } else {
          this.currentAboutTab -= 1;
        }
      },
    },
  };
</script>
<style lang="sass">
	@import '@/styles/variables.sass'

	.portfolio-container
		min-width: 100vw
		min-height: calc(100vh - 5rem)
		display: flex
		justify-content: center
		align-items: center

		.card-container
			border-radius: 10px
			width: 800px
			height: 500px
			color: white
			background-color: $light-black
			display: flex
			flex-direction: column
			justify-content: center
			align-items: center
			text-align: center
			padding: 4rem
			border: 1px solid $white

			p
				margin-top: 2rem
				font-size: 1.5rem

		&.pattern-diagonal-stripes-xl
			color: lighten($dark-black, 1%)

	@media (max-width: $phone-breakpoint)
		.portfolio-container
			.card-container
				height: fit-content
				margin: 4rem
				padding: 2rem

				h1
					font-size: 1.8rem

				p
					font-size: 1.2rem

	@media (max-height: 700px)
		.portfolio-container
			margin-top: 5rem

			.card-container
				height: fit-content
				margin: 4rem
				padding: 2rem

				h1
					font-size: 1.8rem

				p
					font-size: 1.2rem

	//@media (max-width: $medium-breakpoint)

	//@media (min-width: $large-breakpoint)

</style>
