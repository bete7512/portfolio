<template>
    <div v-if="!owner.length">error</div>
    <!-- <div ></div> -->
    <div v-else class=" bg-blue-200 dark:bg-blue-900 dark:text-white  sm:p-5   ">
        <!-- hover:translate-y-2 -->
        <div class="">
            <div class="w-4 h-4 border-2 border-green-700 rounded-full bg-blue-200 items-center"></div>
            <div class="flex justify-center">
                <img class="w-64 h-64 rounded-full -mt-32 border-8 border-neutral-400  duration-400 hover:animate-bounce  mx-auto"
                    :src="owner[0].avator" alt="Bete Goshme" />
            </div>
        </div>
        <div class="">
            <div class="flex justify-center">
                <div>
                    <h1 class=" pt-2 font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light mx-auto font-bold
                ">
                       {{owner[0].fname}} {{owner[0].lname}}
                    </h1>
                    <p class=" font-general-medium mt-2 mx-auto  sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-yellow-500 text-3xl font-serif
                ">
                        Full-Stack <span class="text-black font-bold">Developer</span>
                    </p>
                </div>
            </div>
            <p class="p-3 text-base font-serif">{{owner[0].bios}}
            </p>
            <div class="">
                <div class="flex justify-center ">
                    <button class=" mx-2 text-md w-full sm:w-32 sm:mx-0   sm:my-0   my-3 bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5
              ">
                        <span class="text-sm sm:text-sm font-general-medium duration-100 px-auto ">GET MY CV</span>
                    </button>
                </div>
            </div>
    
        </div>
        <div>sth{{owner}}</div>
    </div>

</template>
<!-- <script setup >

</script> -->
<script>
import gql from 'graphql-tag'
const owner = gql`
query MyQuery {
  owner {
    avator
    bios
    email
    fname
    lname
    location
  }
}
`;

export default {
    apollo: {
        owner: {
            query: owner,
            prefetch: true,
        },
    }
}
// console.log(owner)
</script>
<style>

</style>