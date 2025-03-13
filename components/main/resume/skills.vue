<template>
    <div class="flex flex-col justify-center m-10">
        <div class="flex items-center gap-2">
            <UIcon name="heroicons-outline:book-open" class="w-8 h-8 text-[#cca636]" />
            <span class="text-2xl font-semibold">Skills</span>
        </div>
        <div class="p-10 shadow-xl flex flex-col gap-5">
            <div class="space-y-3">
                <span class="font-bold text-lg ">HTML+CSS</span>
                <UProgress :value="95" color="yellow" />
            </div>
            <div class="space-y-3">
                <span class="font-bold text-lg ">JavaScript</span>
                <UProgress :value="90" color="yellow" />
            </div>
            <div class="space-y-3">
                <span class="font-bold text-lg ">Vue.js + Nuxt.js</span>
                <UProgress :value="85" color="yellow" />
            </div>
            <div class="space-y-3">
                <span class="font-bold text-lg ">Node.js + Express.js + MongoDB + PostgresSQL</span>
                <UProgress :value="80" color="yellow" />
            </div>
            <div class="space-y-3">
                <span class="font-bold text-lg ">Figma</span>
                <UProgress :value="96" color="yellow" />
            </div>
            <div class="space-y-3">
                <span class="font-bold text-lg ">C++ </span>
                <UProgress :value="90" color="yellow" />
            </div>
            <div class="space-y-3">
                <span class="font-bold text-lg ">Python </span>
                <UProgress :value="90" color="yellow" />
            </div>

        </div>
    </div>
</template>
