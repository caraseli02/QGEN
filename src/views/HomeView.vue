<script setup lang="ts">
import TablePagination from '@/components/TablePagination.vue';
import type { IDog } from '@/types';
import { useWindowSize } from '@vueuse/core'
import { useAuthStore } from '@/stores/auth';


const { width } = useWindowSize()

const mobileSize = computed(() => width.value < 768)

const DogsList = ref<IDog[]>([])

const tableView = ref(!mobileSize.value)

const authStore = useAuthStore();

</script>

<template>
  <main class="flex flex-col justify-around items-center relative pt-16">
    <button v-if="authStore.user" type="submit" @click="authStore.logout()" class=" absolute top-2 right-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
          focus:ring-blue-300 font-medium rounded-lg text-sm w-24 px-5 py-2.5 text-center dark:bg-blue-600
          dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Log out
    </button>
    <el-switch v-if="!mobileSize" v-model="tableView" size="large" active-text="Table view" inactive-text="Card view" />
    <TablePagination v-model="DogsList" class="my-4" />
    <DataTable v-if="tableView" :DogsList="DogsList" />
    <section v-else
      class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-auto">
      <DogCard v-for="dog in DogsList" :dogData="dog" :key="dog.id" />
    </section>
</main>
</template>
