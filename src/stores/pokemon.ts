/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useHttpRequest } from '@/composables/useHttpRequest'

export const usePokemonStore = defineStore('pokemon', () => {
  //state
  const pokemonList: any = ref([])
  const pokemonInfo: any = ref({})
  //Actions
  const getPokemons = async () => {
    const pokemons = await useHttpRequest(
      'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0',
    )

    pokemonList.value = pokemons.response.results
  }

  const getPokemonDetails = async (name: string) => {
    const pokemonDetails = await useHttpRequest(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
    )

    pokemonInfo.value = pokemonDetails.response
  }

  return { pokemonList, pokemonInfo, getPokemons, getPokemonDetails }
})
//   //without composition API
// export const useCounterStore = defineStore('counter', {
//   //state
//   state: () => ({
//     count: 0,
//     name: 'Mars',
//   }),
//   //getters
//   getters: {
//     nameInCapitalLetters: state => state.name.toUpperCase(),
//   },
//   //actions
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
// })