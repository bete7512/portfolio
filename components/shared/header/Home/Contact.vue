<template>
    <div class="mt-3 sm:px-6 px-3">
        <div id="contacts" class="text-2xl sm:w-44 flex justify-center  mx-2 sm:mx-auto font-bold p-5  rounded-lg">
            Contact Me
        </div>
        <div>
            <div class="flex flex-wrap-reverse sm:w-full sm:mx-auto mx-2 justify-between">
                <div class="space-y-3 sm:w-1/2 w-full">
                    <h2 class="  text-2xl font-bold text-primary-dark dark:text-primary-light mt-8 mb-8">
                        Leave Us Your Info </h2>
                    <form action="">
                        <div class="space-y-2">
                            <div>
                                <label class="font-bold text-lg" for="">Your Full Name (Required)</label>
                            </div>
                            <div>
                                <input class="border h-12 w-full bg-gray-300 " type="text">
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div>
                                <label class="font-bold text-lg" for="">Your Full Email (Required)</label>
                            </div>
                            <div>
                                <input class="border h-12 w-full bg-gray-300 " type="text">
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div>
                                <label class="font-bold text-lg" for="">Subject</label>
                            </div>
                            <div>
                                <input class="border h-12 w-full bg-gray-300 " type="text">
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div>
                                <label class="font-bold text-lg" for="">Your message</label>
                            </div>
                            <div>
                                <textarea class="border h-48 w-full  bg-gray-300 " type="text"></textarea>
                            </div>
                        </div>
                        <div>
                            <button class="px-10 py-2 bg-orange-400 rounded-lg">send</button>
                        </div>
                    </form>
                </div>
                <div class="space-y-3 sm:w-1/2 w-full">
                    <div class="w-full md:w-1/2">
                        <div class="text-left max-w-xl px-6">
                            <h2 class="  text-2xl font-bold text-primary-dark dark:text-primary-light mt-8 mb-8">
                                Contact details
                            </h2>
                            <ul class="font-general-regular pt-4">
                                <li class="flex" v-for="contact in contacts" :key="contact.id">
                                    <i :data-feather='contact.icon'
                                        class="w-5 text-gray-500 dark:text-gray-400 mr-4"></i>
                                    <a href="#" class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
                                        aria-label="Website and Phone">
                                        {{ contact.name }}
                                        <!-- :class="
                                       contact.icon === 'mail' || contact.icon === 'phone'
                                         ? 'hover:underline cursor-pointer'
                                         : ''
                                     " -->
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUpdated } from 'vue'
import feather from "feather-icons";
onMounted(() => {
    feather.replace();
})
onUpdated(() => {
    feather.replace();
})
const contacts = [
    {
        name: 'betekbebe@gmail.com',
        icon: 'mail',
        id: 1
    },
    {
        name: '+2519-622-471-09',
        icon: 'phone',
        id: 2
    },
    {
        name: 'Addissababa, Ethiopia',
        icon: 'map-pin',
        id: 3
    }
]
</script>
<style lang="">
    
</style>