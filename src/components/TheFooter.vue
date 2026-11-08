<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="border-t border-base-300 bg-base-100">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 sm:flex-row sm:px-6 lg:px-8"
    >
      <p class="text-sm text-base-content/70">Florian GAVOILLE - 2026 - 2.0.0</p>
      <RouterLink to="/anciennes-versions" class="link link-hover text-sm">
        Anciennes versions
      </RouterLink>
    </div>
  </footer>
</template>
