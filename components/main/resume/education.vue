<template>
        <div class="flex flex-col justify-center m-10">
            <div class="flex items-center gap-2">
                <UIcon name="heroicons-outline:book-open" class="w-8 h-8 text-[#cca636]" />
                <span class="text-2xl font-semibold">Education</span>
            </div>
            <div class="relative  mt-10 pl-6">
                <div v-for="info in education" :key="info.title" class="relative mb-10">
                    <div class="absolute -left-[15px] top-2 w-6 h-6 bg-[#cca636] rounded-full border-4 border-white shadow-md"></div>
                    <div class="bg-[#181818] p-5 rounded-lg shadow-md">
                        <span class="text-lg font-semibold">{{ info.title }}</span>
                        <span class="text-gray-400 block">{{ info.date }}</span>
                        <span class="text-gray-400 block">{{ info.university }}</span>
                    </div>
                </div>
            </div>
        </div>
</template>
<script setup>
import { ref } from "vue";

const education = ref([
    {
        university: "Cairo University, Faculty of Computers and Information",
        date: "2020 - 2024",
        title: "Bachelor's Degree in Computer Science - Cairo University"
    }
]);
</script>

<style scoped>
.border-l-4 {
    position: relative;
}
</style>