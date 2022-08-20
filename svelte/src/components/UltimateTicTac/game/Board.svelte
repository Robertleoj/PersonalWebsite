<script lang="ts">
    import {range} from '@src/utils/base_utils';
    import SmallBoard from '@tictac/game/SmallBoard.svelte'

    import stateStore from '@src/stores/UltimateTicTac/game_store';

    let range3 = range(3);

</script>

<div class="
    px-5 py-20
    w-full h-full
">
    <div class="
        aspect-square
        mx-auto
        max-h-[800px]
        bg-pink-400
        p-1
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