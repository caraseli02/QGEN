<template>
    <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 25, 50, 100]"
        layout="total, sizes, prev, pager, next" :total="100" @size-change="handleChange"
        @current-change="handleChange" />
</template>
<script lang="ts" setup>
import type { IDog } from '@/types';
import { ref } from 'vue'

import { useFetch } from '@vueuse/core'

const url = `https://api.thedogapi.com/v1/images/search?limit=50&has_breeds=1&api_key=${import.meta.env.VITE_API_URL}`

const { isFetching, error, data } = await useFetch(url)

const props = defineProps<{
    modelValue: IDog[]
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: IDog[]): void
}>()

const currentPage = ref(1)
const pageSize = ref(10)

const handleChange = () => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return emit('update:modelValue', JSON.parse(data.value as string).slice(start, end));
}
handleChange()
</script>

<style scoped>
.demo-pagination-block+.demo-pagination-block {
    margin-top: 10px;
}

.demo-pagination-block .demonstration {
    margin-bottom: 16px;
}
</style>
