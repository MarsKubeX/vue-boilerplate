<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { type Ref, ref } from 'vue'
const isMenuOpen: Ref<boolean> = ref(false)
const openCloseMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="header-button-nav-menu">
    <div>
      <i
        @click="openCloseMenu()"
        class="material-icons"
        style="font-size: 36px; cursor: pointer"
      >
        <Transition name="fade-icon-menu" mode="out-in">
          <span v-if="isMenuOpen">close</span>
          <span v-else>menu</span></Transition
        ></i
      >
    </div>
    <div>
      <RouterLink to="/login"
        ><i class="material-icons"
          ><span class="material-symbols-outlined"> login </span></i
        ></RouterLink
      >
    </div>
  </div>
  <nav :class="[isMenuOpen ? 'nav-menu-open' : 'nav-menu-close']">
    <RouterLink @click="openCloseMenu()" to="/">Home</RouterLink>
    <RouterLink @click="openCloseMenu()" to="/about">About</RouterLink>
  </nav>
  <RouterLink class="nav-login" to="/login"
    ><i class="material-icons"
      ><span class="material-symbols-outlined"> login </span></i
    ></RouterLink
  >
</template>
<style scoped>
header {
  @media (min-width: 1024px) {
    padding: 1rem 0;
  }
}

nav {
  width: 90vw;
  font-size: 1rem;
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    background-color: var(--color-header);
    padding: 2rem 0 2rem 0;
    position: absolute;
  }
}

.nav-login {
  @media (max-width: 1024px) {
    display: none;
  }
}

.nav-menu-open {
  left: 0px;
  transition: 1s;
}
.nav-menu-close {
  left: -100%;
  transition: 1.5s;
}

.fade-icon-menu-enter-active,
.fade-icon-menu-leave-active {
  transition: opacity 0.3s ease;
}

.fade-icon-menu-enter-from,
.fade-icon-menu-leave-to {
  opacity: 0;
}

nav a.router-link-exact-active {
  color: var(--pt-first-color);
  cursor: default;
}

nav a {
  @media (min-width: 1024px) {
    padding: 0 1rem;
    border-left: 1px solid var(--pt-second-color);
    align-content: center;
  }
  @media (max-width: 1024px) {
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
  }
}
nav a:first-of-type {
  border: 0;
  @media (min-width: 1024px) {
    padding-left: 0;
  }
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.header-button-nav-menu {
  padding: 1rem 0 0 1rem;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1024px) {
    display: none;
  }
}
</style>
