<template>
    <div class="px-8" >
        <h1 class="text-4xl font-bold sm:mt-0 mt-10" data-aos="fade-left">Portfolio</h1>
        <div class="flex items-center justify-center" v-if="!projects">
            <span>Loading...</span>
        </div>
        <div class="grid sm:grid-cols-3 grid-cols-2 items-center gap-6 justify-center mt-5" v-else data-aos="fade-up">
            <div v-for="(item,index) in projects" :key="item.id" class="relative"  >
                <img :src="item.img"@mouseover="show[index] = true"  @mouseleave="show[index] = false"  alt="" class="rounded-2xl h-56 object-cover hover:scale-110 hover:rotate-2 hover:opacity-50 transition-all hover:cursor-pointer" >
                <UIcon  v-if="show[index]" name="heroicons:link" class="  w-10 h-10 text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
                <div class="flex flex-col my-2">
                    <span>{{ item.title }}</span>
                    <span class="text-gray-500">Web development</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const { $supabase } = useNuxtApp();
const projects = ref([]);
let show=ref({})
const fetchProjects = async () => {
    try {
        const { data, error } = await $supabase.from('Projects').select('*');
        if (error) {
            console.error("Error fetching projects:", error);
        } else {
            projects.value = data;
        }
    } catch (err) {
        console.log("Unexpected error:", err);
    } 
};

onMounted(fetchProjects);
console.log(projects.value)
</script>
