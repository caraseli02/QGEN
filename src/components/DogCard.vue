<script setup lang="ts">
import type { IDog } from '@/types';

defineProps<{
  dogData: IDog
}>()
</script>

<template>
  <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
    <div class="w-full flex justify-center">
      <el-image fit="scale-down" class="p-8 rounded-t-lg h-64" :src="dogData.url" :alt="dogData.breeds[0].name" />
    </div>
    <div class="px-5 pb-5">
      <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{
          dogData.breeds[0].name
        }}</h5>
      </a>
      <span class="text-gray-800 text-xs font-medium inline-flex items-center py-0.5 rounded my-2 dark:text-gray-300">
        {{ dogData.breeds[0].temperament }}
      </span>
      <div class="flex flex-col  items-start justify-between">
        <span v-if="dogData.breeds[0].bred_for"
          class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{{
  dogData.breeds[0].bred_for
          }}</span>
        <a href="#"
          class="mt-2 inline-flex w-full items-center justify-end font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
          Learn more
          <svg class="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
