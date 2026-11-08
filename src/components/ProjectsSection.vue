<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import projetsData from '@/data/projets.json'
import type { Projet } from '@/types'
import ProjectDialog from './ProjectDialog.vue'
import TagBadge from './TagBadge.vue'

const projets = projetsData as Projet[]

const projetSelectionne = ref<Projet | null>(null)

function ouvrirProjet(projet: Projet) {
  projetSelectionne.value = projet
}

function fermerProjet() {
  projetSelectionne.value = null
}

watch(projetSelectionne, (projet) => {
  document.body.style.overflow = projet ? 'hidden' : ''
})

function fermerAvecEchap(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    fermerProjet()
  }
}

onMounted(() => window.addEventListener('keydown', fermerAvecEchap))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', fermerAvecEchap)
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="projets" class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div class="mb-10 max-w-2xl">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Projets</p>
      <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Ce que j'ai réalisé</h2>
      <p class="mt-3 text-base-content/70">
        Cliquez sur une carte pour découvrir le projet en détail.
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <button
        v-for="projet in projets"
        :key="projet.title"
        type="button"
        class="group card cursor-pointer overflow-hidden border border-base-300 bg-base-100 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        @click="ouvrirProjet(projet)"
      >
        <figure class="aspect-video overflow-hidden bg-base-300">
          <img
            :src="projet.imgUrl"
            :alt="projet.title"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </figure>

        <div class="card-body gap-3">
          <h3 class="card-title text-lg leading-snug">{{ projet.title }}</h3>
          <p class="line-clamp-3 text-sm leading-relaxed text-base-content/70">
            {{ projet.shortDesc }}
          </p>

          <ul class="mt-auto flex flex-wrap gap-2 pt-1" aria-label="Compétences">
            <li v-for="tag in projet.tags" :key="tag.title">
              <TagBadge :tag="tag" />
            </li>
          </ul>
        </div>
      </button>
    </div>

    <ProjectDialog :projet="projetSelectionne" @close="fermerProjet" />
  </section>
</template>
