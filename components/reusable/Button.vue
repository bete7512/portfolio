<template>
    <div>
        {{title}}
    </div>
</template>
<script setup lang="ts">
import {ref,defineProps} from 'vue'
const props = defineProps(['title'])
</script>
<style lang="">
    
</style>