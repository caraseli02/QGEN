<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useDark } from '@vueuse/core'

useDark()

</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <Suspense>
          <!-- main content -->
          <component class="mx-2 mt-2 " :is="Component"></component>

          <!-- loading state -->
          <template #fallback>
            <div class="w-[95vw] h-[95vh] flex justify-center items-center">
              <el-skeleton :rows="5" animated />
            </div>
          </template>
        </Suspense>
      </Transition>
    </template>
  </RouterView>
</template>
