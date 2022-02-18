import layers from '~icons/lucide/layers'
import code from '~icons/lucide/code-2'
import flask from '~icons/lucide/flask-conical'
import file from '~icons/lucide/file-text'
import check from '~icons/lucide/shield-check'
import wrench from '~icons/lucide/wrench'

export const solutions = [
  {
    name: 'header.menu.solutions.links.design.name',
    description: 'header.menu.solutions.links.design.description',
    icon: layers,
    link: '/solutions/design',
  },
  {
    name: 'header.menu.solutions.links.development.name',
    description: 'header.menu.solutions.links.development.description',
    icon: code,
    link: '/solutions/development',
  },
  {
    name: 'header.menu.solutions.links.testing.name',
    description: 'header.menu.solutions.links.testing.description',
    icon: flask,
    link: '/solutions/testing',
  },
  {
    name: 'header.menu.solutions.links.documentation.name',
    description: 'header.menu.solutions.links.documentation.description',
    icon: file,
    link: '/solutions/documentation',
  },
  {
    name: 'header.menu.solutions.links.deployment.name',
    description: 'header.menu.solutions.links.deployment.description',
    icon: check,
    link: '/solutions/deployment',
  },
  {
    name: 'header.menu.solutions.links.maintanance.name',
    description: 'header.menu.solutions.links.maintanance.description',
    icon: wrench,
    link: '/solutions/maintanance',
  },
]
