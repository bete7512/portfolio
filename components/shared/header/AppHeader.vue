<template>
    <div class="relative ">
        <div class="main relative h-[600px]  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <nav class="sm:container sm:mx-auto  mx-0">
                <div class=" max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between  sm:items-center z-10 py-4 sm:mx-auto  mx-0 sm:px-10
              ">
                    <div class="flex justify-between items-center px-6 sm:px-0">
                        <div>
                            <nuxt-link to="/">
                                HOME
                            </nuxt-link>
                        </div>
                        <div class="sm:hidden">
                            <button @click="showModal" type="button" class="focus:outline-none"
                                aria-label="Hamburger Menu">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    class=" h-7 w-7 mt-1 fill-current text-secondary-dark dark:text-ternary-light">
                                    <path v-if="isopen" fill-rule="evenodd"
                                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                        clip-rule="evenodd"></path>
                                    <path v-if="!isopen" fill-rule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <AppNavigation class="sm:block hidden" />
                    <div class="font-general-medium hidden  sm:flex space-x-4">
                        <ul class="flex pt-3 gap-2 sm:gap-4">
                            <a v-for="social in socials" :key="social.id" :href="social.url" target="__blank" class="  text-black  hover:text-indigo-500  dark:hover:text-indigo-400  cursor-pointer  rounded-lg  bg-gray-50  dark:bg-ternary-dark  hover:bg-gray-100  shadow-sm  p-2  duration-500
                        ">
                                <i :data-feather="social.icon" class="w-3 sm:w-5 h-3 sm:h-5"></i>
                            </a>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <Navigate v-if="isopen" :modal="modal" :showModal="showModal" class="absolute sm:hidden "></Navigate>
        <div class=" sm:-mt-[372px] -mt-[400px] absolute">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import Navigate from '../Navigate.vue'
import AppNavigation from "./AppNavigation.vue";
import AppBanner from './AppBanner.vue'
import { ref, reactive, computed, onMounted, onUpdated } from 'vue'
import feather from "feather-icons";
onMounted(() => {
    feather.replace();
})
onUpdated(() => {
    feather.replace();
})
const socials = [
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
]
const isopen = ref(false)
const modal = ref(false)
const showModal = () => {
    if (modal.value) {
        // document
        //   .getElementsByTagName("html")[0]
        //   .classList.remove("overflow-y-hidden");
        isopen.value = false
        modal.value = false;
    } else {
        // document
        //   .getElementsByTagName("html")[0]
        //   .classList.add("overflow-y-hidden");
        modal.value = true;
        isopen.value = true
    }
}
</script>
<style >
.main {
    clip-path: polygon(0 1%, 100% 0, 100% 100%, 0 39%);
}
</style>