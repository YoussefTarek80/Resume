<template>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-32 md:gap-0 sm:gap-0 sm:grid-cols-1">
        <div class="sm:col-span-1 col-span-3  sm:p-20 p-10 ">
            <sideBar />
        </div>
        <div class="col-span-3  sm:p-20 p-10">
            <NuxtLayout name="main">
                <slot />
            </NuxtLayout>
        </div>
    </div>
</template>
<script setup> 
    useHead({
        link:[{
            rel:'preconnect',
            href:'https://fonts.googleapis.com'
        },
        {
            rel:'stylesheet',
            href:'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sigmar&display=swap'
        }]
    })

</script>
<style>
body{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: black;
    color: white;
}
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: rgb(173, 173, 41); 
    border-radius: 10px;
}

::-webkit-scrollbar-track {
    background: black;
}

* {
    scrollbar-width: thin;
    scrollbar-color: rgb(167, 167, 28) black;
}
</style>