<script>
    import BrandIcon from '@icons/BrandIcon.svelte';
    import Linkedin from '@icons/linkedin.svelte';
    import Github from '@icons/github.svelte';
</script>

<div class="fixed top-0 left-0 w-screen h-16 m-0
            bg-gray-900 text-white
            flex flex-row justify-between items-center">
    

    <!-- Main logo -->
    <a href='/' class="group ml-2 hover:p-1 transition-all">
        <div class="flex flex-row">
            <div class="flex relative items-center justify-center 
                h-16 w-16 px-2 py-2
                text-primary">
                <svg
                    viewBox="0 0 128 128"
                >
                <circle 
                    class="
                        text-pink-50 group-hover:text-pink-200 transition-all
                    "
                    cx="62.5" 
                    cy="62.5" 
                    r="60" 
                    fill="currentColor"
                />
                <BrandIcon cls={"text-gray-800"}/>
                </svg>
            </div>
            <div class="
                h-16 flex items-center 
                text-2xl text-pink-50
                group-hover:text-pink-200 transition-all
            ">
                <p>Róbert Leó Jónsson</p>
            </div>
        </div>
    </a>

    <div class="flex flex-row mr-4">

        <a href="https://www.linkedin.com/in/r%C3%B3bert-le%C3%B3-0a01a219b/"
            class="mx-2 w-8 h-8"
        >
            <svg 
                class="text-pink-50 hover:text-pink-200 hover:-translate-y-1 transition-all"
                fill="currentColor" 
                viewBox="0 0 30 30" 
            >
                <Linkedin/>
            </svg>
        </a>
        <a href="https://github.com/Robertleoj"
            class="w-8 h-8"
        >
            <svg 
                class="text-pink-50 hover:text-pink-200 hover:-translate-y-1 transition-all" 
                fill="currentColor" 
                viewBox="0 0 30 30" 
            > 
                <Github/>
            </svg>
        </a>
    </div>



</div>
