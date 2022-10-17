<template>
    <!-- :class="isopen ? 'block':'hidden'"  -->
    <div 
    class=" font-general-regular   m-0   sm:ml-4   mt-5   sm:mt-3    sm:flex   p-5   sm:p-0   justify-center   items-center   shadow-lg   sm:shadow-none">
        <nuxt-link class="block  text-left text-lg text-primary-dark  dark:text-ternary-light  hover:text-secondary-dark  dark:hover:text-secondary-light  sm:mx-4  mb-2  sm:py-2  border-t-2  pt-3  sm:pt-2 sm:border-t-0  border-primary-light  dark:border-secondary-dark capitalize" to="/projects">Projects</nuxt-link>
        <nuxt-link class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark capitalize" to="/contact">Contacts</nuxt-link>
        <nuxt-link class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark capitalize" to="/projects">Night mode</nuxt-link>
    </div>
</template>
<script setup lang="ts">
import { defineProps, ref, defineEmits } from 'vue'
// const props = defineProps({
//     isopen:
//     {
//         type: Boolean
//     },
//     modal: {
//         type: Boolean
//     },
//     showmodal:
//     {
//         type: Function
//     }
// })
const emit = defineEmits(['cancel','mobile'])
</script>
<style lang="">
</style>