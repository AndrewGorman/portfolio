<template>
    <div id="app">
        <router-view />
        <main-navigation />
        <!--<tag-container />-->
    </div>
</template>
<script>
    import MainNavigation from './components/MainNavigation';
    // import TagContainer from './components/TagContainer';

    export default {
        name: 'App',
        components: {
            // TagContainer,
            MainNavigation,
        },
    };
</script>

<style lang="sass">
    @import '@/styles/master.sass'
    @import '@/styles/variables.sass'
    @import 'styles/pattern.min.css'

    .particles-js-canvas-el
        z-index: 0
        position: fixed
        top: 0
        min-height: 100vh

    .portfolio-container
        z-index: 1
        position: relative

    .silentbox-item img
        max-width: 15rem
        border-radius: 5px

        &:hover
            filter: drop-shadow(5px 5px 5px black)

    #silentbox-overlay
        top: 4rem !important
        height: calc(100% - 4rem) !important

    #silentbox-overlay__background
        background-color: rgba(0, 0, 0, 0.9) !important

    #silentbox-overlay__container img
        border-radius: 5px

    #silentbox-gallery
        margin-bottom: 2rem
</style>
