<script setup lang="ts">
import MainGame from '@/components/MainGame.vue'
import { Game } from '@/types/Game.types'
import HorizontalList from '@/components/HorizontalList.vue'

const games = [
  new Game('Metroid Prime Remastered', 95.01, 'co658o'),
  new Game('The Legend of Zelda: Tears of the Kingdom', 98.38, 'co5vmg'),
  new Game('God of War Ragnarök', 94.26, 'co5s5v'),
  new Game('Goat Simulator 3', 99.61, 'co4uks'),
  new Game('Hi-Fi Rush', 91.31, 'co6219')
]
</script>

<template>
  <div class="index-view-container">
    <MainGame :game="games[0]" />
    <HorizontalList :games="games" />
  </div>
</template>

<style scoped>
.index-view-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
