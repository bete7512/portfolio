
<template>
    <transition name="fade">
        <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
            <div v-show="modal" @click="showModal()" class="bg-filter  fixed inset-0 w-full h-full z-20">
            </div>
            <main class="flex flex-col items-center justify-start h-full w-full rounded-lg">
                <transition name="fade-up-down">
                    <div v-show="modal" class="modal-wrapper rounded-lg mt-5 bg-white flex items-start z-30">
                        <div
                            class="modal max-w-md xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
                            <div
                                class="modal-header dark:text-white flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
                                <div class="w-72">
                                    <h3>Bete Goshme</h3>
                                </div>
                                <button class="px- text-primary-dark dark:text-primary-light" @click="showModal()">
                                    <span class="w-8 sm:w-12 font-bold text-2xl ">x</span>
                                </button>
                            </div>
                            <div class="modal-body px-3 w-full h-full space-y-3 mx-0">
                                <nuxt-link
                                    class="block  text-left text-lg text-primary-dark  dark:text-ternary-light  hover:text-secondary-dark  dark:hover:text-secondary-light  sm:mx-4  mb-2  sm:py-2     sm:pt-2 sm:border-t-0  border-primary-light  dark:border-secondary-dark capitalize"
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
                            <div class="modal-footer mt-2 sm:mt-0 mb-2   px-8 border0-t text-right">
                                <button
                                    class="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                                    @click="showModal()">close</button>
                            </div>
                        </div>
                    </div>
                </transition>
            </main>
        </div>
    </transition>
</template>
<script setup >
import { ref, onMounted, computed, defineProps, defineEmits } from 'vue'
const props = defineProps(["showModal", "modal"])
</script>

<script>
export default {
    computed: {
        btnLabel() {
            return this.$colorMode.preference === 'light' ? 'dark' : 'light'
        },
        
    },
    methods: {
        changeMode() {
            this.$colorMode.preference =
                this.$colorMode.preference === 'light' ? 'dark' : 'light'
        }
    }
}
</script>

<style>
.modal-body {
    max-height: 500px;
}

.bg-gray-800-opacity {
    background-color: #2d374850;
}

@media screen and (max-width: 768px) {
    .modal-body {
        max-height: 400px;
    }
}

.fade-up-down-enter-active {
    transition: all 0.3s ease;
}

.fade-up-down-leave-active {
    transition: all 0.3s ease;
}

.fade-up-down-enter {
    transform: translateY(10%);
    opacity: 0;
}

.fade-up-down-leave-to {
    transform: translateY(10%);
    opacity: 0;
}

.fade-enter-active {
    -webkit-transition: opacity 2s;
    transition: opacity 0.3s;
}

.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>