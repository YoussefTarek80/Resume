<template>
    <div class="bg-[#181818] rounded-3xl h-auto pb-10">
        <MainLinks />
        <slot />
    </div>
</template>
<script setup>
    import MainLinks from '~/components/main/links.vue';
</script>
<style >
    h1::after{
        content: '';
        display: block;
        width: 50px;
        height: 4px;
        background-color: #cca636;
        border-radius: 10px;
        margin-top: 15px;
    }
</style>