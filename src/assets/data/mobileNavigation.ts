import globe from '~icons/lucide/globe'
import cli from '~icons/lucide/package'
import terminal from '~icons/lucide/terminal-square'
import server from '~icons/lucide/server'

import layers from '~icons/lucide/layers'
import code from '~icons/lucide/code-2'
import flask from '~icons/lucide/flask-conical'
import file from '~icons/lucide/file-text'
import check from '~icons/lucide/shield-check'
import wrench from '~icons/lucide/wrench'

import at from '~icons/lucide/at-sign'
import briefcase from '~icons/lucide/briefcase'
import edit from '~icons/lucide/edit'
import support from '~icons/lucide/life-buoy'

export const navigation = [
  {
    name: 'Solutions',
    links: [
      {
        name: 'header.menu.solutions.links.design.name',
        icon: layers,
        link: '/settings',
      },
      {
        name: 'header.menu.solutions.links.development.name',
        icon: code,
        link: '/settings',
      },
      {
        name: 'header.menu.solutions.links.testing.name',
        icon: flask,
        link: '/settings',
      },
      {
        name: 'header.menu.solutions.links.documentation.name',
        icon: file,
        link: '/settings',
      },
      {
        name: 'header.menu.solutions.links.deployment.name',
        icon: check,
        link: '/settings',
      },
      {
        name: 'header.menu.solutions.links.maintanance.name',
        icon: wrench,
        link: '/settings',
      },
    ],
  },
  {
    name: 'Platform',
    links: [
      {
        name: 'header.menu.platform.links.web.name',
        icon: globe,
        link: '/settings',
      },
      {
        name: 'header.menu.platform.links.cli.name',
        icon: cli,
        link: '/settings',
      },
      {
        name: 'header.menu.platform.links.embeds.name',
        icon: terminal,
        link: 'https://docs.hoppscotch.io',
      },
      {
        name: 'header.menu.platform.links.native.name',
        icon: server,
        link: 'https://docs.hoppscotch.io/guides',
      },
    ],
  },
  {
    name: 'Company',
    links: [
      {
        name: 'header.menu.company.links.1.name',
        icon: at,
        link: '/about',
      },
      {
        name: 'header.menu.company.links.2.name',
        icon: briefcase,
        link: '/about/jobs',
      },
      {
        name: 'header.menu.company.links.3.name',
        icon: edit,
        link: '/about/integrations',
      },
      {
        name: 'header.menu.company.links.4.name',
        icon: support,
        link: '/about/contact',
      },
    ],
  },
]
