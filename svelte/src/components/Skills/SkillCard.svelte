<div class="
    m-2
">
<div class="
    flex flex-col 
    rounded-2xl border-2 border-pink-400
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
            border-pink-400 border-4
            group hover:border-0 hover:bg-pink-400
            flex items-center justify-center
            hover:-translate-y-3
            transition-all
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
                group-hover:text-gray-900 transition-all
                text-pink-400
                h-12 w-12
            "
        >
            <slot name="icon"/>
        </svg>
    </div>

    <div class="
        text-2xl font-extrabold text-pink-50 mt-7
    ">   
        <slot name="title"/>
    </div>

    <div class="
        text-xl text-pink-50 mt-10
    ">
        <slot name="summary"/>
    </div>

    <div class="
        text-pink-300 text-2xl mt-14 
    ">
        <slot name="list1"/>
    </div>

    <div class="
        text-pink-50
        text-xl 
        mt-5
    ">
        <slot name="list1-vals"/>
    </div>

    <div class="
        text-pink-300 text-2xl mt-14 mb-4
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

