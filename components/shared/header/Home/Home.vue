<template>
    <div>
        <div class="text-2xl sm:w-32 flex justify-center  mx-2 sm:mx-auto font-bold p-5 bg-gray-500 rounded-lg">
            SKILLS
        </div>
        <Skills></Skills>
        <Experience class=""></Experience>
        <Education></Education>
        <Cirteficates></Cirteficates>
        <Projects></Projects>
    </div>
</template>
<script setup lang="ts">
import {ref,defineProps} from 'vue'
import Skills from './Skills.vue'
import Experience from './Experience.vue'
import Education from './Education.vue'
import Cirteficates from './Cirteficates.vue'
import Projects from './Projects.vue'
</script>
<style >
    
</style>