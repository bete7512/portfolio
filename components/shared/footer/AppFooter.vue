<template>
    <div class="">
        <SmartFooter class=" "></SmartFooter>
        <CopyRight></CopyRight>
    </div>
</template>
<script setup lang="ts">
import SmartFooter from './SmartFooter.vue'
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
