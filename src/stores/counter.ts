import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  //state
  const count = ref(0)
  const name = ref('Mars')
  //getters
  const nameUppercase = computed(() => name.value.toUpperCase())
  //Actions
  const increment = () => {
    count.value++
  }

  return { count, nameUppercase, name, increment }
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
