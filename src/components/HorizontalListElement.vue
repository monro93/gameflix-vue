<script setup lang="ts">
import {Game} from "@/types/Game.types";

defineProps({game: Game})
</script>

<template>
  <li class="list-element-container-li">
    <div class="image-cover">
      <picture>
        <source :srcset="game.imageCover()">
        <img  class="image" :src="game.imageCover()" :alt="game.name">
      </picture>
      <h1 class="name">{{game.name}}</h1>
      <div class="rating"></div>
      <p class="description">{{game.name}}</p>
    </div>
  </li>
</template>


<style scoped>
.image-cover {
  width: 150px;
}

.image {
  object-fit: cover;
  width: 100%;
}
</style>