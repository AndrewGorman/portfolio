<template>
    <div class="desktop-nav-container">
        <h5 class="namemark">Andrew Gorman <span class="divider">|</span> Portfolio</h5>
        <div class="right-nav-container">
            <a
                class="nav-item"
                href="https://www.andrewgorman.dev/"
            >
                Home
            </a>
            <a
                class="social-icon"
                target="_blank"
                rel="noopener"
                href="https://www.github.com/andrewgorman/"
            >
                <font-awesome-icon
                    size="2x"
                    :icon="['fab', 'github']"
                />
            </a>
            <a
                class="social-icon"
                href="mailto:andrew@andrewgorman.dev"
            >
                <font-awesome-icon
                    size="2x"
                    :icon="['fal', 'envelope']"
                />
            </a>

            <a
                class="social-icon"
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/andrew-gorman/"
            >
                <font-awesome-icon
                    size="2x"
                    :icon="['fab', 'linkedin-in']"
                />
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainNavigation',
        data() {
            return {};
        },
        computed: {
            portfolioURL() {
                return process.env.VUE_APP_PORTFOLIO_LINK;
            },
        },
        watch: {
            showingMenu() {
                if (this.showingMenu) {
                    document.documentElement.style.overflow = 'hidden';
                } else {
                    document.documentElement.style.overflow = 'auto';
                }
            },
        },
        methods: {
            setActive(location) {
                this.active = location;
            },
            onItemChanged(event, currentItem) {
                String.prototype.trim = function() {
                    return String(this).replace(/^(.)*#/g, '');
                };
                this.active = currentItem.href.trim();
            },
            onToggle(state) {
                this.showingMenu = state;
            },
            itemClicked() {
                this.$el.querySelector('.hamburger').click();
            },
        },
    };
</script>

<style scoped lang="sass">
    @import '@/styles/variables.sass'

    .desktop-nav-container
        position: fixed
        display: flex
        height: 4rem
        background-color: $primary
        top: 0
        right: 0
        left: 0
        align-items: center
        justify-content: left
        padding: 1rem
        border-bottom: 1px solid white
        z-index: 1000

        .namemark
            margin: auto auto auto 2rem

            .divider
                margin: auto 0.5rem auto 0.5rem

        .right-nav-container
            position: fixed
            right: 0
            display: inline-flex

            .social-icon
                margin: 1rem
                color: white

                &:hover
                    color: darken(white, 25%)
                    text-decoration: none

            .nav-item
                margin: auto 1rem auto 1rem
                font-size: 1.2rem

                &:hover
                    color: darken(white, 25%)
                    text-decoration: none


    @media (max-width: $phone-breakpoint)
        .desktop-nav-container
            flex-direction: column
            height: 7rem

            .namemark
                margin: auto auto 0.5rem auto
                font-size: 1.2rem

            .right-nav-container
                position: relative
                right: 0
                display: inline-flex

                .social-icon
                    margin: 1rem
                    color: white
                    font-size: 0.8rem

                .nav-item
                    margin: auto 1rem auto 1rem
                    font-size: 1.1rem

</style>
