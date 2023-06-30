<script setup lang="ts">
defineProps({value: Number})
</script>

<template>
    <div class="rating-container">
        <div class="rating-star rating-star-form">
            <div class="rating-star-fill" :style="{ height: value + '%' }" :data-value="value"></div>
            <div class="rating-star-grey"></div>
            <p class="rating-rating-text">{{(value/10).toPrecision(2)}}</p>
        </div>
    </div>
</template>

<style scoped>
.rating-container {
    height: 100px;
    width: 100px;
}

.rating-star-form  {
    clip-path: polygon(50% 0%, 33% 33%, 0% 38%, 23% 66%, 17% 100%, 50% 83%, 83% 100%, 77% 66%, 100% 38%, 66% 33%);
}
.rating-star {
    position: relative;
    height: 100%;
    width: 100%;
}

.rating-star-fill {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: yellow;
    height: 0;
    width: 100%;
    z-index: 10;
}

.rating-star-grey {
    position: absolute;
    top: 0;
    left: 0;
    background-color: grey;
    height: 100%;
    width: 100%;
}

.rating-rating-text {
    position: absolute;
    top: 34%;
    text-align: center;
    line-height: 100%;
    font-size: 1em;
    width: 100%;
    color: black;
    z-index: 100;
}
</style>
