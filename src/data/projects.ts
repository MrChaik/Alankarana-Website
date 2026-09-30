// Completed Alankarana projects ("Our Work"). Real work ONLY: never add concept or AI imagery here
// (concept images belong in data/designs.ts with source: 'concept').
//
// The entries below are PLACEHOLDERS. They are not real projects. To add a real one, fill in the
// fields from a genuine completed project and set status to 'published'.
// Optional fields are simply left out until confirmed; the card never invents them.

export type Project = {
  id: string // also used in the URL: /our-work/:id
  title: string
  occasion?: string // slug from data/occasions.ts
  venue?: string // venue type, e.g. "Home"
  location?: string
  date?: string // 'YYYY-MM-DD'
  coverImage: string // public/images/projects/
  images: string[] // extra photos for the future project page
  shortDescription: string
  clientQuote?: string // only with the client's permission
  clientName?: string
  showClientName: boolean // false unless the client agreed to be named
  status: 'placeholder' | 'published'
}

const placeholder: Pick<Project, 'title' | 'shortDescription' | 'showClientName' | 'status'> = {
  title: 'Project title to be added',
  shortDescription: 'Project details will be added.',
  showClientName: false,
  status: 'placeholder',
}

export const projects: Project[] = [
  { ...placeholder, id: 'project-1', coverImage: '/images/projects/project-01.jpg', images: [] },
  { ...placeholder, id: 'project-2', coverImage: '/images/projects/project-02.jpg', images: [] },
  { ...placeholder, id: 'project-3', coverImage: '/images/projects/project-03.jpg', images: [] },
  { ...placeholder, id: 'project-4', coverImage: '/images/projects/project-04.jpg', images: [] },
  { ...placeholder, id: 'project-5', coverImage: '/images/projects/project-05.jpg', images: [] },
]
