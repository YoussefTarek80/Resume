<template>
    <div class="px-8">
        <h1 class="text-4xl font-bold sm:mt-0 mt-10" data-aos="fade-left">About me</h1>
        <div data-aos="fade-up">
            <div class=" text-gray-400 mt-4 ">
                <p>I am Youssef Tarek Salah, a graduate of Cairo University, Faculty of Computers and Information. I work as a Full-Stack Developer with extensive experience in developing web applications using the latest technologies.
                    I specialize in Vue.js and Nuxt. </p>
                    <p class="mt-4"> js for building interactive and high-performance user interfaces, with expertise in state management using Vuex. Additionally, I have strong experience in Node.js and Express.js for backend development and advanced skills in handling PostgreSQL for efficient database management.
                    I have worked in several software companies, which has given me the ability to collaborate with different teams, understand client needs, and transform them into comprehensive technical solutions. I always strive to develop scalable, innovative, and optimized applications that best meet user and business needs.</p>
            </div>
            <div class="sm:mt-10 mt-5 sm:py-0 py-5">
                <h2 class="font-bold text-2xl">What i'm Doing</h2> 
                <div class="flex flex-wrap justify-between items-center gap-2   my-2">
                    <div class="flex items-center space-x-3 bg-[#2E2E2E] p-6 rounded-2xl w-full">
                        <UIcon name="material-symbols:design-services" class="w-20 h-20 text-[#cca636]" />
                        <div class="flex flex-col">
                            <span class="font-semibold text-white">Web Design</span>
                            <span class="text-gray-400 text-sm">
                                The most modern and high-quality design made at a professional level
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3 p-6 rounded-2xl bg-[#2E2E2E] w-full">
                        <UIcon name="heroicons-outline:code" class="w-20 h-20 text-[#cca636]" />
                        <div class="flex flex-col">
                            <span class="font-semibold text-white">Web Development</span>
                            <span class="text-gray-400 text-sm">
                                Building high-performance, scalable, and modern web applications.
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script setup>
definePageMeta({
    layout: "default"
});
</script>