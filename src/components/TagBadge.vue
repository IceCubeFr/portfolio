<script setup lang="ts">
import type { ProjetTag } from '@/types'

defineProps<{
  tag: ProjetTag
}>()

const styles: Record<ProjetTag['type'], string> = {
  dev: 'badge-primary',
  gestion: 'badge-secondary',
  comm: 'badge-accent',
  ang: 'badge-info',
  autre: 'badge-ghost',
}
</script>

<template>
  <span class="badge badge-outline badge-sm" :class="styles[tag.type]">
    {{ tag.title }}
  </span>
</template>
