<script setup lang="ts">
const liens = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/florian-gavoille-063b21268/',
    download: undefined,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/IceCubeFr',
    download: undefined,
  },
  {
    label: 'Mail',
    href: 'mailto:florian.gavoille.pro@gmail.com',
    download: undefined,
  },
  {
    label: 'PDF',
    href: '/CV.pdf',
    download: 'CV_Florian_Gavoille.pdf',
  },
] as const
</script>

<template>
  <section id="contact" class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div class="mb-10 max-w-2xl">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
      <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Restons en contact</h2>
    </div>

    <div
      class="flex flex-col items-center rounded-3xl border border-base-300 bg-base-100 px-6 py-12 text-center shadow-sm sm:px-10"
    >
      <div class="avatar">
        <div
          class="w-32 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-base-100 sm:w-40"
        >
          <img src="/images/profile.jpg" alt="Photo de profil de Florian GAVOILLE" />
        </div>
      </div>

      <h3 class="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">Florian GAVOILLE</h3>
      <p class="mt-3 max-w-xl text-base text-base-content/70 sm:text-lg">
        Étudiant en BUT Informatique — à la recherche de nouvelles opportunités et collaborations.
      </p>

      <div class="mt-8 flex items-center gap-3 sm:gap-4">
        <a
          v-for="lien in liens"
          :key="lien.label"
          :href="lien.href"
          :target="lien.href.startsWith('http') ? '_blank' : undefined"
          :rel="lien.href.startsWith('http') ? 'noopener noreferrer' : undefined"
          :download="lien.download"
          class="btn btn-circle btn-outline btn-lg transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-content"
          :aria-label="lien.label"
          :title="lien.label"
        >
          <svg
            v-if="lien.label === 'LinkedIn'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"
            />
          </svg>

          <svg
            v-else-if="lien.label === 'GitHub'"
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

          <svg
            v-else-if="lien.label === 'Mail'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
