<script setup>
</script>

<template>
 <div class="home">
  
  <Counter/>

  <div class="buttons">
    <button @click="storeCounter.decreaseCounter">-</button>
    <button @click="storeCounter.increaseCounter">+</button>
  </div>
  <hr>
  <div class="oddOreven">
    The Counter is : {{ storeCounter.oddOreven }}
  </div><br><hr>

  <div>
    <input type="number" v-model="storeCounter.count">
  </div>

 </div>
</template>

<script setup>
import Counter from '@/components/Counter.vue'
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
</script>


<style>
.counter{
  font-size: 50px;
}

.buttons button{
  font-size: 50px;
  margin: 20px;
}
</style>
