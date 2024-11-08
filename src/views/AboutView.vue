<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const { increment } = store

const buttonHandler = (): void => {
  increment()
  alert('counter incremented by one')
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="primary-button" @click="buttonHandler()">
      Increment counter
    </button>
  </div>
</template>

<style></style>
