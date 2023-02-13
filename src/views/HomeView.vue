<script setup lang="ts">
import TablePagination from '@/components/TablePagination.vue';
import type { IDog } from '@/types';
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const mobileSize = computed(() => width.value < 768)

const DogsList = ref<IDog[]>([])

const tableView = ref(!mobileSize.value)

</script>

<template>
  <main class="flex flex-col justify-around items-center">
    <el-switch v-if="!mobileSize" v-model="tableView" size="large" active-text="Table view" inactive-text="Card view" />
    <TablePagination v-model="DogsList" class="my-4" />
    <DataTable v-if="tableView" :DogsList="DogsList" />
    <section v-else
      class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-auto">
      <DogCard v-for="dog in DogsList" :dogData="dog" :key="dog.id" />
    </section>
  </main>
</template>
