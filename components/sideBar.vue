<template>
    <header class="bg-[#181818] 2xl:w-96 xl:w-80 lg:w-full md:w-full w-full max-h-screen rounded-3xl " >
        <nav class="sm:p-20 p-5 flex sm:items-center flex-col gap-5" data-aos="fade-up">
            <div class="bg-[#2E2E2E] flex items-center justify-center rounded-3xl p-5 w-40 mx-auto ">
                <img src="../assets/1689165533439.jfif" alt="" class="w-32 rounded-full">
            </div>
            <div class="info flex flex-col gap-5">
                <div class="flex flex-col items-center gap-5 justify-center">
                    <span class="text-3xl font-bold">Youssef Tarek</span>
                    <UBadge class="bg-[#2E2E2E]">FullStack Developer</UBadge>
                </div>
                <hr class="border-[#353535]">
                <div>
                    <informations></informations>
                </div>
            </div>
        </nav>
    </header>
</template>
<script setup></script>
<style scoped>
header {
    position: relative;
    background-color: transparent;
    z-index: 10;
}

header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../assets/image-removebg-preview2.png');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.1; 
    z-index: -1;
}
</style>