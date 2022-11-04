import { gradients } from './gradients'
import layers from '~icons/lucide/layers'
import code from '~icons/lucide/code-2'
import flask from '~icons/lucide/flask-conical'
import file from '~icons/lucide/file-text'
import check from '~icons/lucide/shield-check'
import wrench from '~icons/lucide/wrench'

export const solutions = [
  {
    title: 'solutions.items.design.title',
    description: 'solutions.items.design.description',
    icon: layers,
    placement: 'left',
    image: 'banner.png',
    background: gradients.purple,
    link: { title: 'action.learn_more', target: '/solutions/design' },
  },
  {
    title: 'solutions.items.development.title',
    description: 'solutions.items.development.description',
    icon: code,
    placement: 'right',
    image: 'banner.png',
    background: gradients.green,
    link: { title: 'action.learn_more', target: '/solutions/development' },
  },
  {
    title: 'solutions.items.testing.title',
    description: 'solutions.items.testing.description',
    icon: flask,
    placement: 'left',
    image: 'banner.png',
    background: gradients.indigo,
    link: { title: 'action.learn_more', target: '/solutions/testing' },
  },
  {
    title: 'solutions.items.documentation.title',
    description: 'solutions.items.documentation.description',
    icon: file,
    placement: 'right',
    image: 'banner.png',
    background: gradients.pink,
    link: { title: 'action.learn_more', target: '/solutions/documentation' },
  },
  {
    title: 'solutions.items.deployment.title',
    description: 'solutions.items.deployment.description',
    icon: check,
    placement: 'left',
    image: 'banner.png',
    background: gradients.purple,
    link: { title: 'action.comming_soon', target: '/solutions' },
  },
  {
    title: 'solutions.items.maintenance.title',
    description: 'solutions.items.maintenance.description',
    icon: wrench,
    placement: 'right',
    image: 'banner.png',
    background: gradients.green,
    link: { title: 'action.comming_soon', target: '/solutions' },
  },
]
