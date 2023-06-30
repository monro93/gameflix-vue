<script setup lang="ts">
defineProps({value: Number})
</script>

<template>
    <div class="star star-form">
        <div class="star-fill" :style="{ height: value + '%' }" :data-value="value"></div>
        <div class="star-grey"></div>
        <p class="rating-text">{{(value/10).toFixed(1)}}</p>
    </div>
</template>

<style scoped>
.star-form  {
    clip-path: polygon(50% 0%, 33% 33%, 0% 38%, 23% 66%, 17% 100%, 50% 83%, 83% 100%, 77% 66%, 100% 38%, 66% 33%);
}
.star {
    position: relative;
    height: 100px;
    width: 100px;
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
}

.rating-text {
    position: absolute;
    top: 45%;
    text-align: center;
    line-height: 100%;
    font-size: 1.5em;
    width: 100%;
    color: black;
    z-index: 100;
}
</style>
