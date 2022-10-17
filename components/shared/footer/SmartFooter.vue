<template>
    <div class="mt-3 flex justify-center  bg-gray-400">
        <div class="bg-blue-900 foot h-96 w-full sm:w-1/2 flex justify-center">
            <div class="space-y-2 pt-2">
                <div>
                    <div class="font-bold text-3xl">Get In Touch</div>
                    <div>Email:betekbebe@gmail.com</div>
                    <div>Phone:+251-962-247-109</div>
                </div>
                <div space-y-2 pt-2>
                    <div class="font-bold text-3xl">Follow Me</div>
                    <ul class="flex pt-3 gap-2 sm:gap-4">
                        <a v-for="social in socials" :key="social.id" :href="social.url" target="__blank" class="  text-black  hover:text-indigo-500  dark:hover:text-indigo-400  cursor-pointer  rounded-lg  bg-gray-50  dark:bg-ternary-dark  hover:bg-gray-100  shadow-sm  p-2  duration-500
                        ">
                            <i :data-feather="social.icon" class="w-3 sm:w-5 h-3 sm:h-5"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import feather from "feather-icons";
import { computed, reactive, onUpdated, onMounted } from 'vue'
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
<style>
.foot {
    clip-path: polygon(100% 0, 0 0, 50% 100%);
}
</style>