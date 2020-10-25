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
        z-index: 10
        position: fixed
        top: 0
        min-height: 100vh
</style>