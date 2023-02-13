<script lang="ts" setup>
import type { IDog } from '@/types';

const props = defineProps<{
  DogsList: IDog[]
}>()

const filtersListArr = computed(() => {
  return props.DogsList.map((item: IDog) => {
    return {
      value: item.breeds[0].name,
      text: item.breeds[0].name
    }
  })
})

const filterListSet = computed(() => {
  let values = new Set();
  let outputArray = [];

  for (let i = 0; i < filtersListArr.value.length; i++) {
    if (!values.has(filtersListArr.value[i].value)) {
      values.add(filtersListArr.value[i].value);
      outputArray.push(filtersListArr.value[i]);
    }
  }

  return outputArray;
})

const filterHandler = (
  value: string,
  row: IDog,
) => {
  return row.breeds[0].name === value
}
</script>

<template>
  <section class="example-showcase">
    <el-table :data="DogsList" style="width: 100%">
      <el-table-column show-overflow-tooltip tooltip-effect="dark" label="Breed Name" width="180"
        :filters="filterListSet" :filter-method="filterHandler">
        <template #default="props">
          {{ props.row.breeds[0].name }}
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip tooltip-effect="dark" label="Bred For" width="180">
        <template #default="props">
          {{ props.row.breeds[0].bred_for }}
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip tooltip-effect="dark" label="Temperament" width="180">
        <template #default="props">
          {{ props.row.breeds[0].temperament }}
        </template>
      </el-table-column>
      <el-table-column prop="url" label="Image" width="100">
        <template #default="props">
          <DialogContainer :title="props.row.breeds[0].name">
            <template #trigger>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h5v2H5v14h14v-5.35l2 2V19q0 .825-.587 1.413Q19.825 21 19 21Zm1-4l3-4l2.25 3l3-4L18 17Zm15.55-3.6l-3.1-3.1q-.525.35-1.125.525q-.6.175-1.275.175q-1.85 0-3.15-1.312q-1.3-1.313-1.3-3.188q0-1.875 1.313-3.188Q14.225 2 16.1 2q1.875 0 3.188 1.312Q20.6 4.625 20.6 6.5q0 .675-.2 1.3t-.5 1.15L22.95 12ZM16.1 9q1.05 0 1.775-.725q.725-.725.725-1.775q0-1.05-.725-1.775Q17.15 4 16.1 4q-1.05 0-1.775.725Q13.6 5.45 13.6 6.5q0 1.05.725 1.775Q15.05 9 16.1 9Z" />
              </svg>
            </template>
            <template #content>
              <el-image fit="contain" class="p-8 rounded-t-lg" :src="props.row.url" :alt="props.row.breeds[0].name" />
            </template>
          </DialogContainer>
        </template>
      </el-table-column>
      <el-table-column label="Time Line" width="100">
        <DialogContainer>
          <template #trigger>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M5 12c0 1.11-.89 2-2 2a2 2 0 1 1 2-2M4 2v6H2V2h2M2 22v-6h2v6H2M24 6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-2 0H10v4.83L8.83 12L10 13.17V18h12V6M12 9h8v2h-8V9m0 4h6v2h-6v-2Z" />
            </svg>
          </template>
          <template #content>
            <TimeLine />
          </template>
        </DialogContainer>
      </el-table-column>
    </el-table>
  </section>
</template>

<style scoped>
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
