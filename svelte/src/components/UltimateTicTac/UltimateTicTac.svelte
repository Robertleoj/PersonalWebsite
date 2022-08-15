<script lang="ts">
    
    import Page from '@components/Page.svelte';
    import ttWasm from '@wasm/ultimate_tic_tac';

    let game = ttWasm.Game.new();

</script>


<Page>
    <pre>{game.str()}</pre>
</Page>
