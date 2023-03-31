<script setup lang="ts">
import { RouterView } from 'vue-router'
import devtools from '@vue/devtools'
devtools.connect('http://localhost', '5173')
</script>

<template>
    <RouterView />
</template>

<style scoped>
</style>
