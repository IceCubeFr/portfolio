<script setup lang="ts">
import etudesData from '@/data/etudes.json'
import type { Etude } from '@/types'

const etudes: Etude[] = etudesData
</script>

<template>
  <section id="etudes" class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div class="mb-10 max-w-2xl">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Études</p>
      <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Mon parcours académique</h2>
    </div>

    <div class="grid gap-6 sm:grid-cols-2">
      <article
        v-for="etude in etudes"
        :key="etude.label"
        class="card overflow-hidden border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <figure class="flex aspect-video items-center justify-center overflow-hidden bg-base-200 p-8">
          <img
            :src="etude.image"
            :alt="etude.label"
            class="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </figure>

        <div class="card-body gap-4">
          <span class="badge badge-soft badge-primary w-fit">{{ etude.temporalite }}</span>
          <h3 class="card-title text-xl leading-snug">{{ etude.label }}</h3>

          <ul class="flex flex-wrap gap-2" aria-label="Compétences">
            <li v-for="competence in etude.competences" :key="competence">
              <span class="badge badge-outline badge-sm">{{ competence }}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
