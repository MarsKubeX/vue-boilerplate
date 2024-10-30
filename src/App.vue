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
    <footer>This is the footer</footer>
  </div>
</template>

<style scoped>
.app-container {
  display: grid;
  min-height: 100dvh;
  grid-template-rows: auto 1fr auto;
}
header {
  @media (min-width: 1024px) {
    background-color: aqua;
    padding-left: 2rem;
  }
}
footer {
  text-align: center;
  padding-bottom: 2rem;
  background-color: beige;
}
main {
  @media (min-width: 1024px) {
    padding: 0 6rem 1rem 6rem;
  }
}
</style>
