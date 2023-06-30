<script setup lang="ts">
import type { Game } from '@/types/Game.types'
import HorizontalListElement from '@/components/HorizontalListElement.vue'

defineProps({ games: Array<Game> })
</script>

<template>
  <ul class="list-container-div" v-if="games">
    <HorizontalListElement v-for="(game, index) in games" :game="game" :key="index" />
  </ul>
</template>

<style scoped>
.list-container-div {
  display: flex;
  flex-direction: row;
  gap: 10px;

  list-style-type: none;
}
</style>
