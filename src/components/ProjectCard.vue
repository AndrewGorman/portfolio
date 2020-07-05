<template>
    <div class="wrapper">
        <div class="card-container">
            <h1>{{ title }}</h1>
            <p class="date">{{ date }}</p>
            <p class="tagline">{{ tagline }}</p>
            <p class="description">{{ description }}</p>
        </div>
        <div
            v-if="!lastItem"
            class="connector">

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
            tagline: {
                type: String,
                required: true,
            },
            description: {
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
        justify-content: center
        align-items: center
        text-align: center

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

            .tagline
                margin-bottom: 1rem

            .description
                text-align: left

        .connector
            height: 69px
            width: 0
            border-right: 2px solid $white

    @media (max-width: $phone-breakpoint)
        .wrapper
            .card-container
                height: fit-content
                padding: 2rem
                margin: 0 4rem 0 4rem
                max-width: 90vw

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
