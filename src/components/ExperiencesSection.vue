<script setup lang="ts">
import experiencesData from '@/data/experiences.json'
import type { Experience } from '@/types'

const experiences: Experience[] = experiencesData
</script>

<template>
  <section id="experiences" class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div class="mb-10 max-w-2xl">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Expériences</p>
      <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Mon parcours professionnel</h2>
    </div>

    <div class="grid gap-6 sm:grid-cols-2">
      <article
        v-for="experience in experiences"
        :key="experience.label"
        class="card overflow-hidden border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
      >
        <figure class="aspect-video overflow-hidden bg-base-200">
          <img
            :src="experience.image"
            :alt="`Illustration de l'expérience : ${experience.label}`"
            class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </figure>

        <div class="card-body gap-4">
          <span class="badge badge-soft badge-primary w-fit">{{ experience.temporalite }}</span>
          <h3 class="card-title text-xl leading-snug">{{ experience.label }}</h3>

          <ul class="flex flex-wrap gap-2" aria-label="Compétences">
            <li v-for="competence in experience.competences" :key="competence">
              <span class="badge badge-outline badge-sm">{{ competence }}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
