<script lang="ts">
    import {range} from '@src/utils/base_utils';
    import SmallBoard from '@tictac/game/SmallBoard.svelte'
    import stateStore from '@src/stores/UltimateTicTac/game_store';
    import wasmModule from '@wasm/ultimate_tic_tac';

    let noForce: boolean, finished:boolean;
    stateStore.subscribe((v:any) => {
        finished = v.state.game_result !== wasmModule.module.GameResult.RUnfinished;
        noForce = !v.state.has_force_board 
            && !finished
    })

    let range3 = range(3);

</script>

<div class="
    px-5 pb-20
    w-full h-full
">
    <div class="
        aspect-square
        mx-auto
        max-h-[800px]
        border-8
        {noForce?'border-green-500':'border-pink-400'}
    ">

        {#each range3 as br}
            <div class="
                w-full h-1/3
                grid grid-cols-3
            ">
                {#each range3 as bc}
                    <SmallBoard 
                        coords={{row:br, col:bc}}
                    ></SmallBoard>
                {/each}
            </div>
        {/each}

    </div>
</div>