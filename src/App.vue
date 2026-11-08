<script setup lang="ts">
import { RouterView } from 'vue-router'

import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div id="top" class="flex min-h-screen flex-col bg-base-200">
    <TheHeader />

    <main class="flex-1">
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>
