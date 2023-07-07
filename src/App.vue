<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHead } from 'unhead'

if (process.env.NODE_ENV === 'development') {
  import('@vue/devtools').then(devtools => {
    devtools.connect('http://localhost', '5173');
  });
}

useHead({
  title: 'Gameflix'
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
