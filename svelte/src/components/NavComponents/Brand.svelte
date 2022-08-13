

<script lang="ts">

</script>

<div class="icon w-full h-full">
    <slot />
</div>

<style>
.icon :global(.logo-text) {
    fill: black;
}

.icon :global(.logo-circle) {
    fill: #f9a8d4;
}

.icon:hover :global(.logo-circle) {
    fill: #ec4899
}



</style>