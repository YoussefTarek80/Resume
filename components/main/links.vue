<template>
    <header class="flex items-end justify-end">
        <nav class="bg-[#2E2E2E] rounded-r-3xl rounded-l-sm rounded-bl-3xl rounded-br-sm p-3">
            <ul class="flex items-center">
                <nuxt-link 
                    to="/main/about" 
                    :class="{'text-[#cca636]': route.path === '/main/about'}"
                >
                    <li class="px-6 py-3 hover:text-[#cca636] cursor-pointer">
                        About
                    </li>
                </nuxt-link>
                <nuxt-link 
                    to="/main/resume" 
                    :class="{'text-[#cca636]': route.path === '/main/resume'}"
                >
                    <li class="px-6 py-3 hover:text-[#cca636] cursor-pointer">
                        Resume
                    </li>
                </nuxt-link>
                <nuxt-link 
                    to="/main/portfolio" 
                    :class="{'text-[#cca636]': route.path === '/main/portfolio'}"
                >
                    <li class="px-6 py-3 hover:text-[#cca636] cursor-pointer">
                        Portfolio
                    </li>
                </nuxt-link>
                <nuxt-link 
                    to="/main/contact" 
                    :class="{'text-[#cca636]': route.path === '/main/contact'}"
                >
                    <li class="px-6 py-3 hover:text-[#cca636] cursor-pointer">
                        Contact
                    </li>
                </nuxt-link>
            </ul>
        </nav> 
    </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
