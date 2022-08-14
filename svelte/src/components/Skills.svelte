<script lang="ts">
    import SkillCard from "./Skills/SkillCard.svelte";
    import Browser from "@icons/browser.svelte";
    import Science from "@icons/science.svelte";
    import Chip from '@icons/chip.svelte'
</script>

<div class="bg-gray-600">

<div class="flex justify-center w-screen">

<div class="
    grid xl:grid-cols-3 lg:grid-cols-1 lg:w-full md:w-full m-10
    max-w-screen-5xl
    -translate-y-44
">

    <SkillCard>
        <Browser slot="icon"/>
        <h2 slot="title">
            Fullstack Web Development
        </h2>
        <p slot="summary">
            I love creating functional, pleasurable, and rich web applications that can bring my ideas into the world. 
        </p>

        <h3 slot="list1">
            Languages I've used:
        </h3>

        <p slot="list1-vals">
            HTML, CSS, Javascript, SQL, TypeScript, PHP
        </p>

        <h3 slot="list2">
            Technologies I know:
        </h3>

        <ul slot="list2-vals">
            <!-- Frameworks -->
            <li>Svelte</li>
            <li>Vue</li>
            <li>Meteor</li>

            <!-- Databases -->
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostGreSQL</li>

            <!-- Styling frameworks -->
            <li>Tailwind</li>
            <li>Bootstrap</li>

            <!-- Misc -->
            <li>WebAssembly</li>
            <li>Node</li>
            <li>Express</li>

        </ul>

    </SkillCard>

    <SkillCard>
        <Science slot="icon"/>
        <h2 slot="title">
            Machine learning
        </h2>

    </SkillCard>

    <SkillCard>
        <Chip slot="icon"/>
        <h2 slot="title">
            Low-level Programming
        </h2>

    </SkillCard>


</div>
</div>
</div>