<script setup lang="ts">
import type { Projet } from '@/types'
import TagBadge from './TagBadge.vue'

defineProps<{
  projet: Projet | null
}>()

defineEmits<{
  close: []
}>()

function estLienExterne(lien: string) {
  return /^(https?:)?\/\//.test(lien)
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="projet"
      class="modal modal-open z-50"
      role="dialog"
      aria-modal="true"
      :aria-label="projet.title"
    >
      <div class="modal-box max-w-3xl overflow-x-hidden p-0">
        <figure class="aspect-video w-full overflow-hidden bg-base-300">
          <img :src="projet.imgUrl" :alt="projet.title" class="h-full w-full object-cover" />
        </figure>

        <div class="p-6 sm:p-8">
          <h3 class="text-2xl font-bold tracking-tight sm:text-3xl">{{ projet.title }}</h3>
          <p class="mt-2 text-base text-base-content/70">{{ projet.desc }}</p>

          <!-- descHTML provient du fichier local projets.json : v-html permet d'y intégrer du HTML. -->
          <div
            class="rich-text mt-6 max-w-none text-base leading-7 text-base-content/80"
            v-html="projet.descHTML"
          />

          <ul class="mt-6 flex flex-wrap gap-2" aria-label="Compétences">
            <li v-for="tag in projet.tags" :key="tag.title">
              <TagBadge :tag="tag" />
            </li>
          </ul>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              :href="projet.link"
              :target="estLienExterne(projet.link) ? '_blank' : undefined"
              :rel="estLienExterne(projet.link) ? 'noopener noreferrer' : undefined"
              class="btn btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.18c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"
                />
              </svg>
              Voir le projet
            </a>

            <button type="button" class="btn btn-ghost" @click="$emit('close')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0 7-7m-7 7h18" />
              </svg>
              Retour
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="modal-backdrop cursor-default bg-black/60"
        aria-label="Fermer la fenêtre"
        @click="$emit('close')"
      />
    </div>
  </Teleport>
</template>
