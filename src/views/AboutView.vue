<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const { increment } = store
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="increment()">Increment counter</button>
  </div>
</template>

<style></style>
