import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PokemonDetail from '../pokemons/PokemonDetail.vue'
import { pokemonDetailMock } from './mock-data'

describe('PokemonDetail component', () => {
  it('renders properly', () => {
    const wrapper = mount(PokemonDetail, {
      props: { pokemonData: pokemonDetailMock },
    })
    expect(wrapper.text()).toContain(pokemonDetailMock.name)
  })
})
