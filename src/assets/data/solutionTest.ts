import { gradients } from './gradients'
import check from '~icons/lucide/shield-check'

export const features = [
  {
    icon: check,
    title: 'solutions.items.testing.features.1.title',
    description: 'solutions.items.testing.features.1.description',
    longDescription: 'solutions.items.testing.features.1.longDescription',
    image: 'testing.png',
    placement: 'left',
    background: gradients.purple,
  },
  {
    icon: check,
    title: 'solutions.items.testing.features.2.title',
    description: 'solutions.items.testing.features.2.description',
    longDescription: 'solutions.items.testing.features.2.longDescription',
    image: 'testing.png',
    lists: [
      {
        title: 'solutions.items.testing.features.2.lists.1.title',
        description: 'solutions.items.testing.features.2.lists.1.description',
      },
      {
        title: 'solutions.items.testing.features.2.lists.2.title',
        description: 'solutions.items.testing.features.2.lists.2.description',
      },
      {
        title: 'solutions.items.testing.features.2.lists.3.title',
        description: 'solutions.items.testing.features.2.lists.3.description',
      },
    ],
    placement: 'right',
    background: gradients.green,
  },
  {
    icon: check,
    title: 'solutions.items.testing.features.3.title',
    description: 'solutions.items.testing.features.3.description',
    longDescription: 'solutions.items.testing.features.3.longDescription',
    image: 'testing.png',
    placement: 'left',
    background: gradients.indigo,
  },
  {
    icon: check,
    title: 'solutions.items.testing.features.4.title',
    description: 'solutions.items.testing.features.4.description',
    longDescription: 'solutions.items.testing.features.4.longDescription',
    image: 'testing.png',
    placement: 'right',
    background: gradients.pink,
  },
]
