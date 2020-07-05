<template>
    <div class="portfolio-container pattern-diagonal-stripes-xl">
        <ProjectCard
            title="Thanks for visiting my portfolio!"
            date="da/te/date"
            tagline="tagline"
            description="I'm currently working on building an all new interactive portfolio experience from the ground up. Check back soon!"
        />
        <ProjectCard
            title="Thanks for visiting my portfolio!"
            date="da/te/date"
            tagline="tagline"
            description="I'm currently working on building an all new interactive portfolio experience from the ground up. Check back soon!"
        />
    </div>
</template>

<script>
    import ProjectCard from '../components/ProjectCard';

    export default {
        name: 'Home',
        components: {
            ProjectCard,
        },
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
        flex-direction: column
        justify-content: center
        align-items: center
        padding-top: 8rem

        &.pattern-diagonal-stripes-xl
            color: lighten($dark-black, 1%)

    @media (max-width: $phone-breakpoint)
        .portfolio-container
            padding-top: 10rem

    @media (max-height: 700px)
        .portfolio-container
            margin-top: 5rem

    //@media (max-width: $medium-breakpoint)

    //@media (min-width: $large-breakpoint)

</style>
