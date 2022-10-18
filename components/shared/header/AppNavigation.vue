<template>
    <!-- :class="isopen ? 'block':'hidden'"  -->
    <div
        class=" font-general-regular   m-0   sm:ml-4   mt-5   sm:mt-3    sm:flex   p-5   sm:p-0   justify-center   items-center   shadow-lg   sm:shadow-none">
        <nuxt-link
            class="block  text-left text-lg text-primary-dark  dark:text-ternary-light  hover:text-secondary-dark  dark:hover:text-secondary-light  sm:mx-4  mb-2  sm:py-2  border-t-2  pt-3  sm:pt-2 sm:border-t-0  border-primary-light  dark:border-secondary-dark capitalize"
            to="/projects">Projects</nuxt-link>
        <nuxt-link
            class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark capitalize"
            to="/contact">Contacts</nuxt-link>
        <button @click="changeMode"
            class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark capitalize">
            <!-- <i  data-feather="moon"  class="w-3 sm:w-5 h-3 sm:h-5"></i> -->
            <svg v-if="$colorMode.value == 'light'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16"> <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/> </svg>
            <svg  v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16"> <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/> </svg>

        </button>
    </div>
</template>
<script setup>

</script>
<script>
import feather from "feather-icons";

// import {useColorMode} from '@nuxtjs/color-mode'

// const colorMode = useColorMode()
// console.log(colorMode.preference)
//   const  themeSwitcher = ()=>{
//       colorMode.preference =
//     colorMode.value == "light" ? "dark" : "light";
// }

export default {
//     mounted() {
//         feather.replace()
//   },
//   updated() {
//     feather.replace();
//   },
    computed: {
        btnLabel() {
            return this.$colorMode.preference === 'light' ? 'dark' : 'light'
        },
      
    },
    methods: {
        changeMode() {
            console.log(this.$colorMode.preference);
            this.$colorMode.preference =
                this.$colorMode.preference === 'light' ? 'dark' : 'light'
        }
    }
}
</script>
<style >
body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
}

.sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
}
</style>