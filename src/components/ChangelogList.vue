<script setup lang="ts">
import type { VersionChangelog } from '@/types'

defineProps<{
  versions: VersionChangelog[]
}>()
</script>

<template>
  <ol class="mt-5 space-y-6">
    <li
      v-for="version in versions"
      :key="`${version.version}-${version.date}`"
      class="relative border-l border-base-300 pl-5 sm:pl-6"
    >
      <span
        class="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary"
        aria-hidden="true"
      ></span>

      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 class="text-lg font-semibold tracking-tight">Version {{ version.version }}</h3>
        <p class="text-sm text-base-content/60">{{ version.date }}</p>
      </div>

      <ul class="mt-3 list-disc space-y-1.5 pl-5 text-sm text-base-content/80">
        <li v-for="(changement, index) in version.changements" :key="index">
          {{ changement }}
        </li>
      </ul>
    </li>
  </ol>
</template>
