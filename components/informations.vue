<template>
    <div v-for="(info, index) in information" :key="index">
        <div class="flex items-center space-x-3 mt-3 ">
            <div class="bg-[#211f20ac] p-2 rounded-md">
                <UIcon v-if="info.nameIcon" :name="info.nameIcon" class="bg-[#36322A] w-6 h-6 p-1 rounded"></UIcon>
            </div>
            <div class="flex flex-col">
                <span class="text-[#5C5C5C]">{{ Object.keys(info)[0] }}</span>
                <span class="truncate w-52 text-white">{{ Object.values(info)[0] }}</span>
            </div>
        </div>
    </div>

    <div class="flex space-x-4 mt-10 items-center justify-center">
        <UIcon name="i-simple-icons-facebook" class="w-4 h-4 flex-shrink-0 text-gray-500" />
        <NuxtLink 
            to="https://www.linkedin.com/in/youssef-tarek-2a4567232" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-gray-500 hover:text-blue-500"
        >
            <UIcon name="i-simple-icons-linkedin" class="w-4 h-4 flex-shrink-0" />
        </NuxtLink>
        <UIcon name="i-simple-icons-instagram" class="w-4 h-4 flex-shrink-0 text-gray-500" />
    </div>
</template>

<script setup>
const information = [
    { email: 'youssef.tarek1090@gmail.com', nameIcon: 'heroicons:envelope-16-solid' },
    { phone: '01112280301', nameIcon: 'heroicons:device-phone-mobile' },
    { birthdate: '12/2/2003', nameIcon: 'heroicons:calendar' },
    { location: 'Giza', nameIcon: 'heroicons:map-pin' }
];
</script>
