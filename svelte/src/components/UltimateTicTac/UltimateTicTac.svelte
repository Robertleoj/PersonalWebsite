<script lang="ts">
    
    import Page from '@components/Page.svelte';
    import Game from './game/Game.svelte';
    import wasmModule from '@wasm/ultimate_tic_tac';
    import gameStore, {makeState} from '@src/stores/UltimateTicTac/game_store';


    let game = wasmModule.module.Game.new();

    $gameStore = makeState(game, wasmModule.memory.memory);

</script>


<Page>
    <div class="w-screen h-full">
        <Game/>
    </div>
</Page>
