<script setup lang="ts">
import { RouterLink } from 'vue-router'

const categories = [
  { id: 'a-propos', label: 'À propos' },
  { id: 'etudes', label: 'Études' },
  { id: 'experiences', label: 'Expériences' },
  { id: 'projets', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-base-300/70 bg-base-100/80 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <RouterLink
        to="/"
        class="text-base font-semibold tracking-tight transition-colors hover:text-primary sm:text-lg"
      >
        Portfolio de <span class="text-primary">Florian GAVOILLE</span>
      </RouterLink>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
        <RouterLink
          v-for="categorie in categories"
          :key="categorie.id"
          :to="{ path: '/', hash: `#${categorie.id}` }"
          class="btn btn-ghost btn-sm font-medium"
        >
          {{ categorie.label }}
        </RouterLink>

        <span class="mx-1 h-5 w-px bg-base-300" aria-hidden="true"></span>

        <RouterLink
          to="/anciennes-versions"
          class="btn btn-ghost btn-sm font-medium"
          active-class="btn-active"
        >
          Anciennes versions
        </RouterLink>
      </nav>

      <details class="dropdown dropdown-end lg:hidden">
        <summary class="btn btn-ghost btn-square btn-sm" aria-label="Ouvrir le menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </summary>
        <ul
          class="menu dropdown-content z-50 mt-3 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow-xl"
        >
          <li v-for="categorie in categories" :key="categorie.id">
            <RouterLink :to="{ path: '/', hash: `#${categorie.id}` }">
              {{ categorie.label }}
            </RouterLink>
          </li>
          <li class="menu-title">Archives</li>
          <li>
            <RouterLink to="/anciennes-versions" active-class="menu-active">
              Anciennes versions
            </RouterLink>
          </li>
        </ul>
      </details>
    </div>
  </header>
</template>
