<template>
    <div class="flex flex-col justify-center m-10">
        <div class="flex items-center gap-2">
            <UIcon name="heroicons-outline:book-open" class="w-8 h-8 text-[#cca636]" />
            <span class="text-2xl font-semibold">Experiences</span>
        </div>
        <div class="relative  mt-10 pl-6">
            <div v-for="info in experiences" :key="info.title" class="relative mb-10">
                <div class="absolute -left-[15px] top-2 w-6 h-6 bg-[#cca636] rounded-full border-4 border-white shadow-md"></div>
                <div class="bg-[#181818] p-5 rounded-lg shadow-md">
                    <span class="text-lg font-semibold">{{ info.title }}</span>
                    <span class="text-gray-400 block">{{ info.date }}</span>
                    <span class="text-gray-400 block">{{ info.description }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const experiences = ref([
    {
        title:"TechlandBS Company",
        date:"05/2025 - current",
        description:`As a full-stack developer, I’ve continuously expanded my skill set, not only in front-end and back-end technologies but also by gaining valuable insights into business operations and client needs. This blend of technical and business knowledge allows me to build solutions that are both effective and aligned with real-world goals.`
    },
    {
        title:"Sure Global Technology Company",
        date:"2023 - 2024",
        description:`These experiences honed my skills in front-end development, backend integration, and database 
                    management. I collaborated effectively with teams to ensure project milestones were met on time and 
                    within budget. This role enabled me to strengthen my ability to innovate solutions, troubleshoot 
                    technical issues, and deliver high-quality, user-friendly websites tailored to client specifications.`
    },
    {
        title:"CodSoft",
        date:"07/2023 - 08/2024",
        description:`I secured an internship at Cod Soft, where I gained experience in both front-end and back-end 
                    development. During this internship, I worked on projects that involved creating responsive and user
                    friendly interfaces using HTML, CSS, and JavaScript for front-end development. Simultaneously, I also 
                    gained proficiency in back-end technologies such as Node.js and MongoDB, enabling me to implement 
                    robust server-side functionalities and database management systems. This hands-on experience 
                    enhanced my skills in full-stack development and prepared me for real-world software engineering 
                    challenges. `
    },
    {
        title:"PT Group",
        date:"2018 - 2020",
        description:`I worked in PT Group Network Engineering. `
    },
    {
        title:"Freelance",
        date:"2024 - current",
        description:`Successfully completed multiple freelance projects, delivering high-quality web applications.  
                    Worked with various technologies, including Vue.js, Node.js, Express.js, and Nuxt.js. Ensured. 
                    a responsive and user-friendly UI/UX using Tailwind CSS and Vue.js. Managed backend logic, database 
                        operations, and API development for seamless application performance. `
    },
]);
</script>

<style scoped>
.border-l-4 {
position: relative;
}
</style>