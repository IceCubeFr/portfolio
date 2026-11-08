export interface Etude {
  /** Période affichée, par exemple « 2022 - 2025 ». */
  temporalite: string
  /** Intitulé du diplôme ou de la formation. */
  label: string
  /** Lien vers une image du site, par exemple « /images/etude.svg ». */
  image: string
  /** Liste des compétences acquises. */
  competences: string[]
}

export interface Experience {
  /** Période affichée, par exemple « 2024 - aujourd'hui ». */
  temporalite: string
  /** Intitulé du poste ou de l'expérience. */
  label: string
  /** Lien vers l'image d'illustration, par exemple « /media/experiences/snu.svg ». */
  image: string
  /** Liste des compétences mobilisées. */
  competences: string[]
}

export interface AncienneVersion {
  /** Nom de la version, par exemple « Cycle 1.0 ». */
  label: string
  /** Période couverte par la version. */
  periode: string
  /** Lien vers le site archivé. */
  url: string
}

export interface VersionChangelog {
  /** Numéro de version, par exemple « 2.0.0 ». */
  version: string
  /** Date de publication affichée, par exemple « 8 novembre 2026 ». */
  date: string
  /** Liste brute des changements apportés par cette version. */
  changements: string[]
}

export type TagType = 'dev' | 'comm' | 'gestion' | 'ang' | 'autre'

export interface ProjetTag {
  /** Libellé affiché dans la chip. */
  title: string
  /** Catégorie utilisée pour la couleur de la chip. */
  type: TagType
}

export interface Projet {
  /** Titre de la carte et de la popup. */
  title: string
  /** Image du projet, en local (/media/...) ou distante (https://...). */
  imgUrl: string
  /** Description courte affichée dans la carte. */
  shortDesc: string
  /** Compétences techniques et transverses, affichées en chips. */
  tags: ProjetTag[]
  /** Description courte affichée en sous-titre de la popup. */
  desc: string
  /** Description complète HTML affichée dans la popup. */
  descHTML: string
  /** Lien vers le projet (GitHub, site, etc.). */
  link: string
}
