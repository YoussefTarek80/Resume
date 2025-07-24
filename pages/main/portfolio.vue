<template>
    <div class="px-8">
        <h1 class="text-4xl font-bold sm:mt-0 mt-10" data-aos="fade-left">Portfolio</h1>

        <div class="flex gap-4 shadow-2xl py-5 mt-5" data-aos="fade-up">
            <span 
                class="cursor-pointer hover:bg-[#cca736ab] p-3 rounded-md" 
                :class="{ 'bg-[#cca736ab]': SelectPage === 'projects' }"
                @click="SelectPage = 'projects'"
            >
                Frontend Projects
            </span>
            <span 
                class="p-3 cursor-pointer hover:bg-[#cca736ab] rounded-md" 
                :class="{ 'bg-[#cca736ab]': SelectPage === 'FrontendMentor' }"
                @click="SelectPage = 'FrontendMentor'"
            >
                Frontend Mentor Projects
            </span>
            <span 
                class="p-3 cursor-pointer hover:bg-[#cca736ab] rounded-md" 
                :class="{ 'bg-[#cca736ab]': SelectPage === 'BackendProjects' }"
                @click="SelectPage = 'BackendProjects'"
            >
                Backend Projects
            </span>
        </div>

        <div  class="grid sm:grid-cols-3 grid-cols-2 items-center gap-6 justify-center mt-5"  v-if="filteredProjects.length" data-aos="fade-up">
            <div v-for="(item, index) in filteredProjects" :key="index" class="relative w-full" >
                <a :href="item.link"  target="_blank"  class="w-full" >
                    <img 
                        :src="item.img" 
                        alt="Image" 
                        loading="lazy"
                        class="rounded-2xl w-full sm:h-56 object-cover hover:scale-110 hover:rotate-2 hover:opacity-50 transition-all hover:cursor-pointer bg-black/50 "
                    >
                </a>
                <div class="flex flex-col my-2">
                    <span>{{ item.title }}</span>
                    <span class="text-gray-500">Web development</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed,onMounted } from 'vue';
import { useNuxtApp } from '#app';

const SelectPage = ref('projects');
const show = ref({});


const projects = ref([
    { img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1752241127/Screenshot_2025-07-11_043820_wmihjk.png', title: "Jadarat",link:"https://jadarat.co/" },
    { img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1741795076/eco_nbva8q.jpg', title: "E-commerce Application" },
    { img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1741794939/Dashboard_frombb.jpg', title: "Education System" },
    { img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1741793015/Photo_1_q8e2dj.png', title: "Teramatech Company landing page" },
    { img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1741798315/GroupIcon.77a08625_exuubh.png', title: "Coaching Application" },
    { img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1741798037/Quiz_1_xpcuzp.png', title: "Simple Quiz App" },
    { img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1741797783/Yasuo_store_sprgp6.png', title: "Store Application" },
    { img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1741799050/book_mokhuz.png', title: "Book Shop Application" },
    { img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1741798912/Screenshot_2025-03-12_190037_akjyl0.png', title: "Finance Application" },
    { img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1741812170/Resume_hri1hx.jpg', title: "My old portfolio" },
]);


const FrontendMentorProjects = ref([
    { 
        img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1743073822/Screenshot_2025-03-27_130907_kauljb.png', 
        title: "This is my profile on Frontend Mentor and iam solving a lot of challenges ",
        link:'https://www.frontendmentor.io/profile/YoussefTarek80' 
    },
]);

const BackendProjects=ref([
    { 
        img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1753350451/360_F_299621124_vutDKbNwRJG6poJRQQIMYfsc4tJCTO5E_rtwafi.jpg', 
        title: "NileGarden Ecommerce",
        link:'' 
    },
    { 
        img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1753350451/360_F_299621124_vutDKbNwRJG6poJRQQIMYfsc4tJCTO5E_rtwafi.jpg',  
        title: "Jadarat System",
        link:'' 
    },
    { 
        img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1753350451/360_F_299621124_vutDKbNwRJG6poJRQQIMYfsc4tJCTO5E_rtwafi.jpg',  
        title: "ERB System for PT Group company",
        link:'' 
    },
    { 
        img: 'https://res.cloudinary.com/ddv3ockma/image/upload/v1753350451/360_F_299621124_vutDKbNwRJG6poJRQQIMYfsc4tJCTO5E_rtwafi.jpg',  
        title: "Real State project ",
        link:'' 
    },
])

const filteredProjects = computed(() => {
    if(SelectPage.value==='projects') return projects.value;
    else if(SelectPage.value==='FrontendMentor') return FrontendMentorProjects.value;
    else return BackendProjects.value;
}
);
</script>
