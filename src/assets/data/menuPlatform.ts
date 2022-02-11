import globe from '~icons/lucide/globe'
import cli from '~icons/lucide/package'
import terminal from '~icons/lucide/terminal-square'
import server from '~icons/lucide/server'

export const platforms = [
  {
    name: 'header.menu.platform.links.web.name',
    description: 'header.menu.platform.links.web.description',
    icon: globe,
    link: '/settings',
  },
  {
    name: 'header.menu.platform.links.cli.name',
    description: 'header.menu.platform.links.cli.description',
    icon: cli,
    link: '/settings',
  },
  {
    name: 'header.menu.platform.links.embeds.name',
    description: 'header.menu.platform.links.embeds.description',
    icon: terminal,
    link: 'https://docs.hoppscotch.io',
  },
  {
    name: 'header.menu.platform.links.native.name',
    description: 'header.menu.platform.links.native.description',
    icon: server,
    link: 'https://docs.hoppscotch.io/guides',
  },
]
