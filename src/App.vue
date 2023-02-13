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
            <el-skeleton style="width: 240px">
              <template #template>
                <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
                <div style="padding: 14px">
                  <el-skeleton-item variant="p" style="width: 50%" />
                  <div style="
                              display: flex;
                              align-items: center;
                              justify-items: space-between;
                            ">
                    <el-skeleton-item variant="text" style="margin-right: 16px" />
                    <el-skeleton-item variant="text" style="width: 30%" />
                  </div>
                </div>
              </template>
            </el-skeleton>
          </template>
        </Suspense>
      </Transition>
    </template>
  </RouterView>
</template>
