<script setup lang="ts">
import { Game } from '@/types/Game.types'

defineProps({ game: Game })
</script>

<template>
  <div class="main-game-div-full-page" v-if="game">
    <picture>
      <source :srcset="game.imageBackground()" />
      <img :src="game.imageBackground()" :alt="game.name" />
    </picture>
    <h1 class="name">{{ game.name }}</h1>
    <div class="rating"></div>
    <p class="description">{{ game.name }}</p>
  </div>
</template>

<style scoped>
.main-game-div-full-page {
  width: 100%;
  height: 100%;
}
</style>
