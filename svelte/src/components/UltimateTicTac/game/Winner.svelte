<script lang="ts">
    import stateStore from '@src/stores/UltimateTicTac/game_store';
    import wasmModule from '@wasm/ultimate_tic_tac';
    
    let results = wasmModule.module.GameResult;

    let winner:string;

    stateStore.subscribe((v:any)=>{
        switch (v.state.game_result) {
            case results.RUnfinished:
                winner = 'unfinished';
                break;
            case results.RDraw:
                winner = 'draw';
                break;
            case results.RCross:
                winner = 'cross';
                break;
            case results.RCircle:
                winner = 'circle';
                break;
        }
    })
</script>

<div class="
    w-full text-black text-center
    py-10
    {winner==='unfinished'?'invisible':''}
">
    <h1 class='text-4xl'>
        {#if winner==='draw'}
            It's a draw!
        {:else if winner==="circle"}
            Circle won!
        {:else if winner==="cross"}
            Cross won!
        {:else}
            Boi
        {/if}
    </h1>
</div>