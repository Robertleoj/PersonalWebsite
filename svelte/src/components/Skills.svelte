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
    -translate-y-32
">

    <SkillCard>
        <Browser slot="icon"/>
        <h2 slot="title">
            Fullstack Web Development
        </h2>
        <p slot="summary">
            bla
        </p>

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