<template>
    <div class="desktop-tag-container">
        <b-button variant="outline-light">Filter by Timeline</b-button>
        <b-button variant="outline-light">Filter by Tags</b-button>
    </div>
</template>

<script>
    export default {
        name: 'MainNavigation',
        data() {
            return {
                timelineChecked: true,
                tagsChecked: false,
            };
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

    .desktop-tag-container
        height: 4rem
        background-color: $light-black
        top: 4rem
        right: 0
        left: 0
        padding: 1rem
        position: fixed
        border-bottom: 1px solid $dark-black

    @media (max-width: $phone-breakpoint)
        .desktop-tag-container
            flex-direction: column
            height: 7rem
            top: 7rem

</style>
