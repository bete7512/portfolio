<template>
  <div class="bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col">
    <AppHeader>
      <div class="flex justify-center">
        <AppBanner
          class=" sm:w-[100%] md:w-[100%] md:mx-24 sm:h-[584px] w-[100%] sm:mx-16 h-auto xl:mx-32 2xl:mx-96 mx-6 rounded-lg bg-slate-300 overflow-visible">
        </AppBanner>
      </div>
    </AppHeader>
    <transition name="fade" mode="out-in">
      <div>
        <Nuxt class="sm:mt-56 block mt-24 vsm:mt-96" />
      </div>
    </transition>
    <AppFooter />
    <div class="
          flex
          space-x-2
          mr-8
          mb-6
          right-0
          bottom-0
          z-50
          items-center
          sm:space-x-4
        ">
    </div>
  </div>
</template>
<script setup>
import AppBanner from '../components/shared/header/AppBanner.vue'
import AppHeader from "../components/shared/header/AppHeader.vue";
import AppFooter from '../components/shared/footer/AppFooter.vue'
</script>
<style>

</style>
  