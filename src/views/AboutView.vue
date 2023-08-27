<template>
  <div class="about">
    <h1>About</h1>
  </div>

  <button @click="storeCounter.increaseCounter" class="button-counter">{{ storeCounter.count }}</button>
</template>

<script setup>
import { useCounterStore } from '../stores/counter';

const storeCounter = useCounterStore()
</script>

<style>
.button-counter{
  font-size: 50px;
}
</style>
