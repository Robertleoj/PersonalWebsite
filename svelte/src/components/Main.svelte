<script lang="ts">
    import Greet from "./Greet.svelte";
</script>

<Greet/>

<div class="flex justify-center w-screen bg-gray-100 pb-20">
    <div
        id="description"
        class="flex flex-col items-center justify-evenly px-20"
    >
        <h3 class="text-5xl font-bold leading-relaxed text-center py-10">
            Nice to meet you.
        </h3>

        <p 
            class="text-4xl leading-relaxed text-center"
        >
            Since I started programming, I've been obsessed. I've worked all around the web development stack, and beyond it. Now I'm focusing on finishing my Bachelor's degree in Discrete mathematics and Computer Science.
            <br><br>
            I'm a very fast learner, and constantly trying to learn more about my craft, improving my skills every day. There's nothing I enjoy more.
        </p>
    </div>

</div>


<style>
    #description {
        max-width: 2300px;
    }
</style>