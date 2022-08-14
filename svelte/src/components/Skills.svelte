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
    max-w-screen-2xl
    -translate-y-44
">

    <SkillCard>
        <Browser slot="icon"/>
        <h2 slot="title">
            Web Development
        </h2>
        <p slot="summary">
            I love creating functional, pleasurable, and rich web applications that can bring my ideas into the world. 
        </p>

        <h3 slot="list1">
            Languages I've used:
        </h3>

        <p slot="list1-vals">
            HTML, CSS, Javascript, SQL, TypeScript, PHP, Dart
        </p>

        <h3 slot="list2">
            Technologies I know:
        </h3>

        <ul slot="list2-vals">
            <!-- Frameworks -->
            <li>Svelte</li>
            <li>Vue</li>
            <li>Meteor</li>
            <li>Flutter</li>

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

        <p slot="summary">
            I like to choose, craft, and fine-tune models to extract valuable knowledge from data.
        </p>

        <h3 slot="list1">
            Techniques I can apply
        </h3>

        <p slot="list1-vals">
            Deep Learning, Classic ML Algorithms, Data Visualization 
        </p>

        <h3 slot="list2">
            Tools I've used:
        </h3>

        <ul slot="list2-vals">
            <li>Python</li>
            <li>Numpy</li>
            <li>Pandas</li>
            <li>MatPlotLib</li>
            <li>PyTorch</li>
            <li>TensorFlow</li>
            <li>Scipy</li>
        </ul>

    </SkillCard>

    <SkillCard>
        <Chip slot="icon"/>
        <h2 slot="title">
            Low-level Programming
        </h2>

        <p slot="summary">
            I love working close to the metal, creating fast and reliable low-level programs and tools.
        </p>

        <h3 slot="list1">
            Languages I know:
        </h3>

        <p slot="list1-vals">
            C++, C, Rust, Java
        </p>

        <h3 slot="list2">
            Things I've coded:
        </h3>

        <ul slot="list2-vals">
            <li>Web Servers</li>
            <li>Web Clients</li>
            <li>Compression Tool</li>
            <li>Video Games</li>
            <li>Command-line tools</li>
            <li>Python Modules</li>
            <li>WebAssembly Modules</li>
            <li>Wav file utility</li>
            <li>AI algorithms</li>
        </ul>

    </SkillCard>


</div>
</div>
</div>