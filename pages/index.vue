<template>
        <div class="container mx-auto bg-white dark:bg-secondary-dark dark:text-white">
                <Home></Home>
        </div>
</template>
<script setup lang="ts">
import AppBanner from "../components/shared/header/AppBanner.vue";
import Home from '../components/shared/header/Home/Home.vue'
import { ref } from 'vue'
const isopen = ref(false)
const modal = ref(true)
</script>
