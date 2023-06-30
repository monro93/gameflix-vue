<script setup lang="ts">
defineProps({ value: Number })
</script>

<template>
  <div class="star">
    <div class="star-fill" :style="{ height: value + '%' }" :data-value="value"></div>
    <div class="star-grey"></div>
  </div>
</template>

<style scoped>
.star {
  position: relative;
  height: 100px;
  width: 100px;
  clip-path: polygon(50% 2.45%, 61.8% 38.77%, 100% 38.77%, 69.1% 61.23%, 80.9% 97.55%, 50% 75.1%, 19.1% 97.55%, 30.9% 61.23%, 0% 38.77%, 38.2% 38.77%);
}

.star-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: yellow;
  height: 0;
  width: 100%;
  z-index: 10;
}

.star-grey {
  position: absolute;
  top: 0;
  left: 0;
  background-color: grey;
  height: 100%;
  width: 100%;
  clip-path: polygon(50% 2.45%, 61.8% 38.77%, 100% 38.77%, 69.1% 61.23%, 80.9% 97.55%, 50% 75.1%, 19.1% 97.55%, 30.9% 61.23%, 0% 38.77%, 38.2% 38.77%);
  mix-blend-mode: difference;
}
</style>
