<template>
    <div class="container mx-auto">
        <div class="
            pt-10
            sm:pt-20
            mt-10
            sm:mt-20
            border-t-2
             border-primary-light
            dark:border-secondary-dark
          ">
            <div class="flex flex-col justify-center items-center mb-12 ">
                <p class="
                font-general-semibold
                text-3xl
                sm:text-4xl
                text-primary-dark
                dark:text-primary-light
                mb-5
              ">
                    Follow me
                </p>
                <ul class="flex gap-4 sm:gap-8">
                    <a v-for="social in socials" :key="social.id" :href="social.url" target="__blank" class="  text-gray-400  hover:text-indigo-500  dark:hover:text-indigo-400  cursor-pointer  rounded-lg  bg-gray-50  dark:bg-ternary-dark  hover:bg-gray-100  shadow-sm  p-4  duration-500
                ">
                        <i :data-feather="social.icon" class="w-6 sm:w-8 h-6 sm:h-8"></i>
                    </a>
                </ul>
            </div>
        </div>
        <CopyRight></CopyRight>
    </div>
</template>
<script setup lang="ts">
import feather from "feather-icons";
import { computed, reactive, onUpdated, onMounted } from 'vue'
import CopyRight from './CopyRight.vue'
const socials = reactive([
    {
        id: 1,
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/BeteGoshme",
    },
    {
        id: 4,
        name: "LinkedIn",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/bete-goshme-b0282a229/",
    },
    {
        id: 5,
        name: "Youtube",
        icon: "youtube",
        url: "https://www.youtube.com/channel/UCB3mSLUq2kv6KXBqn56SbRA",
    },
    {
        id: 3,
        name: 'Github',
        icon: "github",
        url: 'https://github.com/bete7512'
    }
])
onMounted(() => {
    feather.replace();
})
onUpdated(() => {
    feather.replace();
})
</script>


<style scoped>

</style>
