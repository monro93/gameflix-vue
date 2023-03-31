<script setup lang="ts">

import {Game} from "@/types/Game.types";

const game = new Game('Half life Alyx', 'co1tq3')

</script>

<template>
  <div class="main-game-div-full-page" :style="{backgroundImage: game.imageBackground()}">
    <h1 class="name">{{game.name}}</h1>
    <div class="rating"></div>
    <p class="description">{{game.name}}</p>
  </div>
</template>


<style scoped>
.main-game-div-full-page {
  width: 100%;
  height: 100%;
}
</style>