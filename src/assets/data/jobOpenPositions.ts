import home from '~icons/lucide/home'
import clock from '~icons/lucide/clock-4'
import heart from '~icons/lucide/heart'
import settings from '~icons/lucide/settings'
import palette from '~icons/lucide/palette'
import briefcase from '~icons/lucide/briefcase'

export const openPositions = [
  {
    heading: {
      title: 'jobs.openPositions.engineering.heading',
      icon: settings,
    },
    positions: [
      {
        title: 'jobs.openPositions.engineering.items.1.title',
        description: 'jobs.openPositions.engineering.items.1.description',
        link: 'full-stack-engineer',
      },
      {
        title: 'jobs.openPositions.engineering.items.2.title',
        description: 'jobs.openPositions.engineering.items.2.description',
        link: 'back-end-engineer',
      },
      {
        title: 'jobs.openPositions.engineering.items.3.title',
        description: 'jobs.openPositions.engineering.items.3.description',
        link: 'front-end-engineer',
      },
      {
        title: 'jobs.openPositions.engineering.items.4.title',
        description: 'jobs.openPositions.engineering.items.4.description',
        link: 'devOps-engineer',
      },
    ],
  },
  {
    heading: {
      title: 'jobs.openPositions.design.heading',
      icon: palette,
    },
    positions: [
      {
        title: 'jobs.openPositions.design.items.1.title',
        description: 'jobs.openPositions.design.items.1.description',
        link: 'user-interface-and-experience-designer',
      },
    ],
  },
  {
    heading: {
      title: 'jobs.openPositions.product.heading',
      icon: briefcase,
    },
    positions: [
      {
        title: 'jobs.openPositions.product.items.1.title',
        description: 'jobs.openPositions.product.items.1.description',
        link: 'product-manager',
      },
      {
        title: 'jobs.openPositions.product.items.2.title',
        description: 'jobs.openPositions.product.items.2.description',
        link: 'developer-relations-manager',
      },
    ],
  },
]
