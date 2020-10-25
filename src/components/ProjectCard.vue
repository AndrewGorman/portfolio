<template>
    <div class="wrapper" :id="id">
        <div class="card-container">
            <h1>{{ title }}</h1>
            <h5 class="date">{{ date }}</h5>
            <br />
            <h3 class="tagline">{{ tagline }}</h3>
            <div class="body-content">
                <slot />
            </div>
        </div>
        <div
            v-if="!lastItem"
            class="connector">
        </div>
        <div v-else
        class="bottom-margin">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProjectCard',
        props: {
            title: {
                type: String,
                required: true,
            },
            date: {
                type: String,
                required: true,
            },
            id: {
                type: String,
                required: true,
            },
            tagline: {
                type: String,
                required: true,
            },
            tags: {
                type: Array,
                default: () => {
                    return [];
                },
            },
            lastItem: {
                type: Boolean,
                default: false,
            },
        },
        components: {},
        computed: {},
        mounted() {
        },
        data() {
            return {};
        },
        methods: {},
    };
</script>
<style lang="sass">
    @import '@/styles/variables.sass'
    .wrapper
        display: flex
        flex-direction: column
        justify-content: flex-start
        align-items: center
        text-align: center
        width: 80%
        max-width: 150rem
        z-index: 100

        .card-container
            border-radius: 10px
            width: 80%
            color: white
            background-color: $light-black
            display: flex
            flex-direction: column
            justify-content: flex-start
            align-items: center
            text-align: center
            padding: 2rem 4rem 4rem 4rem
            border: 1px solid $white

            .tagline
                margin-bottom: 1rem

            .body-content
                text-align: left
                min-width: 100%

                h5
                    font-size: 1.5rem

                p
                    font-size: 1.2rem

        .connector
            height: 69px
            width: 0
            border-right: 2px solid $white

        .bottom-margin
            margin-bottom: 4rem

    @media (max-width: $phone-breakpoint)
        .wrapper
            width: 100%

            .card-container
                height: fit-content
                padding: 2rem
                margin: 0 4rem 0 4rem
                max-width: 95vw

                h1
                    font-size: 1.8rem

                p
                    font-size: 1.2rem

    //@media (max-height: 700px)
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
