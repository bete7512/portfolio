<template>
    <div class="sm:px-6 px-3">
        <div id="projects"
            class="text-2xl sm:w-64 flex justify-c32ter  mx-2 sm:mx-auto font-bold p-5  rounded p-3-lg px-8">
            Projects
        </div>
        <div class="mt-3">
            <div class=" flex flex-wrap justify-center gap-6">
                <!-- <div   > -->
                <div v-for="id in 5" :key="id" class="rounded p-3 shadow-lg w-full dark:bg-cyan-600 sm:w-1/3">
                    <img class="w-full rounded pb-2 h-auto " src="~/assets/portfolio/solidity.png" alt="yelem">
                    <div class="w-full">
                        <div>Food Recipe website</div>
                        <h6>About project</h6>
                        <p class="line-clamp-5">It is simple clinic management system web app recieptionist can add, patient make order for
                            patient,add bills for patient, print prescription to the system and doctor can add
                            prescription, diagnosis and can view previous patients history by thier Id and admin have
                            the role of adding new doctors and giving identity to them and recieptionist to the system
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <a href="https://main--simple-clinic-management-system.netlify.app"
                            class="mx-auto rounded-lg px-7 py-3 bg-orange-400 ">Visist Project</a>
                    </div>
                </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, defineProps } from 'vue'

</script>
<style lang="">
    
</style>