<script lang="ts" setup>
import type { IDogsList } from '@/types';

const props = defineProps<{
  DogsList: IDogsList
}>()
</script>

<template>
  <section class="example-showcase">
    <el-table :data="DogsList" style="width: 100%">
      <el-table-column label="Name" width="180">
        <template #default="props">
          {{ props.row.breeds[0].name }}
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip tooltip-effect="dark" label="Bred For">
        <template #default="props">
          {{ props.row.breeds[0].bred_for }}
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip tooltip-effect="dark" label="Temperament">
        <template #default="props">
          {{ props.row.breeds[0].temperament }}
        </template>
      </el-table-column>
      <el-table-column prop="url" label="Image" width="100">
        <template #default="props">
          <ImgDialog :url="props.row.url" :alt="props.row.breeds[0].name" />
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<style>
.el-table .cell {
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  padding: 0 12px;
}

.example-showcase {
  padding: 1.5rem;
  margin: 0.5px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}
</style>
