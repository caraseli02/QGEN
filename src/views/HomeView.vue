<script setup lang="ts">
import TablePagination from '@/components/TablePagination.vue';
import type { IDog } from '@/types';


const DogsList = ref<IDog[]>([])

</script>

<template>
  <main>
    <DataTable :DogsList="DogsList" />
    <TablePagination v-model="DogsList" class="my-4" />
    <DogCard v-for="dog in DogsList" :dogData="dog" :key="dog.id" />
  </main>
</template>
