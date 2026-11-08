<script setup lang="ts">
import { RouterLink } from 'vue-router'

import ChangelogList from '@/components/ChangelogList.vue'
import changementsData from '@/data/changements.json'
import versionsData from '@/data/versions.json'
import type { AncienneVersion, VersionChangelog } from '@/types'

const versions: AncienneVersion[] = versionsData
const changements: VersionChangelog[] = changementsData
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div class="mb-10 max-w-2xl">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</p>
      <h1 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Anciennes versions</h1>
    </div>

    <section aria-labelledby="changements-title" class="mb-4">
      <h2 id="changements-title" class="text-2xl font-semibold tracking-tight">
        Récentes modifications
      </h2>

      <ChangelogList :versions="changements" />
    </section>

    <section aria-labelledby="historique-title">
      <h2 id="historique-title" class="text-2xl font-semibold tracking-tight">Historique</h2>

      <ul
        class="mt-5 divide-y divide-base-300 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm"
      >
        <li v-for="version in versions" :key="version.url">
          <a
            :href="version.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col gap-2 p-5 transition-colors hover:bg-base-200 sm:flex-row sm:items-center sm:justify-between"
          >
            <div class="min-w-0">
              <p class="font-semibold transition-colors group-hover:text-primary">
                {{ version.label }}
              </p>
              <p class="mt-1 text-sm text-base-content/70">{{ version.periode }}</p>
            </div>

            <span
              class="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary"
              aria-hidden="true"
            >
              Ouvrir
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
          </a>
        </li>
      </ul>

      <p class="mt-3 text-sm text-base-content/60">
        Les médias des versions archivées peuvent ne pas s'afficher.
      </p>
    </section>

    <RouterLink to="/" class="btn btn-ghost btn-sm mt-10 w-fit">← Retour au portfolio</RouterLink>
  </div>
</template>
