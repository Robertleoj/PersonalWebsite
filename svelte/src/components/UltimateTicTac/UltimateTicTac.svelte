<script lang="ts">
    
    import Page from '@components/Page.svelte';
    import Board from './game/Board.svelte';
    import wasmModule from '@wasm/ultimate_tic_tac';
    import gameStore, {updateGame} from '@src/stores/UltimateTicTac/game_store';

    let game = wasmModule.module.Game.new();

    updateGame(game, wasmModule.memory.memory);

</script>


<Page>
    <div class="w-screen h-full">
        <Board></Board>
    </div>
</Page>
