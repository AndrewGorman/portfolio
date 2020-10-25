<template>
    <div
        id="particles-background"
        class="portfolio-container">
        <ProjectCard
            id="devpoker"
            title="DevPoker"
            date="In Beta"
            tagline="Streamline your Agile sprint planning process"
        >
            <h5>The Motivation:</h5>
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
            <h5>The Tech</h5>
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
            id="musiclink"
            title="MusicLink"
            date="In Development"
            tagline="Revolutionize how you share music"
        >
            <h5>The Motivation:</h5>
            <p>I love sharing music with friends. It’s a great way to communicate, learn more about each other, and grow
                friendship. Unfortunately in this day and age, there is no clear leader in the music streaming industry.
                Your friends likely are split across more than one streaming service, making sharing music very tedious.
                You either have to send just a title and artist for them to manually look up on their service, or you
                send them a link to a service that they don’t use, also incurring a manual lookup on their part.
                <br /><br />
                It shouldn’t be difficult to share music with friends - regardless of what streaming service they use.
                This is the problem I set out to solve with MusicLink. When you send a song in a MusicLink chat, the
                link is automagically transformed into whatever service the other user has - with no work on your part.
            </p>
            <h5>The Project</h5>
            <p>MusicLink is a cross-platform messaging app that has Android & iOS apps, as well as a web app. It strives
                to provide a great and secure messaging service while also allowing users to easily share songs without
                being concerned about what streaming service the other user may be a subscriber of. As of now, MusicLink
                only supports Spotify and Apple Music due to market share and API restrictions. </p>
            <h5>The Tech</h5>
            <p>MusicLink was built using the following technologies & frameworks:
            <ul>
                <li>Mobile Frontend: React Native</li>
                <li>Web frontend: Vue JS</li>
                <li>Backend: TBD</li>
            </ul>
            </p>
            <h5>TL;DR</h5>
            <p>Share music with anyone, from any device, without worrying about what service they use.</p>
        </ProjectCard>
        <ProjectCard
            id="monstar-trucks"
            title="MonstAR Trucks"
            date="In Planning"
            tagline="An interactive multiplayer AR experience on iOS"
        >
            <h5>Project Status:</h5>
            <p>This project is still in the early planning stages, check back soon!</p>
        </ProjectCard>
        <ProjectCard
            id="pocket-guide"
            title="Timmy's Pocket Guide"
            date="Summer 2020"
            tagline="Quickly and easily look up ACNH information using your voice"
        >
            <h5>The Motovation</h5>
            <p>This Alexa Skill was built in a one night hackathon after I became tired of looking up game trivia
                manually!</p>

            <h5>The Project</h5>
            <p>Timmy's Pocket Guide is a voice interface that can answer simple queries about the game Animal Crossings:
                New Horizons. It's nothing fancy as I built it in just a few hours but it can handle questions such as:
                "How much is a Barred Knifejaw worth?"
            </p>
            <h5>The Tech</h5>
            <p>Timmy's Pocket Guide was built on the Alexa Skills platform as a proof of concept. No future development
                or updates are currently anticipated
            </p>
        </ProjectCard>
        <ProjectCard
            id="portfolio"
            title="Personal Portfolio"
            date="In Development"
            tagline="An interactive timeline of my personal projects"
        >
            <h5>Project Status:</h5>
            <p>This project is still in development, check back soon!</p>
        </ProjectCard>
        <ProjectCard
            id="personal-website"
            title="Personal Website"
            date="In Development"
            tagline="A web resume highlighting my experience"
        >
            <h5>Project Status:</h5>
            <p>This project is still in development, check back soon!</p>
        </ProjectCard>
        <ProjectCard
            id="upstream"
            title="Upstream Gardens"
            date="Redesign complete: Fall 2019"
            tagline="A website for a family owned pick-your-own berry patch and orchard"
        >
            <h5>Project status</h5>
            <p>This project is complete but I haven't done a writeup on it yet. Check back soon!</p>
        </ProjectCard>
        <ProjectCard
            id="made-events"
            title="MADE for this. Events"
            date="Feburary 2020"
            tagline="A website for an event planning service"
        >
            <h5>Project status</h5>
            <p>This project is complete but I haven't done a writeup on it yet. Check back soon!</p>
        </ProjectCard>
        <ProjectCard
            id="pella-cinemas"
            title="Pella Cinemas"
            date="Spring 2018"
            tagline="A custom wordpress cinema management platform"
        >
            <h5>Project status</h5>
            <p>This project is complete but I haven't done a writeup on it yet. Check back soon!</p>
        </ProjectCard>
        <ProjectCard
            id="upstream-legacy"
            title="Upstream Gardens"
            date="Spring 2016"
            tagline="First version of Upstream Gardens released"
            :last-item="true"
        >
            <h5>Project status</h5>
            <p>This project card has been superseded by <a href="#upstream">Upstream Gardens Redesign</a></p>
        </ProjectCard>
    </div>
</template>

<script>
    /* eslint-disable */
    import ProjectCard from '../components/ProjectCard';
    import particleConfig from '../assets/particles.json';

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
            require('particles.js');
            this.$nextTick(() => {
                particlesJS('particles-background', particleConfig);
            });
        },
        data() {
            return {
                currentAboutTab: 2,
                hoveringAbout: false,
                tabTitles: ['Education', 'Work Experience', 'Skills & Proficiencies'],
            };
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

