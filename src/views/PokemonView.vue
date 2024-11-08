<script setup lang="ts">
import { usePokemonStore } from '@/stores/pokemon'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import PokemonDetail from '@/components/pokemons/PokemonDetail.vue'

const store = usePokemonStore()
const { getPokemons, getPokemonDetails } = store
const { pokemonList, pokemonInfo } = storeToRefs(store)

onMounted(async () => {
  await getPokemons()
})
</script>

<template>
  <div class="pokemon-view-container">
    <div v-if="pokemonList.length">
      <li
        v-for="pokemon in pokemonList"
        @click="getPokemonDetails(pokemon.name)"
        :key="pokemon.name"
      >
        {{ pokemon.name }}
      </li>
    </div>
    <div class="pokemon-view-details" v-if="pokemonInfo.sprites">
      <PokemonDetail :pokemonData="pokemonInfo"></PokemonDetail>
    </div>
  </div>
</template>

<style>
li {
  cursor: pointer;
}

.pokemon-view-container {
  display: flex;
  img {
    width: 300px;
    height: auto;
  }
}
.pokemon-view-details {
  margin: auto;
}
</style>
