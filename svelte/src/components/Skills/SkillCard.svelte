<div class="
    m-4
">
<div class="
    flex flex-col 
    rounded-2xl border-4 border-pink-400
    text-center
    items-center
    p-14
    bg-gray-900
    max-w-6xl
    m-auto
    h-full
">


    <div
        class="
            bg-pink-300
            flex items-center justify-center
            rounded-full
            w-32 h-32
        "
    >
        <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            class="
                text-gray-900
                h-24 w-24
            "
        >
            <slot name="icon"/>
        </svg>
    </div>

    <div class="
        text-5xl text-pink-50 m-10
    ">   
        <slot name="title"/>
    </div>

    <div class="
        text-3xl text-pink-50
    ">
        <slot name="summary"/>
    </div>




</div>
</div>

