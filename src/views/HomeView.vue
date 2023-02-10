<script setup lang="ts">
import type { IDogsList } from '@/types';
import { useFetch } from '@vueuse/core'
import { computed } from 'vue';

const url = 'https://api.thedogapi.com/v1/images/search?limit=11&has_breeds=1&api_key=live_M7F5gZDNmkcVJs91ZMc1XPOF00M9GbkCtY0c0wgpN9iKNJ4L8me1xnS2mzHkNK2D'

const { isFetching, error, data } = await useFetch(url)

const DogsList = computed<IDogsList[]>(() => {
  try {
    return JSON.parse(data.value as string)
  }
  catch (e) {
    return null
  }
})

</script>

<template>
  <main>
    <DataTable :DogsList="DogsList" />
    <DogCard v-for="dog in DogsList" :dogData="dog" :key="dog.id" />
  </main>
</template>
