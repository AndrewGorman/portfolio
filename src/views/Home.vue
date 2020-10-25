<template>
    <div class="portfolio-container pattern-diagonal-stripes-xl">
        <ProjectCard
            id="devpoker"
            title="DevPoker"
            date="In beta"
            tagline="Streamline your Agile sprint planning process"
        >
            <h5>The motivation:</h5>
            <p>My development team faced a bottleneck in our sprint planning meetings when we decided to start weighing
                issues late 2019. This bottleneck was present while we were all in the office but once we switched to
                being a remote team in March of 2020 - the bottleneck became even more apparent.
                <br />
                <br />
                During a planning session, our sprint leader would have GitLab issues open to view the issue
                being discussed and weighed, a document with a list of the issues to be weighed, Zoom to see and
                communicate with the team, and an online voting app. This process, while ultimately effective, was very
                slow and manual. I knew there had to be a way to streamline this process while still getting the value
                out of weighing issues. <br />Enter DevPoker.
            </p>
            <h5>The Project</h5>
            <p>
                DevPoker is an online sprint planning tool that (for now) focuses primarily on the weighing of issues
                through a multiplayer interface! DevPoker interfaces directly with GitLab (Jira and Github integrations
                in process) to pull in a milestone and associated issues for weighing. Each issue is presented to the
                team along with voting cards, eliminating the need to have more than one window open and removing the
                manual part of the process, resulting in a faster and more productive sprint planning meeting!
                <br /><br />
                While testing the public beta, our sprint planning meeting length significantly decreased,
                while our number of weighed issues per meetings rose slightly.
            </p>
            <h5>The tech</h5>
            <p>DevPoker was built using the following technologies & frameworks:
            <ul>
                <li>Frontend: Vue JS</li>
                <li>Backend: Django</li>
                <li>Local Development: Docker Compose</li>
            </ul>
            </p>
            <h5>TL;DR</h5>
            <p>DevPoker make sprint planning go brrrr*</p>
            <p>* Translation: Your sprint planning can be much shorter as well as being more effective and productive
                when
                you employ DevPoker in your sessions!</p>
        </ProjectCard>
        <ProjectCard
            title="Project 2"
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
