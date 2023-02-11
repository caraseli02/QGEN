<template>
  <el-button text @click="dialogVisible = true">
    <slot name="trigger" />
  </el-button>

  <el-dialog append-to-body v-model="dialogVisible" :title="title || ''" width="30%">
    <slot name="content" />
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

defineProps<{
  title?: string
}>()

const dialogVisible = ref(false)

</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
