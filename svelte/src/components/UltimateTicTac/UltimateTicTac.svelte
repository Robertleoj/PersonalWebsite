<script lang="ts">
    
    import Page from '@components/Page.svelte';
    import Board from './game/Board.svelte';

    import wasmModule from '@wasm/ultimate_tic_tac';
    let game = wasmModule.module.Game.new();

</script>


<Page>
    <div class="w-screen h-full">
        <Board game={game}></Board>
    </div>
</Page>
