<script lang="ts">
    
    import Page from '@components/Page.svelte';
    import Board from './game/Board.svelte';
    import stateStore from '@src/stores/UltimateTicTac/game_store';

    import wasmModule from '@wasm/ultimate_tic_tac';
    let game = wasmModule.module.Game.new();

    let state = game.get_state();

    stateStore.update(_=>state);


</script>


<Page>
    <div class="w-screen h-full">
        <Board></Board>
    </div>
</Page>
