<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { name, count, nameUppercase } = storeToRefs(store)
</script>

<template>
  <div>
    <h1>This is a homeview</h1>
    <p>name: {{ name }}</p>
    <p>counter: {{ count }}</p>
    <p>Name capitalized: {{ nameUppercase }}</p>
  </div>
</template>
