<script setup lang="ts">
import { Game } from '@/types/Game.types'
import Rating from '@/components/RatingGame.vue'
defineProps({ game: Game })
</script>

<template>
  <li class="list-element-container-li" v-if="game">
    <div class="list-element-container-li-image-cover">
      <picture>
        <source :srcset="game.imageCover()" />
        <img class="image" :src="game.imageCover()" :alt="game.name" />
      </picture>
      <Rating class="list-element-container-rating" :value="game.rating" />
    </div>
  </li>
</template>

<style scoped>
.list-element-container-li-image-cover {
  width: 150px;
  position: relative;
}

.list-element-container-rating {
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 10px;
  left: 1px;
}

.image {
  object-fit: cover;
  width: 100%;
}
</style>
