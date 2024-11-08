<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarMenu from './components/NavbarMenu.vue'
</script>

<template>
  <div class="app-container">
    <header>
      <NavbarMenu></NavbarMenu>
    </header>
    <main><RouterView /></main>
    <footer>
      <div><p>This is the footer</p></div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: grid;
  min-height: 100dvh;
  grid-template-rows: auto 1fr auto;
}
footer {
  div {
    text-align: center;
    padding-bottom: 2rem;
  }
}
</style>
