<script setup lang="ts">
import MainGame from "@/components/MainGame.vue";
import {Game} from "@/types/Game.types";
import HorizontalList from "@/components/HorizontalList.vue";

const games = [
    new Game('Half life Alyx',  30,'co1tq3'),
    new Game('Half life Alyx1', 0,'co1tq3'),
    new Game('Half life Alyx2', 100,'co1tq3'),
    new Game('Half life Alyx3', 50,'co1tq3'),
    new Game('Half life Alyx4', 32.14,'co1tq3'),
]
</script>

<template>
  <div class="index-view-container">
    <MainGame :game="games[0]"/>
    <HorizontalList :games="games"/>
  </div>
</template>

<style scoped>
.index-view-container{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>