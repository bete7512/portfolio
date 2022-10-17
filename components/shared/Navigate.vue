
<template>
    <transition name="fade">
        <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
            <div v-show="modal" @click="showModal()"
                class="bg-filter  fixed inset-0 w-full h-full z-20">
            </div>
            <main class="flex flex-col items-center justify-start h-full w-full rounded-lg">
                <transition name="fade-up-down">
                    <div v-show="modal" class="modal-wrapper rounded-lg mt-5 bg-white flex items-start z-30">
                        <div
                            class="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
                            <div
                                class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
                                <div class="w-72">
                                    <h3>Bete Goshme</h3>
                                </div>
                                <button class="px- text-primary-dark dark:text-primary-light" @click="showModal()">
                                    <span  class="w-8 sm:w-12 font-bold text-2xl ">x</span>
                                </button>
                            </div>
                            <div class="modal-body px-3 w-full h-full space-y-3 mx-0">
                                <nuxt-link
                                    class="block  text-left text-lg text-primary-dark  dark:text-ternary-light  hover:text-secondary-dark  dark:hover:text-secondary-light  sm:mx-4  mb-2  sm:py-2     sm:pt-2 sm:border-t-0  border-primary-light  dark:border-secondary-dark capitalize"
                                    to="/projects">Projects</nuxt-link>
                                <nuxt-link
                                    class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark capitalize"
                                    to="/contact">Contacts</nuxt-link>
                                <nuxt-link
                                    class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark capitalize"
                                    to="/projects">Night mode</nuxt-link>
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
<script setup lang="ts">
import { ref, onMounted, computed, defineProps, defineEmits } from 'vue'
const props = defineProps(["showModal", "modal"])
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