import settings from '~icons/lucide/settings'
import palette from '~icons/lucide/palette'
import briefcase from '~icons/lucide/briefcase'

export const openPositions = [
  {
    heading: {
      title: 'careers.openPositions.engineering.heading',
      icon: settings,
    },
    positions: [
      {
        title: 'careers.openPositions.engineering.items.1.title',
        description: 'careers.openPositions.engineering.items.1.description',
        link: 'full-stack-engineer',
      },
      {
        title: 'careers.openPositions.engineering.items.2.title',
        description: 'careers.openPositions.engineering.items.2.description',
        link: 'back-end-engineer',
      },
      {
        title: 'careers.openPositions.engineering.items.3.title',
        description: 'careers.openPositions.engineering.items.3.description',
        link: 'front-end-engineer',
      },
      {
        title: 'careers.openPositions.engineering.items.4.title',
        description: 'careers.openPositions.engineering.items.4.description',
        link: 'devOps-engineer',
      },
    ],
  },
  {
    heading: {
      title: 'careers.openPositions.design.heading',
      icon: palette,
    },
    positions: [
      {
        title: 'careers.openPositions.design.items.1.title',
        description: 'careers.openPositions.design.items.1.description',
        link: 'user-interface-and-experience-designer',
      },
    ],
  },
  {
    heading: {
      title: 'careers.openPositions.product.heading',
      icon: briefcase,
    },
    positions: [
      {
        title: 'careers.openPositions.product.items.1.title',
        description: 'careers.openPositions.product.items.1.description',
        link: 'product-manager',
      },
      {
        title: 'careers.openPositions.product.items.2.title',
        description: 'careers.openPositions.product.items.2.description',
        link: 'developer-relations-manager',
      },
    ],
  },
]
