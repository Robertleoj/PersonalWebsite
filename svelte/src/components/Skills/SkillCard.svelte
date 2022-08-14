<div class="
    m-2
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
            w-20 h-20
        "
    >
        <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            class="
                text-gray-900
                h-12 w-12
            "
        >
            <slot name="icon"/>
        </svg>
    </div>

    <div class="
        text-2xl font-bold text-pink-50 my-10
    ">   
        <slot name="title"/>
    </div>

    <div class="
        text-xl text-pink-50 my-10
    ">
        <slot name="summary"/>
    </div>

    <div class="
        text-pink-300 text-2xl mt-10 mb-4
    ">
        <slot name="list1"/>
    </div>

    <div class="
        text-pink-50
        text-xl 
        mb-10
    ">
        <slot name="list1-vals"/>
    </div>

    <div class="
        text-pink-300 text-2xl mt-10 mb-4
    ">
        <slot name="list2"/>
    </div>

    <div class="
        text-pink-50
        text-xl 
    ">
        <slot name="list2-vals"/>
    </div>




</div>
</div>

