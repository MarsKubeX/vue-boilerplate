<template>
  <div class="pokemon-table-info">
    <img :src="pokemonData.sprites.front_default" :alt="pokemonData.name" />
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>{{ pokemonData.name }}</td>
        </tr>
        <tr>
          <td>Base experience</td>
          <td>{{ pokemonData.base_experience }}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{{ pokemonData.height }}</td>
        </tr>
        <tr>
          <td>weight</td>
          <td>{{ pokemonData.weight }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const { pokemonData } = defineProps(['pokemonData'])
</script>

<style>
table,
td {
  border: 1px solid black;
}
.pokemon-table-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: auto;
}
</style>
