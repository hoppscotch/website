import globe from '~icons/lucide/globe'
import cli from '~icons/lucide/package'
import terminal from '~icons/lucide/terminal-square'
import server from '~icons/lucide/server'

export const platforms = [
  {
    name: 'header.menu.platform.links.1.name',
    description: 'header.menu.platform.links.1.description',
    icon: globe,
    link: '/settings',
  },
  {
    name: 'header.menu.platform.links.2.name',
    description: 'header.menu.platform.links.2.description',
    icon: cli,
    link: '/settings',
  },
  {
    name: 'header.menu.platform.links.3.name',
    description: 'header.menu.platform.links.3.description',
    icon: terminal,
    link: 'https://docs.hoppscotch.io',
  },
  {
    name: 'header.menu.platform.links.4.name',
    description: 'header.menu.platform.links.4.description',
    icon: server,
    link: 'https://docs.hoppscotch.io/guides',
  },
]
